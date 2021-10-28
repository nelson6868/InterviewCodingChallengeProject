import React from "react";
import Button from './Button'

export default function Trial() {
  return (
    <div className="container">
      <div className="trial my-5">
      <span className="ready"> Ready for a Trial?</span>
              
         
        
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="col-10">
              <h2 className="headertext">Start accepting</h2>
              <span className="payment">
                 payments</span> <span className="headertext">in minutes.</span>
              
       
              
            </div>
          </div>
          <div className="col-sm-12 col-md-6 text-end">
            <Button/>
          </div>
        </div>
      </div>
        <hr />
    </div>
  );
}
