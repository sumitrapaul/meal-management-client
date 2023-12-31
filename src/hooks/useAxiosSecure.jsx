import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL:'https://hostel-management-server-bay.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()

    axiosSecure.interceptors.request.use(function (config){
        const token=localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error){
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
      }, async(error) =>{
         const status = error.response.status
         if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
         }
        // Do something with response error
        return Promise.reject(error);
      });
    return axiosSecure
};

export default useAxiosSecure;