import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegThumbsUp } from "react-icons/fa6";
import { TailSpin } from 'react-loader-spinner';

const Featured = () => {
    const [topArtifacts, setTopArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-11-server-omega-ashy.vercel.app/top-artifacts')
            .then(res => res.json())
            .then(data => {
                setTopArtifacts(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        <div className='flex justify-center items-center'>
            <TailSpin height='50' width='50' color='#4fa94d' ariaLabel='loading'></TailSpin>
        </div>
    }

    return (
        <div className='text-center mt-14' id='featured'>
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center">
                <h2 className="text-4xl font-bold">Featured Artifacts</h2>
                <p className="px-5">
                    Unveiling the essence of history, our featured artifact is a remarkable piece that tells a story of ancient civilizations, cultural heritage, and timeless artistry.
                </p>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    topArtifacts.map(artifact => (
                        <div key={artifact._id} className='bg-purple-300 p-5 rounded-md shadow-lg'>
                            <div className='h-[300px]'><img className='h-full w-full rounded-md' src={artifact.artifactImage} alt="" /></div>
                            <div className='h-32'>
                                <h3 className='text-2xl font-semibold my-4'>{artifact.artifactName}</h3>
                                <p>{artifact.historicalContext}</p>

                            </div>
                            <div className='flex justify-between'>
                                <p className='font-medium mt-3 flex items-center gap-2'><FaRegThumbsUp></FaRegThumbsUp> <span className="font-medium">{artifact.likeCount || 0}</span></p>
                                <NavLink to={`/artifactDetails/${artifact._id}`}><button className='bg-purple-500 py-1 px-4 rounded-md text-white mt-4'>View Details</button></NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
            <NavLink to='/all-Artifacts'><button className='bg-violet-600 py-1 px-8 mt-6 text-white rounded-md'>See All Artifacts</button></NavLink>
        </div>
    );
};

export default Featured;