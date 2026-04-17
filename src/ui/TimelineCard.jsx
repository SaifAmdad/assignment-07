import React from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function TimelineCard({ details }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = details.time.split("/")[0] - 1;

  return (
    <div className="my-5 flex items-center justify-start gap-3 shadow shadow-gray-300 bg-white py-5 px-4 border border-gray-200 rounded-sm">
      <div>
        {details.type == "Call" ? (
          <FaPhoneVolume size={25} />
        ) : details.type == "Text" ? (
          <BsFillChatSquareTextFill size={25} />
        ) : (
          <FaVideo size={25} />
        )}
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="text-xl font-medium text-[#244d3f] ">
            {details.type}
          </h3>{" "}
          <p className="text-xl font-medium text-[#64748B]">
            with {details.name}
          </p>
        </div>
        <p className="text-[16px] font-medium text-[#64748b] ">
          {" "}
          {months[month]} {details.time.split("/").slice(1, 3).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default TimelineCard;
