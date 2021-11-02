import React from "react";
import ScuadGlobal from './ScuadGlobal'
import ScuadEntrepreneurs from './ScuadEntrepreneurs'
import ScuadOrganizations from './ScuadOrganizations'

export default function Scuad() {
  return (
    <div className="container">
      <div className="row" >
  
        <ScuadGlobal/>
   
        <ScuadEntrepreneurs/>
       <ScuadOrganizations/>
      </div>
    </div>
  );
}
