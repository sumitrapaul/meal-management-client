import { Helmet } from "react-helmet-async";
import useMeals from "../../../hooks/useMeals";
const AllMeals = () => {
    const [ meal ] = useMeals()

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
            {
                meal.map(item => <tr key={item._id}>
                    <th>{item.title}</th>
                    <td>{item.likes}</td>
                    <td>{item.reviews}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><button className="btn bg-red-200">Update</button></td>
                    <td><button className="btn bg-red-200">Delete</button></td>
                    <td><button className="btn bg-red-200">View Meal</button></td>
                   
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
