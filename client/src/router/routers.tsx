import Home from "../pages/Home";
import Dashboard from "../pages/DashboardPage";
import Goal from "../pages/GoalPage";
import Profile from "../pages/ProfilePage";
// import NavComponent from "../components/navComponent";
// import Logout from "../components/LogoutButton";

import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import NavComponent from "../components/navComponent";

export const router = createBrowserRouter([
   {
    element:(
        <div className="flex">
            <NavComponent />
            <Outlet />
        </div>
    ),
    children: [
        {
            path: '/',
            element: <Navigate to='/home' replace />

        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/goal',
            element: <Goal />
        },
        {
            path: '/profile',
            element: <Profile />
        },
    ]
   }
]);