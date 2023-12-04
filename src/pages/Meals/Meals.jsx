import { Helmet } from "react-helmet-async";
import useMeals from "../../hooks/useMeals";
import { useEffect, useState } from "react";

const Meals = () => {
  const [meal] = useMeals();
  console.log(meal);
  const [search, setSearch] = useState("");
  const [filterMeals, setFilterMeals] = useState(meal);

  useEffect(() => {
    setFilterMeals(meal);
  }, [meal]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = search.toLowerCase();
    setSearch(searchTerm);

    const filtered = meal.filter((m) => m.title.toLowerCase() === searchTerm);
    setFilterMeals(filtered);
    setSearch("");
  };


  const handlePriceFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const minPrice = parseInt(form.minPrice.value);
    const maxPrice = parseInt(form.maxPrice.value);
    const priceFilter = meal.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    setFilterMeals(priceFilter)

  };

  const handleCategoryFilter = (e) => {
    const category = e.target.value;
    const categoryFilter = meal.filter((item) => item?.category === category);
    setFilterMeals(categoryFilter)

  };

  return (
    <div>
      <Helmet>
        <title>Hostel Management | Meals</title>
      </Helmet>
      <form onSubmit={handleSearch} className="flex justify-center mt-12 mb-12">
        <input
          type="text"
          name="search"
          placeholder="Search meal..."
          className="border-3 border-[#006fdh] bg-gray-200 px-5 py-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          className="bg-gray-600 text-white rounded px-2 py-2"
          value="Search"
        />
      </form>


      <div className="border-2 bg-gray-300 mb-12 w-12/12 p-2 flex">
        <div>
          <p className="text-xl my-2 font-bold">Price</p>
          <div className="w-full">
          <form onSubmit={handlePriceFilter}>
            <input type="number" placeholder="Min price" name="minPrice" className="w-10/12 mx-auto mb-2 border-2 p-2 rounded-md" />
            <input type="number" placeholder="Max price" name="maxPrice" className="w-10/12 mx-auto mb-2 border-2 p-2 rounded-md"/> <br />
            <button type="submit" className="btn block bg-red-200">Search</button>
          </form>
          </div>
        </div>
        <div className="">
          <p className="text-xl my-2 font-bold mb-2">Category </p>
          <form>
            <input onChange={handleCategoryFilter} type="radio" value="Breakfast" name="category" className="mb-3"/> Breakfast <br />
            <input onChange={handleCategoryFilter} type="radio" value="Lunch" name="category" className="mb-3" /> Lunch <br />
            <input onChange={handleCategoryFilter} type="radio" value="Dinner" name="category" /> Dinner
          </form>
        </div>
      </div>










      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterMeals.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-48" src={item.image} alt="meals" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Title: {item.title}
                <div className="badge badge-secondary h-8">
                  Price: {item.price}
                </div>
              </h2>
              <p>Category: {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
