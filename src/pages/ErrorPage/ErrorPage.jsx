import { Link } from 'react-router-dom';
import errorImg from '../../../public/404.gif'

const ErrorPage = () => {
    return (
        <div>
           <div className="flex justify-center items-center mt-24">
            <img src={errorImg} alt="" />
           </div> 
           <div className="flex justify-center items-center mt-8">
            <Link to ='/'>
               <button className='btn bg-red-200'>Go Home</button>
            </Link>
           </div> 
        </div>
    );
};

export default ErrorPage;