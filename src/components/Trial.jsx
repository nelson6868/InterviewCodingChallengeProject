import React from "react";

export default function Trial() {
  return (
    <div className="container">
      <div className="trial my-5">
      <span style={{backgroundColor:"#ddf6ff", textDecoration:"underline", textDecorationColor:"#16b66e" ,height:"2rem",color:"#16b66e", fontWeight:"bold"}}> Ready for a Trial?</span>
              
         
        
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="col-10">
              <h2>Start accepting</h2>
              <span style={{backgroundColor:"#ddf6ff", textDecoration:"underline", textDecorationColor:"#b6d7ff",textDecorationStyle:"solid" ,height:"2rem",fontSize:"35px",color:"#1570fd", fontWeight:"bold"}}>payments</span> <span style={{height:"2rem",fontSize:"35px",color:"#32385c", fontWeight:"bold"}}>in minutes.</span>
              
       
              
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
