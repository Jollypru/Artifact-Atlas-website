import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-Artifacts'>All Artifacts</NavLink></li>
        <li><NavLink to='/add-Artifacts'>Add Artifacts</NavLink></li>
    </>

    const handleLogout = () => {
        logoutUser()
        .then(()=> {
            console.log('Logged out successfully');
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Artifact Atlas</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <button onClick={handleLogout} className='bg-purple-500 px-5 py-1 rounded-md text-white'>Logout</button>
                    </> : <>
                    <Link to='/login'><button className='bg-purple-500 px-5 py-1 rounded-md text-white'>Login</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;