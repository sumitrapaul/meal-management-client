import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useSingleRequest from "../../../hooks/useSingleRequest";


const RequestedMeal = () => {
    const { user } = useAuth()
    console.log(user)
    const [mealRequest] = useSingleRequest()
    console.log(mealRequest)
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
                    <td><button className="btn bg-red-200">Cancel</button></td>
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