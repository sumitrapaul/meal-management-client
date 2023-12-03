import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import useMembership from "../../hooks/useMembership";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";


// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    // const axiosPublic = useAxiosPublic()
    const [member] = useMembership()
    const axiosSecure = useAxiosSecure()
    const totalPrice =member.reduce((total, mem) => total + mem.price, 0)      
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
            </form> 
            
        
        </div>
    );
};


// const Payment = () => {
//     return (
//         <div>
//            <Elements stripe={stripePromise}>
//                  <Checkout/>
//            </Elements>
//         </div>
//     );
// };

export default Checkout;
