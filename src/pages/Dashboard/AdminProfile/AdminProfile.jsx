import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useMeals from "../../../hooks/useMeals";


const AdminProfile = () => {
    const { user } = useAuth()
    const [meal] = useMeals()
    return (
        <div>
          <Helmet><title>Hostel Management | Admin Profile</title></Helmet>
            <div className="flex justify-center items-center">
            {
                user && (
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Name: {user.displayName}</h2>
                      <p>Email: {user.email}</p>
                      <div className="card-actions">
                      <h2 className="card-title">Number of meals: {meal.length}</h2>
                      </div>
                    </div>
                  </div>
                )
            }
            </div>
        </div>
    );
};

export default AdminProfile;