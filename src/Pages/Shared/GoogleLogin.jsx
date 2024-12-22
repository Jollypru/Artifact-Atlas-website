import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const GoogleLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn bg-white text-red-500 text-xl w-full'><img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/6F88fQg/images-1.png" alt="" />Google</button>
        </div>
    );
};

export default GoogleLogin;