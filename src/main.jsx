import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Rooot from "./components/Rooot/Rooot";
import Home from "./components/home/Home";
import CardDetail from "./components/CardDetail/CardDetail";
import { ToastContainer } from "react-toastify";
import Statistics from "./components/Statistics/Statistics";
import DonationList from "./components/DonationList/DonationList";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot></Rooot>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
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
