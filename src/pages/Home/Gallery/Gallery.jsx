import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Gallery = () => {

    useEffect(() => {
        AOS.init()
      },[])

    return (
        <div className="mt-16">
           <h3 className="text-4xl text-center font-bold mb-12">Dining<span className="text-red-700"> foods gallery</span></h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-aos="fade-up-right">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/qBFgsTK/image.png" alt="" />
            </div>
            <div data-aos="fade-up-left">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/GxBjsxV/image.png" alt="" />
            </div>
            <div data-aos="fade-down-right">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/R9nPL1R/image.png" alt="" />
            </div>
            <div data-aos="fade-down-left">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/12rvc9J/image.png" alt="" />
            </div>
            <div data-aos="flip-left">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/WtzrhHK/image.png" alt="" />
            </div>
            <div data-aos="flip-right">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/D82zxmW/image.png" alt="" />
            </div>
            <div data-aos="zoom-in">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/85kWg5C/image.png" alt="" />
            </div>
            <div data-aos="fade-down-left">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/86bqk1S/image.png" alt="" />
            </div>
            <div data-aos="fade-down-right">
                <img className="w-full h-64 border border-black rounded-xl" src="https://i.ibb.co/WgvqhTJ/image.png" alt="" />
            </div>
            </div> 
        </div>
    );
};

export default Gallery;