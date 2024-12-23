import React, { useEffect, useState } from 'react';
import ArtifactsCard from './ArtifactsCard';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/artifacts')
            .then(res => res.json())
            .then(data => {
                setArtifacts(data);
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-5'>All Artifacts</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    artifacts.map(artifact => <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;