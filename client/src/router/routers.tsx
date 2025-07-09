import Home from "../pages/Home";
import Dashboard from "../pages/DashboardPage";
import Goal from "../pages/GoalPage";
import Profile from "../pages/ProfilePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

// import NavComponent from "../components/navComponent";
// import Logout from "../components/LogoutButton";

import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import NavComponent from "../components/navComponent";

export const router = createBrowserRouter([

    // ── PUBLIC ROUTES ───────────────────────────────────────────
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: '/',
        element: <Navigate to='/home' replace />

    },
    {
        path: '/home',
        element: <Home />
    },

    // ── PROTECTED ROUTE SHELL ──────────────────────────────────
    {
        element: (
            <ProtectedRoute>
                <div className="flex">
                    <NavComponent />
                    <Outlet />
                </div>
            </ProtectedRoute>
        ),
        children: [
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