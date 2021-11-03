import React from "react";
import   CreateActBtn from "./CreateActBtn";


export default function Header() {
  return (
    <div className="container">
      <hr />
     <span className="headertext"> A faster & easier<br/>
       way to receive</span><br/>
      <span className="payment"> payments</span> 
       <span className="headertext">  online.</span><br/>
    
      <div className="headertext2">
       <span >Scuad builds innovative pathways to enable all types of businesses and <br/>
       individuals from around the world make and receive payments smarter and <br/>simpler<br/> 
      
       </span>
         </div>
          <div  className="btn">

         
          <CreateActBtn/>




        </div>
      <hr />
    </div>
  );
}
