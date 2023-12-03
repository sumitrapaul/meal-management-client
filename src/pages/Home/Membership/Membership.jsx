// import { useState } from "react";
import useMembership from "../../../hooks/useMembership";
import { Link } from "react-router-dom";
// import SingleMember from "./SingleMember";

// import { useEffect } from "react";

const Membership = () => {
  const [member] = useMembership();

  // useEffect(() =>{
  //   fetch('http://localhost:5000/members')
  //   .then(res => res.json())
  //   .then(data =>{
  //     setMembers(data)
  //     console.log(data)
  //   })
  // },[])
  return (
    <div className="mt-12">
      <h3 className="text-4xl text-center font-bold mb-12">
        Membership<span className="text-red-700"> section</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {member.map((mem) => (
          <div
            key={mem._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={mem.image} alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              <Link to={`/checkout/${mem.package_name}`}>
                <h2 className="card-title">Name: {mem.package_name}</h2>
              </Link>
              <p>Price: {mem.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
