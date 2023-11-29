import { Helmet } from "react-helmet-async";
import useMeals from "../../../hooks/useMeals";
import useAuth from "../../../hooks/useAuth";


const ServeMeals = () => {
    const [ meal ] = useMeals()
    const { user } = useAuth()
    console.log(user)
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
                meal.map(item => <tr key={item._id}>
                    <th>{item.title}</th>
                    <td>{item.user?.email}</td>
                    <td>{item.user?.displayName}</td>
                    <td>Pending</td>
                    <td><button className="btn bg-red-200">Serve</button></td>
                    </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ServeMeals;