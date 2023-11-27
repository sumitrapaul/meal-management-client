import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const { googleLogIn } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handleGoogle = () =>{
        googleLogIn()
        .then(res =>{
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName 
              }
              axiosPublic.post('/users', userInfo)
              .then(res =>{
                console.log(res.data)
                navigate('/')
              })
        })
    }
    return (
        <div className="p-6">
            <div className="divider"></div>
            <div className="flex justify-center">
                <button className="btn btn-block bg-red-200" onClick={handleGoogle}>
                <FcGoogle className="mr-2 text-2xl"></FcGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;