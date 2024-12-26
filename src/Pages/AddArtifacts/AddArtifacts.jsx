import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddArtifacts = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleAddArtifact = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);

        axiosSecure.post('https://assignment-11-server-omega-ashy.vercel.app/artifacts', initialData)

        .then((res) => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Artifact Added Successfully!",
                    icon: "success"
                  });
                  form.reset();
            }
        })
        .catch(error => {
            console.log('error adding artifact', error);
        })
    }

    return (
        <div>
            <Helmet><title>Add Artifact | Artifact Atlas</title></Helmet>
            <h1 className='text-center text-3xl font-bold my-5'>Add an Artifact</h1>
            <form onSubmit={handleAddArtifact} className='w-4/5 mx-auto bg-violet-300 p-5 px-10 rounded-md'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Name</span>
                    </label>
                    <input type="text" placeholder="Enter Artifact Name" name='artifactName' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Image</span>
                    </label>
                    <input type="url" placeholder="Enter Artifact Image" name='artifactImage' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Type</span>
                    </label>
                    <select defaultValue='Artifact Type' name='artifactType' className="select select-bordered w-full max-w-xs">
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
                    <textarea type="text" placeholder="Enter Historical Context" name='historicalContext' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Created At</span>
                    </label>
                    <input type="text" placeholder="Created At" name='createdAt' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Discovered At</span>
                    </label>
                    <input type="text" placeholder="Discovered At" name='discoveredAt' className="input input-bordered input-sm" required />
                </div>               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Discovered By</span>
                    </label>
                    <input type="text" placeholder="Discovered By" name='discoveredBy' className="input input-bordered input-sm" required />
                </div>              
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Present Location</span>
                    </label>
                    <input type="text" placeholder="Present Location" name='presentLocation' className="input input-bordered input-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Adder Name</span>
                    </label>
                    <input type="text" value={user.displayName} name='adderName' className="input input-bordered input-sm" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Artifact Adder Email</span>
                    </label>
                    <input type="email" value={user.email} name='adderEmail' className="input input-bordered input-sm" readOnly />
                </div>
                <button className='bg-purple-500 w-full py-1 rounded-md text-white mt-4'>Add Artifact</button>              
            </form>
        </div>
    );
};

export default AddArtifacts;