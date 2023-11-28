import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
// import Profile from "../pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
// import RequestedMeal from "../pages/Dashboard/RequestedMeal/RequestedMeal";
// import Reviews from "../pages/Dashboard/Reviews/Reviews";
import AllMeals from "../pages/Dashboard/AllMeals/AllMeals";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddMeal from "../pages/Dashboard/AddMeal/AddMeal";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // {
        //   path:'profile',
        //   element:<Profile></Profile>
        // },
        // {
        //   path:'requestedMeals',
        //   element:<RequestedMeal></RequestedMeal>
        // },
        // {
        //   path:'reviews',
        //   element:<Reviews></Reviews>
        // },
        /**addmin route */
        {
          path:'adminProfile',
          element:<AdminProfile></AdminProfile>
        },
        {
          path:'users',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'addMeal',
          element:<AddMeal></AddMeal>
        },
        {
          path:'allMeals',
          element:<AllMeals></AllMeals>
        },
      ]
    }
  ]);