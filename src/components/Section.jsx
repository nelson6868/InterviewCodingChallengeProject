import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Text from "./Text";

export default function Section() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="col-8 offset-2 d-flex">
            <AiOutlineCheckCircle style={{fontSize: '28px'}} className="text-success me-2" />
            <p className="text-justif">
              <strong className="pe-2">Quick setup.</strong>Begin accepting
              payments in 15 minutes.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="col-8 offset-2 d-flex">
            <AiOutlineCheckCircle style={{fontSize: '28px'}} className="text-success me-2" />
            <p className="text-justify">
              <strong className="pe-2">Henest pricing.</strong> Only pay for 
              successful transactions
          
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="col-8 offset-2 d-flex">
            <AiOutlineCheckCircle style={{fontSize: '28px'}} className="text-success me-2" />
            <p className="text-justify">
              <strong className="pe-3">All leading payment methods.</strong>
              The best localised experience
             
            </p>
          </div>
        </div>
      </div>
      <div style={{fontSize:"1rem",textAlign:"center",fontFamily:"arial"}}>
      <Text text="Fees range between 0.10-2.4NGN(+ additional fees based on % of transaction value). More pricing details Per payment method. Here
." />
</div>

    </div>
  );
}
