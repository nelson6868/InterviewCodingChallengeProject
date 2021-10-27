import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { FcGlobe, FcManager, FcDonate } from "react-icons/fc";

export default function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <FcGlobe />
              <h3>Scuad for Global Brands</h3>
              <p>We help global brands accept payments from across Africa.</p>
              <a href="/" className="text-decoration-none">
                Learn More <BsArrowRightCircle className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <FcManager />
              <h3>Scuad for Global Brands</h3>
              <p>We help global brands accept payments from across Africa.</p>
              <a href="/" className="text-decoration-none">
                Learn More <BsArrowRightCircle className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <FcDonate />
              <h3>Scuad for Global Brands</h3>
              <p>We help global brands accept payments from across Africa.</p>
              <a href="/" className="text-decoration-none">
                Learn More <BsArrowRightCircle className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
