import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import Register from "@/Pages/Register";
import Home from "@/Pages/Home";
import JobDetails from "@/Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails />,
        loader: ({ params }) =>fetch(`http://localhost:5000/jobs${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
