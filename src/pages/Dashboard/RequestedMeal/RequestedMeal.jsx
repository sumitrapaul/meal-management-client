import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useSingleRequest from "../../../hooks/useSingleRequest";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const RequestedMeal = () => {
    const { user } = useAuth()
    console.log(user)
    const [mealRequest, , refetch] = useSingleRequest()
    const axiosSecure = useAxiosSecure()

    
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
          const res = await axiosSecure.delete(`/requests/${item._id}`);
           console.log(res.data)
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: `${item.mealTitle} has been deleted.`,
              icon: "success",
            });
          }
        }
      });
    };


    return (
        <div>
            <h3 className="text-3xl text-center mt-12">My requested Meals</h3>
            <div>
      <Helmet>
        <title>Hostel Management | Requested Meals</title>
      </Helmet>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Number of Likes</th>
              <th>Number of Reviews</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                mealRequest.map(item => <tr key={item._id}>
                    <th>{item.mealTitle}</th>
                    <td>{item.likes}</td>
                    <td>{item.reviews}</td>
                    <td>{item.status}</td>
                    <td><button onClick={() => handleDeleteItem(item)} className="btn bg-red-200">Cancel</button></td>
                    </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default RequestedMeal;