import React, { useContext } from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaPhoneVolume, FaVideo } from "react-icons/fa6";
import { StoreContext } from "../context/FriendContext";
import { toast } from "react-toastify";

function FriendDetailsRight({ friend }) {
  const { timeline, setTimeline } = useContext(StoreContext);

  if (!friend) {
    return (
      <div className="h-[70vh]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const clickHandler = ({ name, type }) => {
    const time = new Date().toLocaleDateString();
    const newTimeline = {
      name,
      type,
      time,
    };
    setTimeline([...timeline, newTimeline]);
    toast(`${type} with ${name}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow shadow-gray-350 h-35 w-full sm:max-w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">
            {friend.days_since_contact}
          </h2>
          <p className="font-normal text-[#64748b] text-[18px] ">
            Days Since Contact
          </p>
        </div>
        <div className="bg-white shadow shadow-gray-350 h-35 w-full sm:max-w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">
            {friend.goal}
          </h2>
          <p className="font-normal text-[#64748b] text-[18px] ">Goal (Days)</p>
        </div>
        <div className="bg-white shadow shadow-gray-350 h-35 w-full sm:max-w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">
            {friend.next_due_date}
          </h2>
          <p className="font-normal text-[#64748b] text-[18px] ">Next Due</p>
        </div>
      </div>
      <div className=" flex flex-col p-6 bg-white shadow shadow-gray-350 my-6">
        <div className="flex justify-between">
          <h3 className="font-medium text-xl text-[#244d3f] ">
            Relationship Goal
          </h3>
          <button className="py-4 px-4 btn text-[#244d3f] font-medium text-sm">
            Edit
          </button>
        </div>

        <div className="text-lg flex flex-row gap-1">
          <h2 className="text-[#64748B] font-normal">Connect every </h2>
          <span className="text-[#1F2937] font-bold"> {friend.goal} days</span>
        </div>
      </div>
      <div className=" flex flex-col p-6 bg-white shadow shadow-gray-350 ">
        <h3 className="font-medium text-xl text-[#244d3f] mb-4">
          Quick Check-In
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <button
            onClick={() =>
              clickHandler({
                name: friend.name,
                type: "Call",
              })
            }
            className="p-4 bg-[#E9E9E9] shadow shadow-gray-350 flex flex-row sm:flex-col gap-2.5 justify-center items-center w-full h-20 sm:h-24 rounded-lg btn"
          >
            <FaPhoneVolume size={25} />{" "}
            <span className="font-normal text-lg ">Call</span>
          </button>
          <button
            onClick={() =>
              clickHandler({
                name: friend.name,
                type: "Text",
              })
            }
            className="p-4 bg-[#E9E9E9] shadow shadow-gray-350 flex flex-row sm:flex-col gap-2.5 justify-center items-center w-full h-20 sm:h-24 rounded-lg btn"
          >
            <BsFillChatSquareTextFill size={25} />{" "}
            <span className="font-normal text-lg ">Text</span>
          </button>
          <button
            onClick={() =>
              clickHandler({
                name: friend.name,
                type: "Video",
              })
            }
            className="p-4 bg-[#E9E9E9] shadow shadow-gray-350 flex flex-row sm:flex-col gap-2.5 justify-center items-center w-full h-20 sm:h-24 rounded-lg btn"
          >
            <FaVideo size={25} />{" "}
            <span className="font-normal text-lg ">Video</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendDetailsRight;
