import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};

export default Home;
