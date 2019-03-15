
import React  from 'react';
  const CalculatorResult =(props)=>{
      console.log("mouni" , props);
 return (
           <div>
        <div className="result">
            <p>{props.result}</p>
        </div>
        </div>
 )
 }
   
export default CalculatorResult;