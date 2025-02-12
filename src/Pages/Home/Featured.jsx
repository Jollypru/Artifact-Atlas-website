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
        <section className='text-center py-12 bg-gray-50 max-w-screen-xl' id='featured'>
            <div className="max-w-2xl mx-auto my-8 space-y-2 text-center">
                <h2 className="text-4xl font-bold">Featured Artifacts</h2>
                <p className="px-5">
                    Unveiling the essence of history, our featured artifact is a remarkable piece that tells a story of ancient civilizations, cultural heritage, and timeless artistry.
                </p>
            </div>
            <div className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    topArtifacts.map(artifact => (
                        <div key={artifact._id} className='bg-white p-4 rounded-md shadow-lg'>
                            <div className='h-[230px]'><img className='h-full w-full rounded-md' src={artifact.artifactImage} alt="" /></div>
                            <div className='h-24'>
                                <h3 className='text-xl font-semibold my-2'>{artifact.artifactName}</h3>
                                <p className='text-sm'>{artifact.historicalContext}</p>

                            </div>
                            <div className='flex justify-between'>
                                <p className='font-medium mt-3 flex items-center gap-2 text-amber-700'><FaRegThumbsUp></FaRegThumbsUp> <span className="font-medium">{artifact.likeCount || 0}</span></p>
                                <NavLink to={`/artifactDetails/${artifact._id}`}><button className='border border-amber-700 text-sm text-amber-700 hover:bg-amber-50 font-medium py-1 px-4 rounded-md mt-4'>View Details</button></NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
            <NavLink to='/all-Artifacts'><button className='bg-amber-600 py-1 px-5 mt-10 text-white rounded-md'>See All Artifacts</button></NavLink>
        </section>
    );
};

export default Featured;