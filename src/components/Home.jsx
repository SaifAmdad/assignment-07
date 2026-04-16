import React, { useContext } from "react";
import HomeCard from "../ui/HomeCard";
import { StoreContext } from "../context/FriendContext";
import { Link } from "react-router";

function Home() {
  const { friends } = useContext(StoreContext);

  return (
    <div className="container mx-auto lg:w-[80%] ">
      <section className="mt-20 mb-10 text-center">
        <h1 className="font-bold text-5xl text-[#1F2937] text-center">
          Friends to keep close in your life
        </h1>
        <p className="font-normal text-[16px] text-[#64748B] text-center my-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br /> the relationships that matter most.
        </p>
        <button className="bg-[#244d3f] text-white px-4 py-3 text-[16px] font-semibold rounded-sm mt-4">
          + Add a Friend
        </button>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-3 justify-items-center">
        <div className="bg-white shadow shadow-gray-350 h-34.25 w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">10</h2>
          <p className="font-normal text-[#64748b] text-[18px] ">
            Total Friends
          </p>
        </div>
        <div className="bg-white shadow shadow-gray-350 h-34.25 w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">3</h2>
          <p className="font-normal text-[#64748b] text-[18px] ">On Track</p>
        </div>
        <div className="bg-white shadow shadow-gray-350 h-34.25 w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">6</h2>
          <p className="font-normal text-[#64748b] text-[18px] ">
            Need Attention
          </p>
        </div>
        <div className="bg-white shadow shadow-gray-350 h-34.25 w-65 text-center flex items-center justify-center flex-col rounded-lg">
          <h2 className="font-semibold text-[32px] text-[#244d3f] ">12</h2>
          <p className="font-normal text-[#64748b] text-[18px] ">
            Interactions This Month
          </p>
        </div>
      </section>
      <hr className="bg-[#E9E9E9] border-[0.3px] border-[#E9E9E9] my-10" />
      <section className="mb-20">
        <h3 className="font-semibold text-2xl text-black ">Your Friends</h3>
        <div className="py-2 grid place-items-center sm:place-items-stretch gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {friends.map((friend, i) => (
            <Link key={i} to={`/details/${friend.id}`}>
              <HomeCard friend={friend} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
