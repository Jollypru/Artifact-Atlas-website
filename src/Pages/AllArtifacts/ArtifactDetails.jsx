import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaRegThumbsUp ,FaRegHeart } from "react-icons/fa6";

const ArtifactDetails = () => {
    const artifacts = useLoaderData();
    const { _id, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation,
        likeCount: initialLikeCount } = artifacts;
    
    const {user, loading} = useContext(AuthContext);
    const [likeCount, setLikeCount] = useState(initialLikeCount || 0);
    const [isLiked, setIsLiked] = useState(false);
    const axiosSecure = useAxiosSecure();


    const handleToggleLike = () => {
        
        const  action = isLiked ? 'dislike' : 'like';
        const updateLikeCount = isLiked ? likeCount -1 : likeCount + 1;

        axiosSecure.patch(`/artifacts/${_id}`, {
            likeCount: updateLikeCount ,
            userEmail: user.email,
            action
        })
        .then(()=> {
            toast.success(`You have ${isLiked ? 'disliked' : 'liked'} ${artifactName} `);
            setLikeCount(updateLikeCount);
            setIsLiked(!isLiked);
        })
        .catch((error) => {
            console.log('error updating like count:', error);
            toast.error('You have already liked this item.');
           
        })
           
    }

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div className='min-h-full flex flex-col md:flex-row gap-5 w-11/12 lg:w-2/3 mx-auto border shadow-xl p-5  my-6 rounded-md'>
            <Helmet><title>Artifact Details | Artifact Atlas</title></Helmet>
            <div className='md:w-1/2'>
                <img className='h-60 w-full rounded-md' src={artifactImage} alt="" />
            </div>
            <div>
                <h3 className='text-3xl font-semibold mb-3'> {artifactName}</h3>
                <p className='md:text-xl font-medium mb-4'>Artifact Type: {artifactType}</p>
                <p className='mb-4'>{historicalContext}</p>
                <p><span className='font-medium'>It was created at:</span> {createdAt}</p>
                <p><span className='font-medium'>Discovered at:</span> {discoveredAt}</p>
                <p><span className='font-medium'>Discovered By:</span> {discoveredBy}</p>
                <p><span className='font-medium'>Currently located at:</span> {presentLocation}</p>
                <div className='mt-4 flex gap-6'>
                    <button onClick={handleToggleLike} className={`py-1 px-10 rounded-md text-white ${isLiked ? 'bg-gray-400' : 'bg-amber-600'}`}>{isLiked ? 'Dislike' : <span className='flex items-center gap-1'><FaRegHeart/>Like</span>}</button>
                    <p className="text-xl font-medium flex items-center gap-2 text-amber-700"><FaRegThumbsUp></FaRegThumbsUp> {likeCount}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;