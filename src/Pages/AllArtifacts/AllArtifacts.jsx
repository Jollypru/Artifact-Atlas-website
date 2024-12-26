import React, { useEffect, useState } from 'react';
import ArtifactsCard from './ArtifactsCard';
import { Helmet } from 'react-helmet';
import { TailSpin } from 'react-loader-spinner';

const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredArtifacts, setFilteredArtifacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('https://assignment-11-server-omega-ashy.vercel.app/artifacts')
            .then(res => res.json())
            .then(data => {
                setArtifacts(data);
                setFilteredArtifacts(data);
                setLoading(false);
            })
    }, [])

    useEffect(()=>{
        if(searchQuery.trim() === ''){
            setFilteredArtifacts(artifacts);
        }
        else{
            const filtered = artifacts.filter(artifact => 
                artifact.artifactName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredArtifacts(filtered);
        }
    },[searchQuery, artifacts]);

    return (
        <div>
            <Helmet>
                <title>All Artifacts | Artifact Atlas</title>
            </Helmet>
            <h2 className='text-center text-3xl font-bold my-5'>All Artifacts</h2>

            <div className='text-center my-4'>
                <input
                    type="text"
                    placeholder="Search artifacts..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full max-w-md"
                />
            </div>

            {
                loading ? (
                   <div className='flex justify-center items-center'>
                    <TailSpin height='50' width='50' color='#4fa94d' ariaLabel='loading'></TailSpin>
                   </div>
                ) : (
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                            filteredArtifacts.length > 0 ? (
                                filteredArtifacts.map(artifact => (
                                    <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>
                                ))
                            ) : (
                                <p className="text-center col-span-3">No artifacts found.</p>
                            )
                        }
                </div>)

            }

        </div>
    );
};

export default AllArtifacts;