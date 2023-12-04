import { Link } from "react-router-dom";
import useMember from "../../../hooks/useMember";





const Membership = () => {
  const [member] = useMember()

  return (
    
    <div className="mt-12">
      <h3 className="text-4xl text-center font-bold mb-12">
        Membership<span className="text-red-700"> section</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {member.map((mem) => (
          <Link  key={mem.id} to={`/checkout/${mem.package_name}`}>
          <div
           
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img className="h-96" src={mem.image} alt="Shoes" />
            </figure>
            <div className="card-body items-center">
              
              <h2 className="card-title">Name: {mem.package_name}</h2>
            
              <p>Price: {mem.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default Membership;
