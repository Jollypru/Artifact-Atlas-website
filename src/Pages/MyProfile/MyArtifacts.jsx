import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [myArtifacts, setMyArtifacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/myAddedArtifacts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyArtifacts(data);
            })
    }, [user.email])

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/artifacts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setMyArtifacts(remaining => remaining.filter(artifact => artifact._id !== _id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "The artifact has been deleted.",
                                icon: "success"
                            });
                        }
                        navigate('/all-Artifacts');
                    })
            }
        });



    }



    return (
        <div className="overflow-x-auto">
            <Helmet><title>My Artifacts | Artifact Atlas</title></Helmet>
            <h3 className='text-center text-3xl font-bold my-5'>My Added Artifacts</h3>
            {
                myArtifacts.length === 0 ? (
                    <p>You haven't added any artifact yet. Try adding some artifacts.</p>
                ) : (
                    <div>
                        <table className="table w-11/12 lg:w-4/5 mx-auto border">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Artifact Name</th>
                                    <th>Added At</th>
                                    <th>Functionalities</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myArtifacts.map((artifact, index) => <tr key={artifact._id}>
                                        <th>{index + 1}</th>
                                        <td>{artifact.artifactName}</td>
                                        <td></td>
                                        <td>
                                            <NavLink to={`/artifactDetails/${artifact._id}`}><button className='bg-green-500 py-1 px-4 rounded-md text-white mr-5'>View</button></NavLink>
                                            <NavLink to={`/updateArtifact/${artifact._id}`}><button className='bg-blue-500 py-1 px-4 rounded-md text-white mr-5'>Update</button></NavLink>
                                            <button onClick={() => handleDelete(artifact._id)} className='bg-red-600 py-1 px-4 rounded-md text-white'>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default MyArtifacts;