/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/usersProfile/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  });

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-gray-300 shadow-xl mt-16">
        <div className="avatar flex justify-center items-center mt-8">
          <div className="w-24 rounded-full">
            <img src={user.photoURL} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <p className="badge badge-primary badge-outline">{users?.badge}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
