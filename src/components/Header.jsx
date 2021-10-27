import React from "react";
import Banner from "./Banner";

export default function Header() {
  return (
    <div className="container">
      <hr />
     <span style={{fontSize: '35px',fontWeight:"bold",color:"#393655"}}> A faster & easier<br/>
       way to receive</span><br/>
      <span style={{backgroundColor:"#ddf6ff", textDecoration:"underline", textDecorationColor:"#b6d7ff",textDecorationStyle:"solid" ,height:"2rem",fontSize:"35px",color:"#1570fd", fontWeight:"bold"}}> payments</span> <span>online.</span>
      {/* <Banner
        title={`A faster & easier way to receive ${"payments"} online.`}
        subtitle="Lorem ipsum v dolor sit, amet consectetur adipisicing consectetur perspiciatis officia dolorum consectetur officia debitis."
      /> */}
      <hr />
    </div>
  );
}
