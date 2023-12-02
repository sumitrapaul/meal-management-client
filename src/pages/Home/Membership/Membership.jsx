import { useEffect } from "react";
import { useState } from "react";
import SingleMember from "./SingleMember";

const Membership = () => {
  
  const [membership, setMembership] = useState([])

  useEffect(() =>{
    fetch('/membership.json')
    .then(res => res.json())
    .then(data => {
      setMembership(data)
    })
  },[])
  return (
    <div className="mt-12">
      <h3 className="text-4xl text-center font-bold mb-12">
        Membership<span className="text-red-700"> section</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
           membership.map(member => <SingleMember key={member._id} member={member}></SingleMember>)
       }
      </div>
    </div>
  );
};

export default Membership;
