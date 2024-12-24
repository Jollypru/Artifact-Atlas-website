import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink } from 'react-router-dom';

const MyArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [myArtifacts, setMyArtifacts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myAddedArtifacts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyArtifacts(data);
            })
    }, [user.email])

    // const handleDelete = (_id) => {
    //     fetch(`http://localhost:5000/artifacts/${_id}`,{
    //         method: 'DELETE'
    //     })

    // }

    return (
        <div className="overflow-x-auto">
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
                                            <button className='bg-red-600 py-1 px-4 rounded-md text-white'>Delete</button>
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