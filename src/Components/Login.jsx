import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import GoogleLogin from '../Pages/Shared/GoogleLogin';
import { toast } from 'react-toastify';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            console.log('sign in successful',result.user);
             toast.success('Successfully logged in.');
            navigate(from);
        })
        .catch(error => {
            console.log(error.message);
            toast.error(`Login failed. Please try again., ${error.message}`)
        })
    }
    return (
        <div className="hero bg-base-300 min-h-screen py-5">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-3xl font-bold text-center">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-purple-500 text-white text-xl mb-4">Login</button>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <p className='mt-3'>Don't have an account? Please <Link to='/register' className='text-blue-500 underline'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;