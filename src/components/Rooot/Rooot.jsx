import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Rooot = () => {
  return (
    <>
    <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Rooot;
