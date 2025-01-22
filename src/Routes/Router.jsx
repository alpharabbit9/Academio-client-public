import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../Pages/Home/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import MyEnrollClass from '../Pages/Dashboard/MyEnrollClass';
import MyProfile from '../Pages/Dashboard/MyProfile';
import AddClass from '../Pages/Dashboard/AddClass';
import MyClass from '../Pages/Dashboard/MyClass';
import MyTeacherProfile from '../Pages/Dashboard/MyTeacherProfile';
import TeacherRequests from '../Pages/Dashboard/TeacherRequests';
import Users from '../Pages/Dashboard/Users';
import AllAdminClasses from '../Pages/Dashboard/AllAdminClasses';
import AdminProfile from '../Pages/Dashboard/AdminProfile';
import TeacherForm from '../Pages/Home/TeacherForm';
import AllClasses from '../Pages/All Classes/AllClasses';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'teacherForm',
                element: <PrivateRoute>
                    <TeacherForm></TeacherForm>
                </PrivateRoute>
            },
            {

                path: 'allClass',
                element: <AllClasses></AllClasses>

            },

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            // Student
            {
                path: 'myEnrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            // Teacher
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'myTeacherProfile',
                element: <MyTeacherProfile></MyTeacherProfile>
            },


            // Admin

            {
                path: 'teacherRequests',
                element: <TeacherRequests></TeacherRequests>
            },
            {
                path: 'users',
                element: <Users></Users>
            },
            {
                path: 'allClasses',
                element: <AllAdminClasses></AllAdminClasses>
            },
            {
                path: 'adminProfile',
                element: <AdminProfile></AdminProfile>
            }
        ]
    }
])

export default Router;