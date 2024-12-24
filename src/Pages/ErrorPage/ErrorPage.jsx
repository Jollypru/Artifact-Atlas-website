import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state;

    const handleGoBack = () => {
        navigate(from);
    }

    return (
        <div className=' flex flex-col items-center justify-center mt-20'>
            <h1 className='text-3xl'>404!</h1>
            <p className='text-xl my-3'>The page you are looking for is not found.</p>
            <p>Go back from where you came -- <button onClick={handleGoBack} className='underline text-blue-500 text-lg'>Go back</button></p>
            <div className="divider w-1/2 mx-auto">OR</div>
            <NavLink to='/'><button className='btn btn-neutral text-white text-lg'>Go to home</button></NavLink>
        </div>
    );
};

export default ErrorPage;