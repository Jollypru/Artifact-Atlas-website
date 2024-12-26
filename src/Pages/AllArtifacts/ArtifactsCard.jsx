import React from 'react';
import { NavLink } from 'react-router-dom';

const ArtifactsCard = ({artifact}) => {

    const {artifactName, artifactImage, historicalContext, createdAt} = artifact;
    return (
        <div className='bg-purple-300 p-5 rounded-md shadow-lg '>
            <div className='h-[300px]'>
                <img className='h-full w-full rounded-md' src={artifactImage} alt="" />
            </div>
            <div className='h-[200px]'>
                <h3 className='text-2xl font-semibold my-4'>{artifactName}</h3>
                <p>{historicalContext}</p>
                <p className='mt-2 mb-4'><span className='font-medium'>Created At:</span> {createdAt}</p>
            </div>
            <NavLink to={`/artifactDetails/${artifact._id}`}><button className='bg-purple-500 py-1 px-4 rounded-md text-white'>View Details</button></NavLink>
        </div>
    );
};

export default ArtifactsCard;