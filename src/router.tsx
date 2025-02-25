import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/login";
import Dashboard from "./Layout/Dashboard";
import NonAuth from "./Layout/NonAuth";
import Root from "./Layout/Root";
import UserPage from "./pages/users/UserPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Dashboard />,
                children: [
                    {
                        path: "",
                        element: <HomePage />,
                    },
                    {
                        path: "/users",
                        element: <UserPage />,
                    },
                ],
            },
            {
                path: "/auth",
                element: <NonAuth />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                ],
            },
        ],
    },
]);
