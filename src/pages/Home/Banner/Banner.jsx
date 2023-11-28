import { IoSearch } from "react-icons/io5";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/KqYjDM5/image.png)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-3xl font-bold">Welcome to University Hostel Meals</h1>
      <p className="mb-5 text-xl">Revolutionizing campus dining at <span className="text-3xl text-red-800 font-bold">JUST</span>.Delicious meals,tailored for students.Dine,study and thrive!</p>
      <div className="form-control">
      <div className="input-group flex justify-center">
      <input type="text" placeholder="category" className="input input-bordered md:w-[400px]" />
          
          <IoSearch className="text-2xl -ml-8 mt-3 text-black"></IoSearch>
         
      </div>
         
     </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;