import React from "react";

const Banner = ({ searchText, setSearchText }) => {
  const bannerStyle = {
    backgroundImage:
      'url("https://cdn.discordapp.com/attachments/1065689957525630997/1156138769905365012/sS46zBu.png?ex=6513e1a2&is=65129022&hm=53e0fdccf348553f42fdc5b70b21a65cad890c14de4238d70a10d2bc26e81000&")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2,
    backgroundColor: "white",
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0"
        style={bannerStyle}
      ></div>
      <div className="relative flex flex-col items-center justify-center mb-9 py-10 md:py-28 lg:py-64 z-10">
        <h1 className="text-center md:text-3xl lg:text-5xl font-bold mb-12">
          I Grow By Helping People In Need
        </h1>
        <div className="join">
          <input
            onBlur={(text) => {
              setSearchText(text.target.value);
            }}
            className="input input-bordered join-item lg:w-72"
            placeholder="Search here...."
          />
          <button className="bg-[#FF444A] px-6 text-white join-item rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
