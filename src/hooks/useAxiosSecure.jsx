import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-omega-ashy.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const {logoutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, error => {
            console.log('error caught in interceptor', error);

            if(error.response &&(error.response.status === 401 || error.response.status === 403)){
                console.log('logout the user due to unauthorized access');
                logoutUser()
                .then(()=> {
                    console.log('logout user');
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }

            return Promise.reject(error);
        });
        
    },[logoutUser, navigate])
    return axiosInstance;
};

export default useAxiosSecure;