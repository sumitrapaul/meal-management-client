
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSingleRequest = () => {
    const { user } = useAuth()
    console.log(user)
    const axiosSecure = useAxiosSecure()
    const {data: mealRequest = [], isPending: loading, refetch} = useQuery({
        queryKey: ['mealRequest', user?.email],
        queryFn: async() =>{
             const res = await axiosSecure.get(`/requests/${user?.email}`)
             return res.data
        }
    })
    return [mealRequest, loading, refetch]
};


export default useSingleRequest;