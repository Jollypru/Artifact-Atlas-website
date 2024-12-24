import React, { useEffect, useState } from 'react';
import ArtifactsCard from './ArtifactsCard';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/artifacts')
            .then(res => res.json())
            .then(data => {
                setArtifacts(data);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>All Artifacts | Artifact Atlas</title>
            </Helmet>
            <h2 className='text-center text-3xl font-bold my-5'>All Artifacts</h2>
            {
                loading ? (
                    <p className='text-center'><span className="loading loading-spinner loading-lg"></span></p>
                ) : (
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        artifacts.map(artifact => <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>)
                    }
                </div>)

            }

        </div>
    );
};

export default AllArtifacts;