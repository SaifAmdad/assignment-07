import React from "react";
import logo from "../assets/KeenKeeper.png";
import { NavLink } from "react-router";
import { RiHome4Line } from "react-icons/ri";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";

function Navbar() {
  const navlinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? `flex items-center gap-1 font-semibold text-[16px] text-white bg-[#244D3F] py-1.5 px-3 rounded-sm`
              : "text-[#64748B] font-medium text-[16px] flex items-center gap-1"
          }
        >
          <RiHome4Line
            color={({ isActive }) => (isActive ? "white" : "#244D3F")}
            height={"20px"}
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive
              ? `flex items-center gap-1 font-semibold text-[16px] text-white bg-[#244D3F] py-1.5 px-3 rounded-sm`
              : "text-[#64748B] font-medium text-[16px] flex items-center gap-1"
          }
        >
          <IoTimeOutline
            color={({ isActive }) => (isActive ? "white" : "#244D3F")}
            height={"20px"}
          />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/status"}
          className={({ isActive }) =>
            isActive
              ? `flex items-center gap-1 font-semibold text-[16px] text-white bg-[#244D3F] py-1.5 px-3 rounded-sm`
              : "text-[#64748B] font-medium text-[16px] flex items-center gap-1"
          }
        >
          <LuChartNoAxesCombined
            color={({ isActive }) => (isActive ? "white" : "#244D3F")}
            height={"20px"}
          />
          Status
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar md:w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" srcSet="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
