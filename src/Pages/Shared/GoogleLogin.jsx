import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful')
                navigate(from);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='bg-white border border-black rounded-md text-red-500 text-xl w-full flex items-center justify-center hover:py-1 hover:bg-gray-200 hover:border-0'><img className='w-9 h-9 rounded-full' src="https://i.ibb.co.com/6F88fQg/images-1.png" alt="" />Google</button>
        </div>
    );
};

export default GoogleLogin;