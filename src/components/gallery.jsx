import React from "react";

export default function Gallery() {
   const img = ["/asset/g5.jpeg", "/asset/g1.jpeg"];
   return (
      <div className="gallery py-5">
         <div className="container text-center">
            <div className="head">
               <h1>TOKENOMICS</h1>
            </div>
            <div className="text-wrap fs-4">
               <span className="fw-bold h  text-dark"> Total supply:</span>{" "}
               <span>69M</span>
            </div>
            <div className="text-wrap fs-4">
               <span className="fw-bold h  text-dark"> Taxes:</span>{" "}
               <span>Buy & Sell - 2%</span>
            </div>
            <div className="text-wrap fs-4">
               <span className="fw-bold h  text-dark"> Ticker:</span>{" "}
               <span>$McD</span>
            </div>
            <div className="text-wrap fs-4">
               <span className="fw-bold h  text-dark"> Name:</span>{" "}
               <span>McDoge</span>
            </div>
         </div>
      </div>
   );
}
