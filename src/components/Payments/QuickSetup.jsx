import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import Text from "./Text";

export default function QuickSetup() {
  return (
  
        <div className="col-sm-12 col-md-4">
          <div className="col-8 offset-2 d-flex">
            <AiOutlineCheckCircle style={{fontSize: '28px'}} className="text-success me-2" />
            <p className="text-justif">
              <strong className="pe-1">Quick setup.</strong><span style={{color:"#999999"}}>Begin accepting
              payments in 15 minutes.</span>
            </p>
          </div>
        </div>
        )
        }