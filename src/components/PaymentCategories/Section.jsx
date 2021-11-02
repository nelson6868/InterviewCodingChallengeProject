import React from "react";

import QuickSetup from '../PaymentCategories/QuickSetup'
import HenestPricing from '../PaymentCategories/HenestPricing'
import AllLeadingpayment from '../PaymentCategories/AllLeadingpayment'
import FeesRange from "../FeesRange"; 



export default function Section() {
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
