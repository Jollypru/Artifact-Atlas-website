import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-Artifacts'>All Artifacts</NavLink></li>
        <li><NavLink to='/add-Artifacts'>Add Artifacts</NavLink></li>
        <li><a href="#contact">Contact Us</a></li>
        {
            user ?
                <li className='relative group'>
                    <NavLink to='/myProfile'>My Profile</NavLink>
                    <ul className='absolute hidden group-hover:block w-48 rounded-md mt-8 lg:mt-0 lg:pl-2 bg-violet-50 '>
                        <li className='hover:text-amber-600'><NavLink to='/myArtifacts'>My Artifacts</NavLink></li>
                        <li className='hover:text-amber-600'><NavLink to='/likedArtifacts'>Liked Artifacts</NavLink></li>
                    </ul>
                </li>
                : ''
        }
    </>

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log('Logged out successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-slate-100 sticky top-0 z-50 md:px-5 lg:px-10">
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
                        className="menu menu-sm dropdown-content bg-violet-200 rounded-box mt-4 w-52 p-2 shadow text-sm">
                        {links}
                    </ul>
                </div>
                <button onClick={() => navigate('/')}><span className='text-2xl text-amber-600 font-semibold'>A</span>RTIFACT <span className='text-2xl text-amber-600 font-semibold'>A</span>TLAS</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1 text-sm">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex gap-3'>
                        <img src={user.photoURL} title={user.displayName} alt="" className='w-10 h-10 rounded-full' />
                        <button onClick={handleLogout} className='bg-amber-600 px-5 rounded-md text-white'>Logout</button>
                    </div> : <div>
                        <Link to='/login'><button className='bg-amber-600 px-5 py-1 rounded-md text-white'>Login</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;