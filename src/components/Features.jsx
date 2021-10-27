import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Features() {
  return (
    <div className="container">
      <div className="features">
        <h5 className="text-decoration-underline text-primary">Features</h5>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Create Paymment Requests</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sint aspernatur aliquid mollitia quia quo culpa.
            </p>
            <a href="/">
              Learn More <BsArrowRightCircle className="ms-2" />
            </a>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Create Paymment Requests</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sint aspernatur aliquid mollitia quia quo culpa.
              lllllllll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
