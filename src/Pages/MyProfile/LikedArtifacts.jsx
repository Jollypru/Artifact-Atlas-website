import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ArtifactsCard from '../AllArtifacts/ArtifactsCard';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const LikedArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [likedArtifacts, setLikedArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user) {
            axiosSecure.get(`artifacts/liked/${user.email}`)
            .then(res => {
                console.log('artifact data',res.data);
                setLikedArtifacts(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false);
            })
        }
    }, [user])

    return (
        <div className="container mx-auto my-6 p-5">
            <Helmet><title>Liked Artifacts | Artifact Atlas</title></Helmet>
            <h1 className="text-3xl font-semibold text-center mb-5">Liked Artifacts</h1>
            {likedArtifacts.length === 0 ? (
                <p className='text-center text-xl'>No liked artifacts found. Start liking some artifacts!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-11/12 mx-auto">
                    {likedArtifacts.map((artifact) => (
                        <ArtifactsCard key={artifact._id} artifact={artifact} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedArtifacts;