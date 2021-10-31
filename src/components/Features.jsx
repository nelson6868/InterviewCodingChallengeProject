import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import yugo1 from "../assets/FrameCard.png";


export default function Features() {
  return (
    <div className="container">
      <div className="features">
        <h5 className="featuresheader">Features</h5>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="featurestexttitle">Create Payment Requests</h2>
            <p>
            Make a simple payment link in 5 second’s. Use powerful <br/><p>features to 
            Customize your request.</p>

            </p>
            <a href="/">
              Learn More <BsArrowRightCircle className="ms-2" />
            </a>
          </div>
          <div className="col-sm-12 col-md-6">
         
            <p>
            <img
                src={yugo1}
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
             <button className="btn2">Copy Link</button>
           
            </p>
            
            <span className="link">https://www.habarpay.com/940jej...</span>
          
          </div>
        </div>
      </div>
    </div>
  );
}
