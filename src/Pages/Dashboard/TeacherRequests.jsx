import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';

const TeacherRequests = () => {
    const [teacherRequests, setTeacherRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/teacher-requests')
            .then(res => {
                setTeacherRequests(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching teacher requests:', error);
                setLoading(false);
            });
    }, []);

    const handleApprove = (id, email) => {
        axiosSecure.put(`/teacher-requests/approve/${id}`, { email })
            .then(response => {
                alert(response.data.message);
                setTeacherRequests(prevState => prevState.map(request =>
                    request._id === id ? { ...request, status: 'accepted' } : request
                ));
            })
            .catch(error => {
                console.error('Error approving the request:', error);
                alert('Failed to approve the request');
            });
    };

    const handleReject = (id) => {
        axiosSecure.put(`/teacher-requests/reject/${id}`)
            .then(response => {
                alert(response.data.message);
                setTeacherRequests(prevState => prevState.map(request =>
                    request._id === id ? { ...request, status: 'rejected' } : request
                ));
            })
            .catch(error => {
                console.error('Error rejecting the request:', error);
                alert('Failed to reject the request');
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin border-t-2 border-blue-500 border-4 rounded-full h-16 w-16"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Teacher Requests</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left text-gray-600">Name</th>
                            <th className="px-6 py-3 text-left text-gray-600">Email</th>
                            <th className="px-6 py-3 text-left text-gray-600">Experience</th>
                            <th className="px-6 py-3 text-left text-gray-600">Title</th>
                            <th className="px-6 py-3 text-left text-gray-600">Category</th>
                            <th className="px-6 py-3 text-left text-gray-600">Status</th>
                            <th className="px-6 py-3 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacherRequests.map(request => (
                            <tr key={request._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{request.name}</td>
                                <td className="px-6 py-4">{request.email}</td>
                                <td className="px-6 py-4">{request.experience}</td>
                                <td className="px-6 py-4">{request.title}</td>
                                <td className="px-6 py-4">{request.category}</td>
                                <td className={`px-6 py-4 ${request.status === 'pending' ? 'text-yellow-600' : request.status === 'accepted' ? 'text-green-600' : 'text-red-600'}`}>
                                    {request.status}
                                </td>
                                <td className="px-6 py-4">
                                    {request.status === 'pending' ? (
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
                                                onClick={() => handleApprove(request._id, request.email)}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
                                                onClick={() => handleReject(request._id)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="bg-gray-400 text-white py-2 px-4 rounded-lg"
                                            disabled
                                        >
                                            Already Processed
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherRequests;
