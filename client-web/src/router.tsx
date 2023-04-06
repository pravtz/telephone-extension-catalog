import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import AuthLayout from "./Layout/auth.layout";
import AppLayout from "./Layout/app.layout";
import HomePage from "./pages/Home";
import MyProfile from "./pages/MyProfile";

export const RouterMain = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
    ],
  },
]);
