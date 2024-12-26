import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import GoogleLogin from '../Pages/Shared/GoogleLogin';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUpperCase) {
            return 'Password must have at least one uppercase letter.'
        }
        if (!hasLowerCase) {
            return 'Password must have at least one lowercase letter.'
        }
        if (!hasMinLength) {
            return 'Password must have at least 6 characters.'
        }
        return null;
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const passwordError = validatePassword(password);
        if (passwordError) {
            toast.error(passwordError);
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log(result.user);
                        toast.success('Registration Successful')
                        navigate(from);
                    })
            })
            .catch(error => {
                console.log(error.message);
                toast.error(`${error.message}Registration failed. Please try again.`)
            })
    }

    return (
        <div className="hero bg-base-300 py-5">
            <Helmet><title>Register | Artifact Atlas</title></Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
                <h1 className="text-2xl font-medium ml-8 mt-5">Register to the website!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered input-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered input-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo URL" name='photo' className="input input-bordered input-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered input-sm" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className=" bg-purple-500 hover:bg-purple-700 py-1 rounded-md text-white text-xl mb-4">Register</button>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <p className='mt-3'>Already have an account? Please <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;