import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import FrameCard from "../assets/FrameCard.png";

export default function Features() {
  return (
    <div className="container">
      <div className="features">
        <h5 className="text-decoration-underline text-primary">Features</h5>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Create Paymment Requests</h2>
            <p>
            Make a simple payment link in 5 second’s. Use powerful features to <br/>
            Customize your request

            </p>
            <a href="/">
              Learn More <BsArrowRightCircle className="ms-2" />
            </a>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Create Paymment Requests</h2>
            <p>
            <img
                src={FrameCard.png}
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
