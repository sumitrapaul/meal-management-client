
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
const { data: users = [], refetch } = useQuery({
    queryKey:['users', user?.email],
    queryFn: async () =>{
        const res=await axiosSecure.get(`/users/${user?.email}`)
        return res.data
    }
})
return [users, refetch]
};

export default useUsers;