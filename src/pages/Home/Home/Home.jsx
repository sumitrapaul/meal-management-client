import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Helmet><title>Hostel Management | Home</title></Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;