
import useMeals from "../../../hooks/useMeals";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCategory from "./AllCategory";
import BreakfastCategory from "./BreakfastCategory";
import LunchCategory from "./LunchCategory";
import DinnerCategory from "./DinnerCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const [meal] = useMeals();

  const breakfast = meal.filter((item) => item.category === "Breakfast");
  const lunch = meal.filter((item) => item.category === "Lunch");
  const dinner = meal.filter((item) => item.category === "Dinner");

  return (
    <div className="mt-12">
      <h3 className="text-4xl text-center font-bold mb-12">Meals<span className="text-red-700"> by category</span></h3>
      <Tabs>
        <TabList className="mt-12">
          <Tab>All Meals</Tab>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meal.map((m) => (
              <AllCategory key={m._id} m={m}></AllCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakfast.map((m) => (
              <BreakfastCategory key={m._id} m={m}></BreakfastCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lunch.map((m) => (
              <LunchCategory key={m._id} m={m}></LunchCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dinner.map((m) => (
              <DinnerCategory key={m._id} m={m}></DinnerCategory>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <div className="flex justify-center mt-12"><Link to='/meals'><button className="btn bg-red-200">See All</button></Link></div>
    </div>
  );
};

export default Categories;
