import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-28 lg:py-64">
      <h1 className="text-center md:text-3xl lg:text-5xl font-bold mb-12">
        I Grow By Helping People In Need
      </h1>
      <div className="join">
        <input className="input input-bordered join-item lg:w-72" placeholder="Search here...." />
        <button className="bg-[#FF444A] px-6 text-white join-item rounded-lg">Search</button>
      </div>
    </div>
  );
};

export default Banner;
