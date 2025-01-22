import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div className='flex'>
            <div className='h-screen bg-gray-800 text-white w-64 py-12 px-4'>
                <ul>
                    <li>
                        <NavLink
                            to={'/dashboard/myEnrollClass'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                            My Enroll Class
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/myProfile'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                            My Profile
                        </NavLink>
                    </li>


                    <div className="divider"></div>

                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='p-7 flex-1'>
                <h2 className="text-5xl font-bold text-center">Student Dashboard</h2>
                <div className="divider"></div>
                <Outlet />
            </div>
        </div>
    );
};

export default StudentDashboard;
