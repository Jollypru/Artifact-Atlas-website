import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Featured = () => {
    const [topArtifacts, setTopArtifacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/top-artifacts')
            .then(res => res.json())
            .then(data => {
                setTopArtifacts(data);
            })
    }, [])
    return (
        <div className='text-center' id='featured'>
            <h3 className='text-3xl text-center font-bold my-5'>Featured Artifacts</h3>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    topArtifacts.map(artifact => (
                        <div key={artifact._id} className='bg-purple-300 p-5 rounded-md shadow-lg'>
                            <div className='h-[300px]'><img className='h-full w-full rounded-md' src={artifact.artifactImage} alt="" /></div>
                            <div className='h-32'>
                                <h3 className='text-2xl font-semibold my-4'>{artifact.artifactName}</h3>
                                <p>{artifact.historicalContext}</p>
                                
                            </div>
                            <p className='font-medium mt-3'>Likes: <span className="font-bold">{artifact.likeCount || 0}</span></p>
                            <NavLink to={`/artifactDetails/${artifact._id}`}><button className='bg-purple-500 py-1 px-4 rounded-md text-white mt-4'>View Details</button></NavLink>
                        </div>
                    ))
                }
            </div>
            <NavLink to='/all-Artifacts'><button className='bg-violet-600 py-1 px-8 mt-6 text-white rounded-md'>See All Artifacts</button></NavLink>
        </div>
    );
};

export default Featured;