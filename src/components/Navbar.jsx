import React from "react";
import venture_securities from "../assets/venture_securities.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <header className="w-full h-16 bg-white shadow-md px-4 md:px-8 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* This is the logo section */}
      <div className="flex items-center" onClick={() => navigate("/")}>
        <img
          src={venture_securities}
          alt="venture_securities"
          className="h-10 w-auto object-contain cursor-pointer"
        />
      </div>

      {/* Avatar section right side*/}
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full  bg-orange-500 text-white font-semibold text-lg  cursor-pointer hover:bg-orange-700 transition">
          M
        </div>
      </div>
    </header>
  );
};

export default Navbar;
