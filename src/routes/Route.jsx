import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import Register from "@/Pages/Register";
import Home from "@/Pages/Home";
import JobDetails from "@/Pages/JobDetails";
import JobApply from "@/Pages/JobApply";
import Myapplications from "@/Pages/MyApplications";
import PrivatRoute from "@/Pages/PrivatRoute";
import AddJob from "@/Pages/AddJob";

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
        path:"/addjob",
        element:<PrivatRoute><AddJob/></PrivatRoute>
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/jobdetails/:id",
        element: (
          <PrivatRoute>
            <JobDetails />
          </PrivatRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobapply/:id",
        element: (
          <PrivatRoute>
            <JobApply />
          </PrivatRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myapplication",
        element: (
          <PrivatRoute>
            <Myapplications />
          </PrivatRoute>
        ),
      },
    ],
  },
]);
export default router;
