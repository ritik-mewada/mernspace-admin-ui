import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/login";
import Dashboard from "./Layout/Dashboard";
import NonAuth from "./Layout/NonAuth";
import Root from "./Layout/Root";
import UserPage from "./pages/users/UserPage";
import Tenants from "./pages/tenants/Tenants";
import Products from "./pages/products/Products";

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
          {
            path: "/restaurants",
            element: <Tenants />,
          },
          {
            path: "/products",
            element: <Products />,
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
