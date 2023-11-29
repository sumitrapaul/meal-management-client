/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useMeals from "../../../hooks/useMeals";


const MealDetails = () => {
    const {user, loading} = useContext(AuthContext)
    const { _id } =useParams()

    const [mealDetails, mealLoading] = useMeals()

    const selectedMeal = mealDetails.find((meal) => meal._id === _id)
    if(!selectedMeal){
        return <div>loading...</div>
    }
     const { image, name, description, ingredients, rating, likes, reviews, date} = selectedMeal
    return (
        <div>
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
       
      <button className="btn bg-red-200">Like</button>
      <button className="btn bg-red-200">Meal Request</button>
     
          
        </div>
      </div>
    </div>
        </div>  
        </div>
    );
};

export default MealDetails;