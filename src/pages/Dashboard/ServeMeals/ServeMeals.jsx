import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useRequest from "../../../hooks/useRequest";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ServeMeals = () => {
    const { user } = useAuth()
    console.log(user)
    const [mealRequest, ,refetch] = useRequest()
    console.log(mealRequest)
    const axiosSecure= useAxiosSecure()

    const handleServe = (id) =>{
      Swal.fire({
        title: "Are you sure to serve?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, served!"
      }).then((result) => {
        if(result.isConfirmed) {
          axiosSecure.patch(`/requests/serve/${id}`)
          .then(res =>{
          if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
              title: "Delivered!",
              text: "Meal has been delivered.",
              icon: "success"
            });
          }
          else{
            Swal.fire({
              title: "Already delivered!",
              icon: "success"
            });
          }
          
         
        })
        
      }
      });
    }
    return (
        <div>
      <Helmet>
        <title>Hostel Management | Serve Meals</title>
      </Helmet>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Request Email</th>
              <th>Request Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                mealRequest.map(item => <tr key={item._id}>
                    <th>{item.mealTitle}</th>
                    <td>{item.email}</td>
                    <td>{item.displayName}</td>
                    <td>{item.status}</td>
                    <td><button onClick={() => handleServe(item?._id)} className="btn bg-red-200">Serve</button></td>
                    </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ServeMeals;