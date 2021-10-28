import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { FcGlobe, FcManager, FcDonate } from "react-icons/fc";

export default function Cards() {
  return (
    <div className="container">
      <div className="row" >
        <div className="col-sm-12 col-md-4" >
          <div className="card">
            <div className="card-body">
              <FcGlobe />
              <h5>Scuad for Global Brands</h5>
              <p>We help global brands accept payments from across Africa.</p>
             <p className="learnmore1"> <a href="/" className="text-decoration-none">
                Learn More <BsArrowRightCircle className="ms-2" />
              </a></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <FcManager />
              <h4>Scuad for Entreprenueurs</h4>
              From startup to scale-up,we can support<br/>
              you at every stage of your businesses<br/>
              growth.
              <p className="learnmore"><a href="/" className="text-decoration-none">
                Learn More <BsArrowRightCircle className="ms-2" />
              </a></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <FcDonate />
              <h5>Scuad for Larg Organizations</h5>
              Paystacks helps many of the largest
              corporate and government Organizations in<br/>
              Nigeria get paid quickly and securely.<br/>
              <p className="learnmore"><a href="/" className="text-decoration-none">
                Learn More <BsArrowRightCircle className="ms-2" />
              </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
