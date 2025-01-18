import React from 'react';
import StudentDashboard from '../../Layout/StudentDashboard';
import TeacherDashboard from '../../Layout/TeacherDashboard';
import AdminDashboard from '../../Layout/AdminDashboard';

const Dashboard = () => {
    const isAdmin = true ;
    return (
        <div>
           {
            isAdmin ? <AdminDashboard></AdminDashboard> : <StudentDashboard></StudentDashboard>
           } 
        </div>
    );
};

export default Dashboard;