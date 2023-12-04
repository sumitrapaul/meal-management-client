import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useMember from "../../hooks/useMember";
import PaymentSuccessful from "./PaymentSuccessful";

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const id = useParams()
    // console.log(id._id)
    const [member, ,refetch] = useMember()
    const axiosSecure = useAxiosSecure()
    const packageName =member.find((mem) => mem.package_name == id.package_name)  
    console.log(packageName)
    const totalPrice = packageName?.price || 0
    // console.log(totalPrice) 
    
    const handleClose = () =>{
        setIsModalOpen(false)
        refetch()
        navigate('/')
    }

    // const [] = useUsers();

   useEffect(() =>{
    if(transactionId){
        setIsModalOpen(true)
    }
   },[transactionId])
    useEffect(() =>{
          if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res =>{
             console.log(res.data.clientSecret)
             setClientSecret(res.data.clientSecret)
            })
          }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return;
        }

        const card =elements.getElement(CardElement)

        if(card == null){
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            console.log('Payment error', error)
            setError(error.message)
        }
        else{
            console.log('Payment method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                     email: user?.email || 'anonymous',
                     name:  user?.name || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }
        else{
            // console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transiction', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                    const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    memberShipId: packageName.id,
                    membershipName: packageName.package_name,
                    memberShipprice: packageName.price
                   
                 }

                 
                 const paymentBadge = {
                  
                    membershipName: packageName.package_name
                   
                   
                 }

                 console.log(payment)
                 const res =await axiosSecure.post('/payments', payment)
                 console.log(res.data)
                 const res1 = await axiosSecure.patch(`/updateBadge/${user.email}`, paymentBadge)
                 console.log(res1.data)
               
            }
        }

    }


    return (
        <div>
          
            <form onSubmit={handleSubmit}>
            <h3 className="text-4xl text-center font-bold mb-12 mt-12">Check<span className="text-red-700"> out</span></h3>
            <CardElement>
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146'
                        }
                    }
                }}
            </CardElement>
            <button className="btn btn-primary my-4 btn-sm" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-blue-700">TransactionId: {transactionId}</p>}
            </form> 
            <PaymentSuccessful isOpen={isModalOpen} onClose={handleClose} transactionId={transactionId}></PaymentSuccessful>
        
        </div>
    );
};


export default Checkout;
