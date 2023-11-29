import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


const useUpcoming = () => {
    const axiosPublic = useAxiosPublic()
    const {data: upComingMeal = [], isPending: loading, refetch} = useQuery({
        queryKey: ['upComingMeal'],
        queryFn: async() =>{
             const res = await axiosPublic.get('/addToUpcoming')
             return res.data
        }
    })
    return [upComingMeal, loading, refetch]
}

export default useUpcoming;