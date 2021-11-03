



import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { FcManager } from "react-icons/fc";


export default function ScuadEntrepreneurs() {
  return (

    <div className="col-sm-12 col-md-4">
      <div className="card">
        <div className="card-body">
          <FcManager style={{ height: "3rem", width: "3rem" }} />
          <h4 className="Scuad ">Scuad for Entrepreneurs</h4>
          From startup to scale-up,we can support<br />
          you at every stage of your businesses'<br />
          growth.
          <p className="learnmore"><a href="/" className="text-decoration-none">
            Learn More <BsArrowRightCircle className="ms-2" />
          </a></p>
        </div>
      </div>
    </div>
  )
}





