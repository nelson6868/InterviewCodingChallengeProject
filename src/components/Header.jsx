import React from "react";
import   CreateActBtn from "./CreateActBtn";

// import Banner from "./Banner";

export default function Header() {
  return (
    <div className="container">
      <hr />
     <span className="headertext"> A faster & easier<br/>
       way to receive</span><br/>
      <span className="payment"> payments</span> 
       <span className="headertext">  online.</span><br/>
      {/* <Banner
        title={`A faster & easier way to receive ${"payments"} online.`}
        subtitle="Lorem ipsum v dolor sit, amet consectetur adipisicing consectetur perspiciatis officia dolorum consectetur officia debitis."
      /> */}
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
