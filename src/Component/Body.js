import React from "react";
import bodyImg from "../Assest/home.jpg";
import Signup from "./Signup";
import Browse from "./Browse";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const RouteConfig = createBrowserRouter([
  {
    path:"/",
    element:<Signup/>

  },
  {
    path:"/browse",
    element: <Browse/>
  }
])
const Body = () => {
  return (
    <div
      className=" h-[100vh] flex justify-center "
      style={{ backgroundImage: `url(${bodyImg})` }}
    >
    <RouterProvider router={RouteConfig} />
    
    </div>
  );
};

export default Body;
