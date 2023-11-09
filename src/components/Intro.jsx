import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-wrap col-12 py-5">
            <div className="col-lg-6 wrap text-center mx-auto">
               <div className="socials d-flex gap-3 justify-content-center mt-5 pt-5">
                  <span className="fs-2 text-dark">
                     <FaTelegram />
                  </span>
                  <span className="fs-2 text-dark">
                     <FaTwitter />
                  </span>
               </div>
               <span className="h1">Flipping Burgers to the Moon! <br /> 🍔🚀</span>{" "}
               <br />
               {/* <span className="slogan fs-4">
                  Ai generated 🎃 <span className="text-halo">meme coin</span>
               </span> */}
               <div className="wrap d-flex flex-wrap">
                  <div className="btn-wrap col mt-3 container">
                     <button className="btn col-lg-12">
                        {" "}
                        BUY
                     </button>
                  </div>
                  <div className="btn-wrap col mt-4 container">
                     <button className="btn col-lg-12">
                        {" "}
                         Chart{" "}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
