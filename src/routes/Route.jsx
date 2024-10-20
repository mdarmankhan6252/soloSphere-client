import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export const router = createBrowserRouter([
   {
     path: "/",
     element:<Root/>,
  children:[
      {
         index:true,
         element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
     ]
   },
 ]);