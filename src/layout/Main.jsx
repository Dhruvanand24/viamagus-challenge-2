import React from "react";
import { Outlet } from "react-router-dom";
import "./circles.scss"; // Import the SCSS file

const Main = () => {
  return (
    <div className="font-ED min-h-screen relative select-none">
      <div className="z-10">
        <Outlet />
      </div>
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Main;
