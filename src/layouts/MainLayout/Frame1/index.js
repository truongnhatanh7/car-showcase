import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const Frame1 = () => {
  const heading = useRef()
  const scrollCTA = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: {
        duration: 4.6,
        ease: "power1.in"
      } })

      tl.from(heading.current, {
        opacity: 0
      })

      tl.from(scrollCTA.current, {
        opacity: 0,
        y: -30,
        duration: 0.8
      })
      
    }, heading);
    
    return () => ctx.revert(); // cleanup
    
  }, []);
  return (
		<div className="top-[0vh] left-0 w-screen h-screen absolute">
			<div className="top-[36vh] left-1/2 -translate-x-1/2 absolute grid place-items-center h-screen`">
				<h1 className="text-5xl text-white text-center font-poppins font-semibold" ref={heading}>
					VOLVO
        </h1>
			</div>

      <div className="top-[86vh] left-1/2 -translate-x-1/2 absolute px-3 py-2 border-2 border-solid border-white opacity-90" ref={scrollCTA}>
				<h1 className="text-lg text-white text-center font-poppins uppercase" >
					scroll down to explore
        </h1>
			</div>
		</div>
	);
};

export default Frame1;
