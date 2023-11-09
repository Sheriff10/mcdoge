import React from "react";

export default function Roadmap() {
   return (
      <div className="roadmap" id="roadmap">
         <div className="bg-wrap py-5">
            <div className="container py-5">
               <div className="head text-center py-3">
                  <h1>Roadmap</h1>
               </div>
               <div className="body">
                  <div className="row ">
                     {/* right */}
                     <div className="col-md-6 d-flex r-box my-4 flex-wrap  bg-dar">
                        <div className="col-lg-6  d-flex px-2 align-items-center justify-content-end px-md-5">
                           <div className="text-wrap text-dark">
                              <span>PHASE ONE</span>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="list-wrap d-flex">
                              <ul className="list-unstyled m-0">
                                 <li className="d-flex align-items-center gap-4">
                                    🐕{" "}
                                    Token launch
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕{" "}
                                    community building
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕 500
                                    holders
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     {/* left */}
                     <div className="col-md-6 d-flex l l-box my-4 flex-wrap  bg-dar">
                        <div className="col-lg-6">
                           <div className="list-wrap d-flex">
                              <ul className="list-unstyled m-0">
                                 <li className="d-flex align-items-center gap-4">
                                    🐕{" "}
                                    Callers from CT / TG
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕 1k
                                    holders
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕{" "}
                                    dextools trending
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-lg-6 d-flex lt px-2 align-items-center  bg-dar">
                           <div className="text-wrap text-dark">
                              <span>PHASE TWO</span>
                           </div>
                        </div>
                     </div>

                     {/* right */}
                     <div className="col-md-6 d-flex my-4 l-box flex-wrap  bg-dar">
                        <div className="col-lg-6 d-flex px-2 align-items-center justify-content-end px-md-5">
                           <div className="text-wrap text-dark">
                              <span>PHASE THREE</span>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="list-wrap d-flex">
                              <ul className="list-unstyled m-0">
                                 <li className="d-flex align-items-center gap-4">
                                    🐕 hit
                                    10m mc
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕 10k
                                    holders
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕{" "}
                                    party in town
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     {/* left */}
                     <div className="col-md-6 d-flex r-box l my-4 flex-wrap  bg-dar">
                        <div className="col-lg-6">
                           <div className="list-wrap d-flex">
                              <ul className="list-unstyled m-0">
                                 <li className="d-flex align-items-center gap-4">
                                    🐕 hit
                                    100m
                                 </li>
                                 <li className="d-flex align-items-center gap-4">
                                    🐕{" "}
                                    yatch party
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-lg-6 d-flex lt px-2 align-items-center  bg-dar">
                           <div className="text-wrap text-dark">
                              <span>PHASE FOUR</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
