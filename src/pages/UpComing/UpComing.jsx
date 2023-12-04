import useUpcoming from "../../hooks/useUpcoming";


const UpComing = () => {
    const [upComingMeal] = useUpcoming()

    return (
        <div className="mt-12">
            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upComingMeal.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-48" src={item.image} alt="meals" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Title: {item.title}
                <div className="badge badge-secondary h-8">
                  Price: {item.price}
                </div>
              </h2>
              <p>Category: {item.category}</p>
              <button className="btn bg-red-200">Like</button>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default UpComing;