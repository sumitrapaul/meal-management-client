const Membership = () => {
  return (
    <div className="mt-12">
      <h3 className="text-4xl text-center font-bold mb-12">
        Membership<span className="text-red-700"> section</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <h3 className="text-4xl text-center font-bold mb-4 mt-2">Package: Silver</h3> 
          <figure>
            <img src="https://i.ibb.co/5jGjCbg/image.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Price: 70</h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <h3 className="text-4xl text-center font-bold mb-4 mt-2">Package: Gold</h3>
          <figure>
            <img src="https://i.ibb.co/XZCqP4Z/image.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Price: 120</h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <h3 className="text-4xl text-center font-bold mb-4 mt-2">Package: Platinum</h3>
          <figure>
            <img src="https://i.ibb.co/cYqdLJK/image.png" alt="Shoes" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">Price: 150</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
