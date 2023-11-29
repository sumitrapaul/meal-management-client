

import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
   const { user } = useContext(AuthContext)
   const axiosSecure = useAxiosPublic()
   const {data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey:[user?.email, 'isAdmin'],
    queryFn:async () =>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        return res.data?.admin
    }

   })

   return [isAdmin, isAdminLoading]
};

export default useAdmin;