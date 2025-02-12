import React from 'react';
import { NavLink } from 'react-router-dom';

const ArtifactsCard = ({artifact}) => {

    const {artifactName, artifactImage, historicalContext, createdAt} = artifact;
    return (
        <div className='bg-white p-4 rounded-md shadow-md'>
            <div className='h-[260px]'>
                <img className='h-full w-full rounded-md' src={artifactImage} alt="" />
            </div>
            <div className='h-40'>
                <h3 className='text-xl font-semibold my-3'>{artifactName}</h3>
                <p className='text-sm'>{historicalContext}</p>
                <p className='mt-2 mb-3 text-sm'><span className='font-medium'>Created At:</span> {createdAt}</p>
            </div>
            <NavLink to={`/artifactDetails/${artifact._id}`}><button className='bg-[#d88750] py-1 px-4 rounded-md text-white'>View Details</button></NavLink>
        </div>
    );
};

export default ArtifactsCard;