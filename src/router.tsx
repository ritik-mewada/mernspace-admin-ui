import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/login";
import Dashboard from "./Layout/Dashboard";
import NonAuth from "./Layout/NonAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
]);
