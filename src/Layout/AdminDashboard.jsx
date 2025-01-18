import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='flex'>
            <div className='h-screen bg-gray-800 text-white w-64 py-12 px-4'>
                <ul>
                    <li>
                        <NavLink
                            to={'/dashboard/teacherRequests'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                            Teacher Requests
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/users'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/allClasses'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                            All Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/adminProfile'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-blue-600 text-white px-4 py-2 block rounded'
                                    : 'text-white px-4 py-2 block'
                            }
                        >
                           Profile
                        </NavLink>
                    </li>

                    <div className="divider border-white"></div>

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
                <h2 className="text-5xl font-bold text-center ">Admin Dashboard</h2>
                <div className="divider w-full"></div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
