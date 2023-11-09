import React from "react";

export default function Footer() {
   return (
      <div className="footer">
         <div className="bg-wrap">
         </div>
         <div className="disclaimer  py-5 text-warning" id="disclaimer">
            <div className="container">
               <span>
                  Please note that you should conduct your research and exercise
                  caution when dealing with this token. We make no guarantees
                  regarding the safety or performance of your funds.
                  Cryptocurrencies are inherently risky, and you are responsible
                  for your investment decisions. We are not liable for any
                  losses resulting from your actions ⚠️ ⚠️ ⚠️"
               </span>
            </div>
         </div>
         <div className="box fs-5">
            <div className="container d-flex flex-wrap gap-3 justify-content-between align-items-center py-5">
               <span>
                  Powered by <span className="text-halo">$MCDOGE</span>
               </span>
               <span> Company Rights Reserved</span>
               <span>
               ©
                  <span className="text-halo tt font-tha"> 2023</span>
               </span>
            </div>
         </div>
      </div>
   );
}
