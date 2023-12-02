import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import RequestedMeal from "../pages/Dashboard/RequestedMeal/RequestedMeal";
import Reviews from "../pages/Dashboard/Reviews/Reviews";
import AllMeals from "../pages/Dashboard/AllMeals/AllMeals";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddMeal from "../pages/Dashboard/AddMeal/AddMeal";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import AllReviews from "../pages/Dashboard/AllReviews/AllReviews";
import ServeMeals from "../pages/Dashboard/ServeMeals/ServeMeals";
import Meals from "../pages/Meals/Meals";
import MealDetails from "../pages/Home/MealDetails/MealDetails";
import UpcomingMeals from "../pages/Dashboard/UpcomingMeals/UpcomingMeals";
import AdminRoutes from "./AdminRoutes";
import UpdateMeals from "../pages/Dashboard/UpdateMeals/UpdateMeals";
import Checkout from "../pages/Checkout/Checkout";
// import AdminRoutes from "./AdminRoutes";
// import AdminRoutes from "./AdminRoutes";

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
            path:'/m/:_id',
            element:<MealDetails></MealDetails>,
            loader:({params}) => `http://localhost:5000/mealDeatils/${params._id}`
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/meals',
          element:<Meals></Meals>
        },
        {
          path:'/checkout/:package_name',
          element:<Checkout></Checkout>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'profile',
          element:<Profile></Profile>
        },
        {
          path:'requestedMeals',
          element:<RequestedMeal></RequestedMeal>
        },
        {
          path:'reviews',
          element:<Reviews></Reviews>
        },
        /**admin route */
        {
          path:'adminProfile',
          element:<AdminRoutes><AdminProfile></AdminProfile></AdminRoutes>
        },
        {
          path:'users',
          element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
        },
        {
          path:'addMeal',
          element:<AdminRoutes><AddMeal></AddMeal></AdminRoutes>
        },
        {
          path:'allMeals',
          element:<AdminRoutes><AllMeals></AllMeals></AdminRoutes>
        },
        {
          path:'updateMeals/:id',
          element:<AdminRoutes><UpdateMeals></UpdateMeals></AdminRoutes>,
          loader:({params}) => fetch (`http://localhost:5000/allMeals/${params.id}`)
        },
        {
          path:'allReviews',
          element:<AllReviews></AllReviews>
        },
        {
          path:'serveMeals',
          element:<ServeMeals></ServeMeals>
        },
        {
          path:'addToUpcoming',
          element:<UpcomingMeals></UpcomingMeals>
        },
      ]
    }
  ]);