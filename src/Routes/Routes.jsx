import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/AddClass";
import InstructorRoute from "./InstructorRoute";
import InsMyClass from "../Pages/Dashboard/InsMyClass";
import ManageClass from "../Pages/Dashboard/ManageClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    // Dashboard Routes
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin Routes
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageClass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },

            // Instructor Routes
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'insMyClass',
                element: <InstructorRoute><InsMyClass></InsMyClass></InstructorRoute>
            },

            // Student Routes
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
        ]

    }
]);
