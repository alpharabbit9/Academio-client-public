import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';

const AllAdminClasses = () => {
    const axiosSecure = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['adminClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/courses');
            return res.data;
        },
    });

    const handleApprove = async (id) => {
        try {
            await axiosSecure.patch(`/courses/approve/${id}`);
            toast.success('Class approved successfully!');
            refetch();
        } catch (error) {
            toast.error('Failed to approve the class.');
        }
    };

    const handleReject = async (id) => {
        try {
            await axiosSecure.patch(`/courses/reject/${id}`);
            toast.warning('Class rejected.');
            refetch();
        } catch (error) {
            toast.error('Failed to reject the class.');
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">All Admin Classes</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((cls) => (
                        <tr key={cls._id}>
                            <td>{cls.title}</td>
                            <td><img src={cls.image} alt={cls.title} className="w-16 h-16 object-cover" /></td>
                            <td>{cls.email}</td>
                            <td>{cls.description}</td>
                            <td>{cls.status}</td>
                            <td>
                                <button
                                    onClick={() => handleApprove(cls._id)}
                                    className="btn btn-success mr-2"
                                    disabled={cls.status === 'approved'}
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleReject(cls._id)}
                                    className="btn btn-error"
                                    disabled={cls.status === 'rejected'}
                                >
                                    Reject
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    disabled={cls.status !== 'approved'}
                                    onClick={() => alert(`Progress for: ${cls.title}`)}
                                >
                                    Progress
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllAdminClasses;
