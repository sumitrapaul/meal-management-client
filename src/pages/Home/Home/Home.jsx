import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Categories from "../Categories/Categories";
import Membership from "../Membership/Membership";


const Home = () => {
    return (
        <div>
            <Helmet><title>Hostel Management | Home</title></Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Membership></Membership>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;