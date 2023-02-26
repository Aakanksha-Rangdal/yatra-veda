import React from "react";
import Profile from "./Profile";
import CarouselNav from "./CarouselNav";
export const Carousel = () => {
  return (
    <div className="">
      <CarouselNav /> 
      <div className=" w-2/3 m-auto p-2 bg-[#9e566f] border-2 rounded-xl">
        <h3 className="text-3xl px-3 font-semibold">Couch Surfers</h3>
        <div className="profiles gap-5 grid grid-cols-3 p-3">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </div>
  );
};
