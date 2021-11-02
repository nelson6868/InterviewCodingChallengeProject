import React from "react";
import CreateFreeActBtn from './CreateFreeActBtn'

export default function Trial() {
  return (
    <div className="container">
      <div className="trial my-5">
      <span className="ready"> Ready for a trial?</span>
              
         
        
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="col-10">
              <h2 className="headertext">Start accepting</h2>
              <span className="payment">
                 payments</span> <span className="headertext">in minutes.</span>
              
       
              
            </div>
          </div>
          <div className="col-sm-12 col-md-6 text-end">
            <CreateFreeActBtn/>
          </div>
        </div>
      </div>
        <hr />
    </div>
  );
}
