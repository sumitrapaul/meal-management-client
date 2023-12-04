import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/KqYjDM5/image.png)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-3xl font-bold">
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to University',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welcome to University Hostel Meals',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block', gap: '6px' }}
      repeat={Infinity}
    />
       </h1>
      <p className="mb-5 text-xl">Revolutionizing campus dining at <span className="text-3xl text-red-800 font-bold">JUST</span>.Delicious meals,tailored for students.Dine,study and thrive!</p>
      <div className="form-control">
      <div className="input-group flex justify-center">
      <input type="text" placeholder="category" className="input input-bordered md:w-[400px]" />
          
          <button className="btn ml-4"><IoSearch className="text-2xl text-black"></IoSearch></button>
         
      </div>
         
     </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;