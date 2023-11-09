import React, { useEffect, useRef, useState } from "react";

export default function About() {
   const glassRef = useRef();
   const imgWrapRef = useRef();
   const [isGlassIntersecting, setIsGlassIntersecting] = useState(false);
   const [isImgWrapIntersecting, setIsImgWrapIntersecting] = useState(false);

   useEffect(() => {
      const glassObserver = new IntersectionObserver(
         ([entry]) => {
            setIsGlassIntersecting(entry.isIntersecting); // Trigger when 30% of the element is visible
         },
         { threshold: 0.3 }
      );

      const imgWrapObserver = new IntersectionObserver(([entry]) => {
         setIsImgWrapIntersecting(entry.isIntersecting);
      });

      if (glassRef.current) {
         glassObserver.observe(glassRef.current);
      }

      if (imgWrapRef.current) {
         imgWrapObserver.observe(imgWrapRef.current);
      }

      return () => {
         if (glassRef.current) {
            glassObserver.unobserve(glassRef.current);
         }

         if (imgWrapRef.current) {
            imgWrapObserver.unobserve(imgWrapRef.current);
         }
      };
   }, []);

   return (
      <div className="about py-5" id="about">
         <div className="bg-wrap">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-12 mb-3">
                     <div
                        className={`text-wrap glass ${
                           isGlassIntersecting ? "slide-in" : ""
                        }`}
                        ref={glassRef}
                     >
                        <span className="h"> ABOUT McDoge</span> <br />
                        <span className="text-light">
                           McDoge is a lighthearted meme coin inspired by
                           the famous "Doge" meme and the fast-food chain
                           McDonald's. Its community-driven spirit thrives on
                           combining the fun of internet culture with the
                           ambition to reach the "moon."
                        </span>{" "}
                        <br /> <br />
                        <span className="text-light">
                           McDoge fosters a welcoming and inclusive
                           environment where meme enthusiasts, cryptocurrency
                           aficionados, and those new to the space can come
                           together. Its community actively participates in meme
                           contests, charity initiatives, and other fun events,
                           making it more than just a cryptocurrency but a
                           gathering place for like-minded individuals. The
                           project's lighthearted and friendly approach to
                           crypto has attracted a diverse group of supporters
                           who enjoy the fusion of humor, financial
                           possibilities, and the exciting journey to the moon.
                        </span>
                     </div>
                  </div>
                  <div className={`col-lg-12 zuki mb-3 `}>
                     <div
                        className={`img-wrap d-flex gap-3 flex-wrap justify-content-center  text-center ${
                           isImgWrapIntersecting ? "slide-in" : ""
                        }`}
                        ref={imgWrapRef}
                     >
                        <img
                           src="/asset/abt.png"
                           alt="Kuzuki"
                           className="img-fluid"
                        />
                        <img
                           src="/asset/abt2.png"
                           alt="Kuzuki"
                           className="img-fluid"
                        />
                        <img
                           src="/asset/abt3.png"
                           alt="Kuzuki"
                           className="img-fluid"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
