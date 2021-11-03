import React from "react";
import QuickSetup from './QuickSetup'
import HenestPricing from './HenestPricing'
import AllLeadingpayment from './AllLeadingpayment'
import FeesRange from "../FeesRange"; 


export default function PaymentCategories() {

  return (
    <div className="container my-5">
      <div className="row">
       
        <QuickSetup/>
       

        <HenestPricing/>
       
        <AllLeadingpayment/>
      </div>
       <div>
         
        <FeesRange/>

         </div>
     
  

    </div>
  );
}
