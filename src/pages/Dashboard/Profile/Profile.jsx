/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useUsers from "../../../hooks/useUsers";


const Profile = () => {
 
  const [users, refetch] = useUsers([]);
  console.log(users);
  
  return (
    <div className="flex justify-center">
      {users.map((user) => (
        <div key={user._id} className="card w-96 bg-gray-300 shadow-xl mt-16">
          <div className="avatar flex justify-center items-center mt-8">
            <div className="w-24 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p className="badge badge-primary badge-outline">{user?.badge}</p>
            
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Profile;
