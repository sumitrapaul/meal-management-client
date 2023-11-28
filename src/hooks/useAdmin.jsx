import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
    console.log("hfhwreg");
   const { user } = useContext(AuthContext)
//    console.log(user);
   const axiosSecure = useAxiosSecure()
   console.log("bbbbb")
   const {data: isAdmin} = useQuery({
    queryKey:[user?.email, 'isAdmin'],
    queryFn:async () =>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        console.log("aaaaaa");
        // console.log(res.data)  
        return res.data?.admin
    }

   })

   return [isAdmin]
};

export default useAdmin;