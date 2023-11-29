/* eslint-disable react/prop-types */


const LunchCategory = ({ m }) => {
    return (
        <div className="mt-8">
         <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="w-full h-48" src={m.image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Title: {m.title}
          <div className="badge badge-secondary">Price: {m.price}</div>
        </h2>
        <p>Category: {m.category}</p>
        <div className="flex gap-6">
        <div className="badge badge-outline">Likes: {m.likes}</div> 
          <div className="badge badge-outline">Reviews: {m.reviews}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-red-200">View Details</button>
          
        </div>
      </div>
    </div>
        </div>
      );
};

export default LunchCategory;