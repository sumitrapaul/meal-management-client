import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

import { IoMdNotificationsOutline } from "react-icons/io";
import useUpcoming from "../../../hooks/useUpcoming";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [ upComingMeal ] = useUpcoming()

  const [showProfileDropDown, setShowProfileDropDown] = useState(false)
  const handleLogout = () => {
    logOut()
      .then(() => {
        
      })
      .catch((error) => console.log(error));
  };

const toggleDropDown = () =>{
  setShowProfileDropDown((prev) => !prev)
}

const closeProfile = () => {
  setShowProfileDropDown(false)
}

  const navLinks = (
    <>
      <li>
        <Link className="text-xl" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-xl" to="/meals">Meals</Link>
      </li>
      <li>
        <Link className="text-xl" to="/upcoming">
          <div className="flex">
            Upcoming
            <IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>
            <div className="badge badge-secondary">+{upComingMeal.length}</div>
          </div>
        </Link>
      </li>
    </>
  );

  const profileLinks = (
    <>
      <li className="text-black">{user?.displayName}</li>
      <li className="text-black">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="text-black" onClick={handleLogout}>Logout</li>
    </>
  );

  return (
    <div className="navbar bg-gray-400 lg:text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-black lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-500 text-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-18 w-20"
            src="https://i.ibb.co/KqGxXJG/image.png"
            alt=""
          />
          <h3 className="text-4xl text-white -ml-4 font-bold">MealMate</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-center">
            <div className="dropdown dropdown-hover">
              <label onClick={toggleDropDown} tabIndex={0} className="hover:underline">
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt=""
                />
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content menu z-[1] -ml-20 p-2 bg-base-100 shadow rounded-box w-52 ${showProfileDropDown ? 'block' : 'hidden'}`}
                onBlur={closeProfile}
              >
                {profileLinks}
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline border-red-400 text-white">
              Join Us
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
