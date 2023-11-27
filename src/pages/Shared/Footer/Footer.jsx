import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-16">
           <footer className="footer p-10 bg-black text-base-content">
  <aside>
  <img className="h-18 w-20" src="https://i.ibb.co/KqGxXJG/image.png" alt="" />
    <h3 className="font-bold text-xl text-white">Jashore University of <br/> Science and Technology, <span className="text-red-700 text-center">JUST</span></h3>
  </aside> 
  <nav>
    <header className="footer-title text-red-700 text-xl">Social Links</header> 
    <div className="flex gap-4">
    <p className="link link-hover text-2xl text-blue-700"><FaFacebook /></p>
    <p className="link link-hover text-2xl text-red-700"><FaYoutube /></p>
    <p className="link link-hover text-2xl text-pink-800"><FaInstagramSquare /></p>
    </div>
  </nav> 
  <nav>
    <header className="footer-title text-red-700 text-xl">Meal Services</header> 
    <a className="link link-hover text-white">Daily Meal Plans</a>
    <a className="link link-hover text-white">Special Dietary Options</a>
    <a className="link link-hover text-white">Nutrition Consultation</a>
  </nav> 
 
  <nav>
    <header className="footer-title text-red-700 text-xl">Address</header> 
    <a className="link link-hover text-white">JUST</a>
    <a className="link link-hover text-white">Palbari, Jashore</a>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;