import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ArtifactDetails = () => {
    const artifacts = useLoaderData();
    const {artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation} = artifacts;
    return (
        <div className='flex flex-col md:flex-row gap-5 w-11/12 lg:w-2/3 mx-auto bg-purple-200 p-5 lg:p-8 my-6 rounded-md'>
            <div className='md:w-1/2'>
                <img  className='h-60 w-full rounded-md' src={artifactImage} alt="" />
            </div>
            <div>
                <h3 className='text-3xl font-semibold'> {artifactName}</h3>
                <p className='md:text-xl font-medium mb-4'>Artifact Type: {artifactType}</p>
                <p className='mb-4'>{historicalContext}</p>
                <p><span className='font-medium'>It was created at:</span> {createdAt}</p>
                <p><span className='font-medium'>Discovered at:</span> {discoveredAt}</p>
                <p><span className='font-medium'>Discovered By:</span> {discoveredBy}</p>
                <p><span className='font-medium'>Currently located at:</span> {presentLocation}</p>
                <div className='mt-4'>
                    <button className='bg-purple-500 py-1 px-10 rounded-md text-white'>Like</button>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;