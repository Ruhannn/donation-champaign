import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Rooot from "./components/Rooot/Rooot";
import Home from "./components/home/Home";
import CardDetail from "./components/CardDetail/CardDetail";
import { ToastContainer } from "react-toastify";
import DonationList from "./DonationList/DonationList";

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
        path: "card/:id",
        element: <CardDetail></CardDetail>,
      },
      {
        path: "/donation",
        element: <DonationList></DonationList>,
        loader: () => fetch('/data.json')
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
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
