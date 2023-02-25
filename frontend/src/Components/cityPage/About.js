import React, { Component } from "react";
import amsterdam from '../../amsterdam.png'

export default class About extends Component {
  render() {
    return (
      <div className="w-1/2">
        <div className="image">
          <img src={amsterdam} alt="city" className="" />
        </div>
        <div className="description">
          <h2>Culture</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            veniam eum numquam nam obcaecati labore neque ratione quia quo
            eaque, earum dicta libero magnam aliquid fugiat, porro voluptate
            autem. Voluptatem, magnam sunt quidem dignissimos inventore dolores
            alias dolore nulla pariatur nostrum aliquid eligendi fuga qui neque
            provident, impedit nemo esse, fugit sapiente hic minus error? Ad
            eveniet sapiente, quia ea saepe ratione vitae officiis consequatur
            minima cum, eius atque iure.
          </p>
        </div>
      </div>
    );
  }
}
