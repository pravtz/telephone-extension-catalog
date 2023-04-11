import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import AuthLayout from "./Layout/auth.layout";
import AppLayout from "./Layout/app.layout";
import HomePage from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import ErrorPage from "./pages/error-page";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const RouterMain = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
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
        element: (<ProtectedRoute><HomePage /></ProtectedRoute>),
      },
      {
        path: "profile",
        element: <ProtectedRoute><MyProfile /></ProtectedRoute>,
      },
    ],
  },
]);
