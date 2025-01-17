import React from 'react';
import img from '../../assets/Partners/stat iamge.jpg'

const Stats = () => {
    // Replace these with actual values from your backend or state
    const totalUsers = 12345;
    const totalClasses = 250;
    const totalEnrollments = 4567;

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Stats Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Website Statistics</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between bg-blue-100 p-4 rounded-lg">
                            <span className="text-lg font-semibold text-blue-700">Total Users</span>
                            <span className="text-xl font-bold text-blue-900">{totalUsers}</span>
                        </div>
                        <div className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                            <span className="text-lg font-semibold text-green-700">Total Classes</span>
                            <span className="text-xl font-bold text-green-900">{totalClasses}</span>
                        </div>
                        <div className="flex items-center justify-between bg-yellow-100 p-4 rounded-lg">
                            <span className="text-lg font-semibold text-yellow-700">Total Enrollments</span>
                            <span className="text-xl font-bold text-yellow-900">{totalEnrollments}</span>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center">
                    <img
                        src={img}
                        alt="Education"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Stats;
