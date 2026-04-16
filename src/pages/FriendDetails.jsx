import React, { useContext } from "react";
import { useParams } from "react-router";
import { StoreContext } from "../context/FriendContext";
import FriendDetailsLeft from "../ui/FriendDetailsLeft";
import FriendDetailsRight from "../ui/FriendDetailsRight";

function FriendDetails() {
  const params = useParams();
  const { friends } = useContext(StoreContext);
  if (!friends) {
    return null;
  }
  const friend = friends[params.id - 1];

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto my-20 ">
      <div className="grid grid-cols-3 justify-items-stretch lg:justify-items-normal">
        <div className="col-span-3 lg:col-span-1 sm:flex sm:justify-center">
          <FriendDetailsLeft friend={friend} />{" "}
        </div>
        <div className="col-span-3 lg:col-span-2">
          <FriendDetailsRight friend={friend} />{" "}
        </div>
      </div>
    </div>
  );
}

export default FriendDetails;
