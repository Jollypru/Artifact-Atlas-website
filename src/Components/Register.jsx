import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import GoogleLogin from '../Pages/Shared/GoogleLogin';
import { toast} from 'react-toastify';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if(!hasUpperCase){
            return 'Password must have at least one uppercase letter.'
        }
        if(!hasLowerCase){
            return 'Password must have at least one lowercase letter.'
        }
        if(!hasMinLength){
            return 'Password must have at least 6 characters.'
        }
        return null;
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordError = validatePassword(password);
        if(passwordError){
            toast.error(passwordError);
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('Registration Successful')
            navigate(from);
        })
        .catch(error => {
            console.log(error.message);
            toast.error('Registration failed. Please try again.')
        })
    }

    return (
        <div className="hero bg-base-300 py-5">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-white pt-5">
                <h1 className="text-3xl font-bold text-center">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo URL" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-purple-500 text-white text-xl mb-4">Register</button>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <p className='mt-3'>Already have an account? Please <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;