import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import JobDetails from "../components/JobDetails";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../components/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import MyBidsRequest from "../pages/MyBidsRequest";
import AllJobs from "../pages/AllJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_server_Url}/job/${params.id}`)

      },
      {
        path: '/addJob',
        element:<PrivateRoute><AddJob/></PrivateRoute>
      },
      {
        path:'/myPostedJobs',
        element:<PrivateRoute><MyPostedJobs/></PrivateRoute>
      },
      {
        path:'/updateJob/:id',
        element:<PrivateRoute><UpdateJob/></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_server_Url}/job/${params.id}`)
      },
      {
        path:'/myBids',
        element:<PrivateRoute><MyBids/></PrivateRoute>,
      },
      {
        path: '/myBidsRequest',
        element: <MyBidsRequest/>
      },
      {
        path: '/allJobs',
        element:<AllJobs/>
      }
    ]
  },
]);