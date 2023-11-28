import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    // axios.interceptors.request.use(function (config){
    //     const token=localStorage.getItem('access-token')
    //     console.log('local',token)
    //     config.headers.authorization = `Bearer ${token}`
    //     return config
    // }, function (error){
    //     return Promise.reject(error)
    // })
    // axios.interceptors.response.use(function (response) {
    //     // Do something with response data
    //     return response;
    //   }, function (error) {
        
    //     // Do something with response error
    //     return Promise.reject(error);
    //   });
    return axiosSecure
};

export default useAxiosSecure;