import React from "react";

function HomeCard({ friend }) {
  return (
    <div className="max-w-65 p-6 bg-white rounded-lg shadow-sm shadow-gray-300 flex flex-col items-center justify-center">
      <img
        src={friend.img}
        alt=""
        srcSet=""
        className="h-20 w-20 rounded-full bg-amber-100 mb-3"
      />
      <h3 className="font-semibold text-xl text-[#1F2937] text-center ">
        {friend.name}
      </h3>
      <small className="py-2 text-xs text-[#64748B] text-center ">
        {friend.days_since_contact}d ago
      </small>
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
      <p
        className={`text-center text-white font-normal text-xs py-1 px-2 rounded-2xl ${friend.status == "overdue" ? "bg-[#EF4444]" : friend.status === "active" ? "bg-[#244d3f]" : "bg-amber-400"}  `}
      >
        {friend.status}
      </p>
    </div>
  );
}

export default HomeCard;
