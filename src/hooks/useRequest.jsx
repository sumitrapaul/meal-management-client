import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";


const useRequest = () => {
    const { _id } = useParams()
    console.log(_id)
    const axiosSecure = useAxiosSecure()
    const {data: mealRequest = [], isPending: loading, refetch} = useQuery({
        queryKey: ['mealRequest'],
        queryFn: async() =>{
             const res = await axiosSecure.get('/requests')
             return res.data
        }
    })
    return [mealRequest, loading, refetch]
};

export default useRequest;