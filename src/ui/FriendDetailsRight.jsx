import React from "react";

function FriendDetailsRight({ friend }) {
  console.log(friend);
  return (
    <div>
      <h1>{friend.name}</h1>
    </div>
  );
}

export default FriendDetailsRight;
