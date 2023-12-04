import { Helmet } from "react-helmet-async";
import useUpcoming from "../../../hooks/useUpcoming";


const UpcomingMeals = () => {
   const [ upComingMeal ] = useUpcoming()
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
                    <td><button className="btn bg-red-200">Publish</button></td>
                   
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