/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useMeals from "../../../hooks/useMeals";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import Swal from "sweetalert2";


const MealDetails = () => {
    const {user, loading} = useContext(AuthContext)
    const { _id } =useParams()
    const [users, refetch] = useUsers([]);
   const navigate = useNavigate()

    const [mealDetails, mealLoading] = useMeals()
    const [like, setLike] = useState(false)
    const axiosSecure = useAxiosSecure()
    const selectedMeal = mealDetails.find((meal) => meal._id === _id)
    if(!selectedMeal){
        return <div>loading...</div>
    }
     const { image, name, title, description, ingredients, rating, likes, reviews, date} = selectedMeal

     const handleRequested =async () =>{

  
      if(users[0].badge !== "Bronze")
      {
        const request = {
          mealTitle: title,
          mealId:_id,
          email: user.email,
          displayName: user.displayName,
          likes: likes,
          reviews: reviews,
          status: 'pending'
        }

        const res = await axiosSecure.post('/requests', request)
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:  'Meal requested successfully!!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      else
      {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: 'Need premium package for request meal!!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
     }

     const handleLike = async (id) => {
           
      if(user?.email)
      {
        axiosSecure.patch(`/meals/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
            });
          }
        });
      }
      else{
        navigate('/login')
      }
    };

    return (
        <div>
          <Helmet><title>Hostel Management | Meal Details</title></Helmet>
            <div className="mt-12">
         <div className="card card-compact w-full max-w-7xl mx-auto bg-red-100 shadow-xl">
      <figure><img className="w-full lg:max-w-7xl h-[400px] lg:h-[500px] rounded" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title mb-2">
          Distributor: {name}
        </h2>
        <p><span className="text-xl font-bold mb-2">Post:</span> {date}</p>
        <p><span className="text-xl font-bold mb-2">Rating:</span> {rating}</p>
        <div className="flex gap-6 mb-2 mt-2">
          <div className="badge badge-outline h-6"><span className="text-xl font-bold px-2">Reviews: </span> {reviews}</div>
        </div>
        <p><span className="text-xl font-bold">Ingredients:</span> {ingredients}</p>
        <p><span className="text-xl font-bold">Description:</span> {description}</p>
        <div className="card-actions flex gap-5 mt-4">
       
      <button onClick={() => handleLike(_id)} className="btn bg-red-200">Like</button>
      <button onClick={() => handleRequested(_id)} className="btn bg-red-200">Meal Request</button>
      </div>
      </div>
    </div>
        </div>  
        </div>
    );
};

export default MealDetails;