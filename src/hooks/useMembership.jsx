import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMembership = () => {
    const axiosPublic = useAxiosPublic()
    const {data: member = [], isPending: loading, refetch} = useQuery({
        queryKey: ['member'],
        queryFn: async() =>{
             const res = await axiosPublic.get('/members')
             return res.data
        }
    })
    return [member, loading, refetch]
};

export default useMembership;