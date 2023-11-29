/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const BreakfastCategory = ({m}) => {
    const { user } = useAuth()
const { _id } = m
    return (
        <div className="mt-8">
         <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="w-full h-48" src={m.image} alt="Shoes" /></figure>
      <div className="card-body gap-3">
        <h2 className="card-title">
          Title: {m.title}
          <div className="badge badge-secondary">Price: {m.price}</div>
        </h2>
        <p><span className="text-md font-bold px-2">Category:</span> {m.category}</p>
  
  <div className="badge badge-outline h-6"><span className="text-md font-bold px-2">Ratings:</span> {m.rating}</div>
       
        <div className="card-actions justify-end">
        <Link to={`/m/${_id}`}>
      <button className="btn bg-red-200">View Details</button>
      </Link>
          
        </div>
      </div>
    </div>
        </div>
      );
};

export default BreakfastCategory;