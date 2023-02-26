import React from "react";
import About from "./About";
import Review from "./Review";
import CityNav from "./CityNav";
export const PostBlog = () => {
  return (
    <div>
      <div className="nav w-full">
        <CityNav />
      </div>
      <div className="content w-11/12 m-auto">
        <div className="about">
          <About />
        </div>
        <hr />
        <div className="reviews grid grid-cols-3">
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};
