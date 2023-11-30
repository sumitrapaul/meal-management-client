import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMeals = () => {
    const { _id, title, category, ingredients, price } = useLoaderData()
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
   
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
        image: res.data.data.display_url,
      };

      const mealRes = await axiosSecure.patch(`/allMeals/${_id}`, mealItem);
      if (mealRes.data.modifiedCount > 0) {
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} updated successfully!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data)
  };

    return (
        <div className="mt-6">
        <Helmet>
          <title>Hostel Management | Update Meal</title>
        </Helmet>
        <h2 className="text-4xl pt-8 font-bold text-center mb-8 underline">
          Add Meal
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
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
            defaultValue={title}
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
          defaultValue={category}
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
            <input type="file"
            {...register("image", { required: true })}
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
            defaultValue={ingredients}
            {...register("ingredients", { required: true })}
            placeholder="Ingredients"
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
            defaultValue={price}
            {...register("price", { required: true })}
            placeholder="Price"
            required
            className="bg-gray-300 px-5 py-2 rounded"
          />
        
       
        
          <input
            type="submit"
            value="Update meal"
            className="btn btn-block text-white bg-gray-700"
          />
        
        </form>
      </div>
    );
};

export default UpdateMeals;