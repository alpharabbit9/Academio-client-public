import React from 'react';
import StudentDashboard from '../../Layout/StudentDashboard';
import TeacherDashboard from '../../Layout/TeacherDashboard';
import AdminDashboard from '../../Layout/AdminDashboard';
import useAdmin from '../../Hooks/useadmin';

const Dashboard = () => {
    const [isAdmin, isLoading, isError] = useAdmin();
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data.</p>;
  
    return (
      <div>
        {isAdmin ? <AdminDashboard /> : <StudentDashboard />}
      </div>
    );
  };


export default Dashboard;