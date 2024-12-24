import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateArtifact = () => {
    const { id } = useParams();
    const [artifact, setArtifact] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/artifacts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArtifact(data);
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedArtifact = Object.fromEntries(formData.entries());

        fetch(`http://localhost:5000/artifacts/update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedArtifact)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Artifact updated successfully!'
                });
                navigate('/myArtifacts');
            }
        })
    }
    return (
        <div>
            <Helmet><title>Update Artifact | Artifact Atlas</title></Helmet>
            <h1 className='text-center text-3xl font-bold my-5'>Update Artifact</h1>
            <form onSubmit={handleUpdate} className='w-4/5 mx-auto bg-violet-300 p-5 px-10 rounded-md'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Name</span>
                    </label>
                    <input type="text" defaultValue={artifact.artifactName} name='artifactName' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Image</span>
                    </label>
                    <input type="url" defaultValue={artifact.artifactImage} name='artifactImage' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Type</span>
                    </label>
                    <select defaultValue={artifact.artifactType} name='artifactType' className="select select-bordered w-full max-w-xs">
                        <option disabled>Artifact Type</option>
                        <option>Tools</option>
                        <option>Weapons</option>
                        <option>Sculpture</option>
                        <option>Documents</option>
                        <option>Writings</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Historical Context</span>
                    </label>
                    <textarea type="text" defaultValue={artifact.historicalContext} name='historicalContext' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Created At</span>
                    </label>
                    <input type="text" defaultValue={artifact.createdAt} name='createdAt' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Discovered At</span>
                    </label>
                    <input type="text" defaultValue={artifact.discoveredAt} name='discoveredAt' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Discovered By</span>
                    </label>
                    <input type="text" defaultValue={artifact.discoveredBy} name='discoveredBy' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Present Location</span>
                    </label>
                    <input type="text" defaultValue={artifact.presentLocation} name='presentLocation' className="input input-bordered input-sm" required />
                </div>

                <button className='bg-purple-500 w-full py-1 rounded-md text-white mt-4'>Update Artifact</button>
            </form>
        </div>
    );
};

export default UpdateArtifact;