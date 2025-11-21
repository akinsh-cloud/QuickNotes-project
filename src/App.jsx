import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* This is where the child routes will render */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // parent layout
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
