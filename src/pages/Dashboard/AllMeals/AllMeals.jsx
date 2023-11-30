import { Helmet } from "react-helmet-async";
import useMeals from "../../../hooks/useMeals";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const AllMeals = () => {
  const [meal, , refetch] = useMeals();
  const axiosSecure = useAxiosSecure();


  const handleDeleteItem = (item) => {
    console.log(item._id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/allMeals/${item._id}`);
         console.log(res.data)
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: `${item.title} has been deleted.`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Hostel Management | All Meals</title>
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
              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {meal.map((item) => (
              <tr key={item._id}>
                <th>{item.title}</th>
                <td>{item.likes}</td>
                <td>{item.reviews}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/dashboard/updateMeals/${item._id}`}>
                  <button className="btn bg-red-200">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn bg-red-200"
                  >
                    Delete
                  </button>
                </td>
                <td>
                <Link to={`/m/${item._id}`}>
                  <button className="btn bg-red-200">View Meal</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
