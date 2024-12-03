import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex justify-between px-8 w-full list-none py-6 text-xl font-semibold bg-slate-400">
      <li>To-Do List Application</li>
      <button onClick={handleLogout} className="hover:text-white">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
