import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ArtifactDetails = () => {
    const artifacts = useLoaderData();
    const { _id, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation,
        likeCount: initialLikeCount } = artifacts;
    
    const {user} = useContext(AuthContext);
    const [likeCount, setLikeCount] = useState(initialLikeCount || 0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) return;

        const updateLikeCount = likeCount + 1;
        setLikeCount(updateLikeCount);
        setIsLiked(true);

        fetch(`http://localhost:5000/artifacts/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ likeCount: updateLikeCount , userEmail: user.email})
        })
            .then(res => res.json())
            .then(data => {
                console.log('like count updated:', data);
            })
    }
    return (
        <div className='flex flex-col md:flex-row gap-5 w-11/12 lg:w-2/3 mx-auto bg-purple-200 p-5 lg:p-8 my-6 rounded-md'>
            <div className='md:w-1/2'>
                <img className='h-60 w-full rounded-md' src={artifactImage} alt="" />
            </div>
            <div>
                <h3 className='text-3xl font-semibold'> {artifactName}</h3>
                <p className='md:text-xl font-medium mb-4'>Artifact Type: {artifactType}</p>
                <p className='mb-4'>{historicalContext}</p>
                <p><span className='font-medium'>It was created at:</span> {createdAt}</p>
                <p><span className='font-medium'>Discovered at:</span> {discoveredAt}</p>
                <p><span className='font-medium'>Discovered By:</span> {discoveredBy}</p>
                <p><span className='font-medium'>Currently located at:</span> {presentLocation}</p>
                <div className='mt-4 flex gap-4'>
                    <button onClick={handleLike} className={`py-1 px-10 rounded-md text-white ${isLiked ? 'bg-gray-400' : 'bg-purple-500'}`} disabled={isLiked}>Like</button>
                    <p className="mt-2 text-lg font-medium">Likes: {likeCount}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;