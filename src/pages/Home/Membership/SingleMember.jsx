/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleMember = ({ member }) => {
  const { image, price, package_name } = member;
  console.log(package_name)

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={member.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center">
          <Link to={`/checkout/${package_name}`}><h2 className="card-title">Name: {member.package_name}</h2></Link>
          <p>Price: {member.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
