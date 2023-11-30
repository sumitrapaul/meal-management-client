/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddMeal = () => {
  const { user, loading } = useContext(AuthContext);
  const { register, handleSubmit, setValue, reset } = useForm();
  const { email, displayName } = user || "";
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data, action) => {
    data.useremail = email;
    data.userName = displayName;
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const mealItem = {
        title: data.title,
        category: data.category,
        ingredients: data.ingredients,
        price: parseFloat(data.price),
        description: data.description,
        rating: data.rating,
        image: res.data.data.display_url,
        name: data.name,
        email: data.email,
      };

      const apiUrl = action === "addToUpcoming" ? "/addToUpcoming" : "/addMeal";
      const mealRes = await axiosSecure.post(apiUrl, mealItem);
      if (mealRes.data.insertedId) {
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} added successfully!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="mt-6">
      <Helmet>
        <title>Hostel Management | Add Meal</title>
      </Helmet>
      <h2 className="text-4xl pt-8 font-bold text-center mb-8 underline">
        Add Meal
      </h2>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data, data.action))}
        className="flex flex-col gap-3"
      >
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Meal Title
        </label>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Meal Title"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Meal Category
        </label>
        <select
          {...register("category", { required: true })}
          className="text-input bg-gray-300 px-5 py-2 rounded"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Meal Image
        </label>
        <div className="w-full">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Ingredients
        </label>
        <input
          type="text"
          {...register("ingredients", { required: true })}
          placeholder="Ingredients"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Description
        </label>
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Description"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Price
        </label>
        <input
          type="text"
          {...register("price", { required: true })}
          placeholder="Price"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Rating
        </label>
        <input
          type="number"
          {...register("rating", { required: true })}
          placeholder="rating"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Admin Name
        </label>
        <input
          type="text"
          defaultValue={displayName}
          {...register("name", { required: true })}
          readOnly
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <label
          htmlFor=""
          className="text-md font-semibold text-gray-900 px-1 -mb-3"
        >
          Admin Email
        </label>
        <input
          type="text"
          defaultValue={email}
          {...register("email", { required: true })}
          readOnly
          className="bg-gray-300 px-5 py-2 rounded"
        />
        <input
          type="submit"
          value="Add meal"
          onClick={() => setValue("action", "addMeal")}
          className="btn btn-block text-white bg-gray-700"
        />
        <input
          type="submit"
          value="Add to upcoming"
          onClick={() => setValue("action", "addToUpcoming")}
          className="btn btn-block text-white bg-gray-700"
        />
      </form>
    </div>
  );
};

export default AddMeal;
