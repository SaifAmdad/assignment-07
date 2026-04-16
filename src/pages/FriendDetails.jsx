import React, { useContext } from "react";
import { useParams } from "react-router";
import { StoreContext } from "../context/FriendContext";
import FriendDetailsLeft from "../ui/FriendDetailsLeft";
import FriendDetailsRight from "../ui/FriendDetailsRight";

function FriendDetails() {
  const params = useParams();
  const { friends } = useContext(StoreContext);
  const friend = friends[params.id - 1];
  const frien = {
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
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto my-20 ">
      <div>
        <FriendDetailsLeft friend={friend} />
        <FriendDetailsRight friend={friend} />
      </div>
    </div>
  );
}

export default FriendDetails;
