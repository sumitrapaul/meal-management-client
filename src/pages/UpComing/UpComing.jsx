import Swal from "sweetalert2";
import useUpcoming from "../../hooks/useUpcoming";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpComing = () => {
  const [upComingMeal, , refetch] = useUpcoming();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  
  const handleLike = async (id) => {

    if(user?.email)
    {
      axiosSecure.patch(`/upcoming/${id}`).then((res) => {
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
    <div className="mt-12">
      <Helmet><title>Hostel Management | Upcoming</title></Helmet>
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
              <div className="flex ">
                <p>Category: {item.category}</p>
                <p>Likes: {item.likes}</p>
              </div>
              <button
                onClick={() => handleLike(item?._id)}
                className="btn bg-red-200"
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComing;
