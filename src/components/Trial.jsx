import React from "react";

export default function Trial() {
  return (
    <div className="container">
      <div className="trial my-5">
        <h6 className="text-decoration-underline text-success">
          Ready for a Trial?
        </h6>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="col-10">
              <h2>Start accepting</h2>
              <p style={{textDecoration:"underline",textDecorationColor:"red"}}>payments?<span>in minutes</span>
       
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 text-end">
            <button className="btn btn-success">Create a free Account</button>
          </div>
        </div>
      </div>
        <hr />
    </div>
  );
}
