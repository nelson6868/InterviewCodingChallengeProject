import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { FcGlobe } from "react-icons/fc";

export default function ScuadGlobal() {
  return (

    <div className="col-sm-12 col-md-4" >
      <div className="card">
        <div className="card-body">
          <FcGlobe style={{ height: "3rem", width: "3rem" }} />
          <h5 className="Scuad ">Scuad for Global Brands</h5>
          <p>We help global brands accept payments <br />from across Africa.</p>
          <p className="learnmore1"> <a href="/" className="text-decoration-none">
            Learn More <BsArrowRightCircle className="ms-2" />
          </a></p>
        </div>
      </div>
    </div>


  )
}

