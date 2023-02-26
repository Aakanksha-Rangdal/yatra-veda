import React, { Component } from "react";
import amsterdam from "../../assets/amsterdam.png";
import GetSurfer from "./GetSurfer";

export default class About extends Component {
  render() {
    return (
      <div className="w-full grid grid-cols-3">
        <div className="col-span-2 ">
          <div className="image w-4/5">
            <img src={amsterdam} alt="city" className="" />
          </div>
          <div className="description">
            <h2 className="text-5xl font-semibold">Culture</h2>
            <p className="my-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              veniam eum numquam nam obcaecati labore neque ratione quia quo
              eaque, earum dicta libero magnam aliquid fugiat, porro voluptate
              autem. Voluptatem, magnam sunt quidem dignissimos inventore
              dolores alias dolore nulla pariatur nostrum aliquid eligendi fuga
              qui neque provident, impedit nemo esse, fugit sapiente hic minus
              error? Ad eveniet sapiente, quia ea saepe ratione vitae officiis
              consequatur minima cum, eius atque iure.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <GetSurfer />
        </div>
      </div>
    );
  }
}
