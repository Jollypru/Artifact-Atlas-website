import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ArtifactsCard from '../AllArtifacts/ArtifactsCard';

const LikedArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [likedArtifacts, setLikedArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/artifacts/liked/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('artifact data',data);
                    setLikedArtifacts(data);
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