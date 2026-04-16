import React from "react";

function Timeline() {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto py-20">
      <h1 className="font-bold text-5xl text-[#1F2937] ">Timeline</h1>
      <div className="dropdown dropdown-center w-full">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 text-[#64748B] font-normal text-lg h-14 w-full sm:w-87 flex justify-between"
        >
          <p>Filter Timeline</p> <span>⬇️</span>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-full sm:w-87 p-2 shadow-sm"
        >
          <li>
            <button className="text-[#384455] font-normal text-lg ">
              Call
            </button>
          </li>
          <li>
            <button className="text-[#384455] font-normal text-lg ">
              Text
            </button>
          </li>
          <li>
            <button className="text-[#384455] font-normal text-lg ">
              Video
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
