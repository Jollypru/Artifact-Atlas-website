import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Featured = () => {
    const [artifacts, setArtifacts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/artifacts')
        .then(res => res.json())
        .then(data => {
            setArtifacts(data);
        })
    },[])
    return (
        <div>
            <h3 className='text-3xl text-center font-bold my-5'>Featured Artifacts</h3>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                artifacts.map(artifact => (
                    <div className='bg-purple-300 p-5 rounded-md shadow-lg'>
                        <div className='h-[300px]'><img className='h-full w-full rounded-md' src={artifact.artifactImage} alt="" /></div>
                        <div>
                            <h3 className='text-2xl font-semibold my-4'>{artifact.artifactName}</h3>
                            <p>{artifact.historicalContext}</p>
                            <p className='font-medium mt-3'>Like:</p>
                        </div>
                        <NavLink to={`/artifactDetails/${artifact._id}`}><button className='bg-purple-500 py-1 px-4 rounded-md text-white mt-4'>View Details</button></NavLink>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default Featured;