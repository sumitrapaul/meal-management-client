import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const [isAdmin] = useAdmin();
  // console.log(isAdmin)
  return (
    <div className="flex gap-6">
     
      <div className="w-64 min-h-screen bg-red-200">
        <ul className="menu space-y-4">
          {/* {isAdmin ? ( */}
            <>
                <li>
                <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
              </li>
                <li>
                 <NavLink to="/dashboard/users">Manage Users</NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/addMeal">Add meal</NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/allMeals">All meals</NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/allReviews">All reviews</NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/serveMeals">Serve meals</NavLink>
              </li>
                <li>
                <NavLink to="/dashboard/upcomingMeals">Upcoming meals</NavLink>
              </li>
            </>
          {/* ) : (
            <>
              <li>
                <NavLink to="/dashboard/profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/requestedMeals">
                  Requested Meals
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">My Reviews</NavLink>
              </li>
            </>
          )} */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
