import { useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';
import React from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Users = () => {

    const axiosSecure = useAxiosSecure();

   

    const { data: users = [] ,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get('/users')
            return res.data;

        }
    })

    const HandleMakeAdmin = user => {

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='text-center'>

            <h2 className="text-3xl font-semibold">Manage All Users : {users.length}</h2>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        #
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                users.map((user, index) => <tr>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button onClick={() => HandleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-blue-950 text-white p-6"><FaUser></FaUser></button>}
                                    </td>

                                    <th>

                                    </th>
                                </tr>)
                            }
                            {/* row 1 */}


                        </tbody>

                    </table>
                </div>



            </div>

        </div>
    );
};

export default Users;



