import React from "react";

function HomeCard() {
  const friend = {
    id: 1,
    name: "John Doe",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    email: "john@example.com",
    days_since_contact: 12,
    status: "overdue",
    tags: ["college", "close friend"],
    bio: "Met in university. Love hiking together.",
    goal: 14,
    next_due_date: "2025-07-20",
  };
  return (
    <div className="max-w-65 p-6 bg-white rounded-lg shadow-sm shadow-gray-300 flex flex-col items-center justify-center">
      <img
        src={friend.img}
        alt=""
        srcset=""
        className="h-20 w-20 rounded-full bg-amber-100 mb-3"
      />
      <h3 className="font-semibold text-xl text-[#1F2937] text-center ">
        {friend.name}
      </h3>
      <small className="py-2 text-xs text-[#64748B] text-center ">
        {friend.days_since_contact}d ago
      </small>
      <div className="flex gap-1.5 mb-2">
        {friend.tags.map((tag) => (
          <p className="bg-[#CBFADB] rounded-2xl py-1 px-2 text-[#244d3f] text-center">
            {tag}
          </p>
        ))}
      </div>
      <p
        className={`text-center text-white font-normal text-xs py-1 px-2 rounded-2xl ${friend.status === "Overdue" ? "bg-[#EF4444]" : friend.status === "On-Track" ? "bg-[#244d3f]" : "bg-amber-400"}  `}
      >
        {friend.status}
      </p>
    </div>
  );
}

export default HomeCard;
