import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import {  FcDonate } from "react-icons/fc";


export default function ScuadOrganizations() {
  return (

    <div className="col-sm-12 col-md-4">
    <div className="card">
      <div className="card-body">
        <FcDonate  style={{height:"3rem",width:"3rem"}} />
        <h5 className="Scuad "> Scuad for Larg organizations</h5>
        Paystack helps many of the largest
        corporate and government Organizations in<br/>
        Nigeria get paid quickly and securely.<br/>
        <p className="learnmore"><a href="/" className="text-decoration-none">
          Learn More <BsArrowRightCircle className="ms-2" />
        </a></p>
      </div>
    </div>
  </div>
  )
}