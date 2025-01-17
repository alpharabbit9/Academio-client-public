import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../Pages/Home/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

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
                path: 'dashboard',
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }
        ]
    }
])

export default Router;