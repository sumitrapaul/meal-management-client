import { Helmet } from "react-helmet-async";
import useUpcoming from "../../../hooks/useUpcoming";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpcomingMeals = () => {
   const [ upComingMeal,,refetch ] = useUpcoming()
   const {user} = useAuth();
   const { email, displayName } = user || "";
   const axiosSecure = useAxiosSecure();


   const handlePublish = async (data) => {

    if(data.likes >= 10)
    {
      data.useremail = email;
      data.userName = displayName;
        const mealItem = {
          title: data.title,
          category: data.category,
          ingredients: data.ingredients,
          price: data.price,
          description: data.description,
          rating: data.rating,
          image: data.image,
          name: data.name,
          email: data.email,
        };

        const mealRes = await axiosSecure.post("/addMeal", mealItem);
        if (mealRes.data.insertedId) {

          await axiosSecure.delete(`/upcoming/${data._id}`)

          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.title} published successfully!!`,
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
        title: `${data.title} need minimum 10 likes for publish!!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };


    return (
        <div>
            <div>
      <Helmet>
        <title>Hostel Management | Upcoming Meals</title>
      </Helmet>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Likes Count</th>
              <th>Reviews Count</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                upComingMeal.map(item => <tr key={item._id}>
                    <th>{item.title}</th>
                    <td>{item.likes}</td>
                    <td>{item.reviews}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><button onClick={() => handlePublish(item)} className="btn bg-red-200">Publish</button></td>
                   
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div> 
        </div>
    );
};

export default UpcomingMeals;