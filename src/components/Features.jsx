import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import yugo1 from "../assets/FrameCard.png";


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
                src={yugo1}
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
                         <button style={{backgroundColor:"#0bb76b",color:"#fff",width:"9rem",margin:"-40%",height:"4rem", top:"0"}}>Copy Link</button>
                         <span style={{backgroundColor:"#fff",color:"blue",margin:"-40%",height:"4rem", top:"0"}}>https://www.habarpay.com/940jej...</span>
            </p>

             
          </div>
        </div>
      </div>
    </div>
  );
}
