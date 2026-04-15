import React from "react";

function temnav() {
  return (
    <div>
      <div className="navbar md:w-[90%] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default temnav;
