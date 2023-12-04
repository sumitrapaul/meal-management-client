import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const navFoot = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div className="overflow-x-hidden">
            {navFoot ||<Navbar/>}
            <Outlet/>
            {navFoot || <Footer/>} 
        </div>
    );
};

export default Main;