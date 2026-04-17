import React, { useContext, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { StoreContext } from "../context/FriendContext";
import TimelineCard from "../ui/TimelineCard";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { LuGalleryVerticalEnd } from "react-icons/lu";

function Timeline() {
  const { timeline } = useContext(StoreContext);
  const [filterType, setFilterType] = useState("all");
  const [filteredTimeline, setFilteredTimeline] = useState([]);

  const filterHandler = (typeFilter) => {
    const filteredData = timeline.filter((data) => data.type == typeFilter);
    setFilteredTimeline(filteredData);
    setFilterType(typeFilter);
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto py-20">
      <h1 className="font-bold text-5xl text-[#1F2937] ">Timeline</h1>
      <div className="dropdown dropdown-start w-full">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 text-[#64748B] font-normal text-lg h-14 w-full sm:w-87 flex justify-between"
        >
          <p>
            {" "}
            {filterType == "all"
              ? "Filter Timeline"
              : `Filtered by ${filterType}`}{" "}
          </p>{" "}
          <span>⬇️</span>
        </div>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-full sm:w-87 p-2 shadow-sm">
          <li>
            <button
              onClick={() => filterHandler("all")}
              className=" text-[#384455] font-normal text-lg  "
            >
              <LuGalleryVerticalEnd /> All
            </button>
          </li>
          <li>
            <button
              onClick={() => filterHandler("Call")}
              className=" text-[#384455] font-normal text-lg "
            >
              <FaPhoneVolume /> Call
            </button>
          </li>
          <li>
            <button
              onClick={() => filterHandler("Text")}
              className="text-[#384455] font-normal text-lg "
            >
              <BsFillChatSquareTextFill /> Text
            </button>
          </li>
          <li>
            <button
              onClick={() => filterHandler("Video")}
              className="text-[#384455] font-normal text-lg "
            >
              <FaVideo /> Video
            </button>
          </li>
        </ul>
      </div>
      {!timeline.length && (
        <div className="h-[70vh] flex justify-center items-center shadow shadow-gray-300 mt-4">
          <h3 className="font-bold text-3xl text-gray-400 ">
            No Timeline Added
          </h3>
        </div>
      )}
      {filterType == "all"
        ? timeline.map((details, i) => {
            return <TimelineCard key={i} details={details} />;
          })
        : filteredTimeline.map((details, i) => {
            return <TimelineCard key={i} details={details} />;
          })}
    </div>
  );
}

export default Timeline;
