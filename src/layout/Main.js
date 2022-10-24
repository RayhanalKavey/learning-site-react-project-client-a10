import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <container>
      <Header></Header>
      <Outlet></Outlet>
    </container>
  );
};

export default Main;
