import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Rooot from "./components/Rooot/Rooot";
import Home from "./components/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot></Rooot>, 
    children: [
      
      {
        path: "/",
        element: <Home></Home>, 
      },
      {
        path: "donation",
      },
      {
        path: "donation",
      },
      {
        path: "statistics",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
