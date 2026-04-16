import React from "react";
import { FaBoxArchive } from "react-icons/fa6";
import { HiBellSnooze } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

function FriendDetailsLeft({ friend }) {
  if (!friend) {
    return null;
  }
  return (
    <div>
      <div className="max-w-full sm:max-w-87.5 p-6 bg-white rounded-lg shadow-sm shadow-gray-300 flex flex-col items-center justify-center">
        <img
          src={friend.img}
          alt=""
          srcSet=""
          className="h-20 w-20 rounded-full bg-amber-100 mb-3"
        />
        <h3 className="font-semibold text-xl text-[#1F2937] text-center ">
          {friend.name}
        </h3>
        <p
          className={`text-center text-white font-normal text-xs py-1 my-2 px-2 rounded-2xl ${friend.status == "overdue" ? "bg-[#EF4444]" : friend.status === "active" ? "bg-[#244d3f]" : "bg-amber-400"}  `}
        >
          {friend.status}
        </p>
        <div className="flex gap-1.5 mb-2">
          {friend.tags.map((tag, i) => (
            <p
              key={i}
              className="bg-[#CBFADB] text-xs rounded-2xl py-1 px-2 text-[#244d3f] text-center"
            >
              {tag}
            </p>
          ))}
        </div>

        <small className="pb-2 italic text-xs text-[#64748B] text-center ">
          "{friend.bio}"
        </small>
        <small className=" text-xs text-[#64748B] text-center">
          {friend.email}
        </small>
      </div>
      <div className="w-full sm:max-w-87.5 my-2">
        <button className="w-full my-2 py-4 bg-white rounded-lg shadow-sm shadow-gray-300 flex items-center justify-center gap-2">
          <HiBellSnooze color="#1f2937" size={21} />
          <span className="font-normal text-[16px] text-[#1F2937] ">
            Snooze 2 weeks
          </span>
        </button>
        <button className="w-full my-2 py-4 bg-white rounded-lg shadow-sm shadow-gray-300 flex items-center justify-center gap-2">
          <FaBoxArchive color="#1f2937" size={21} />
          <span className="font-normal text-[16px] text-[#1F2937] ">
            Archive
          </span>
        </button>
        <button className="w-full my-2 py-4 bg-white rounded-lg shadow-sm shadow-gray-300 flex items-center justify-center gap-2">
          <RiDeleteBin6Line color="#EF4444" size={21} />
          <span className="font-normal text-[16px] text-[#EF4444] ">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
}

export default FriendDetailsLeft;
