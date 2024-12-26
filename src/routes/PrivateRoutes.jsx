import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center'> <TailSpin height='50' width='50' color='#4fa94d' ariaLabel='loading'></TailSpin></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>

};

export default PrivateRoutes;