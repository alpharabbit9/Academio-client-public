import React from 'react';
import StudentDashboard from '../../Layout/StudentDashboard';
import TeacherDashboard from '../../Layout/TeacherDashboard';
import AdminDashboard from '../../Layout/AdminDashboard';
import useAdmin from '../../Hooks/useAdmin';
import useTeacher from '../../Hooks/useTeacher';

const Dashboard = () => {
  const [isAdmin, isLoadingAdmin, isErrorAdmin] = useAdmin();
  const [isTeacher, isLoadingTeacher, isErrorTeacher] = useTeacher();

  if (isLoadingAdmin || isLoadingTeacher) return <p>Loading...</p>;
  if (isErrorAdmin || isErrorTeacher) return <p>Error loading data.</p>;

  return (
    <div>
      {isAdmin ? (
        <AdminDashboard />
      ) : isTeacher ? (
        <TeacherDashboard />
      ) : (
        <StudentDashboard />
      )}
    </div>
  );
};

export default Dashboard;
