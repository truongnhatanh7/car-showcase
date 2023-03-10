import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const Frame1 = () => {
  const heading = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: {
        duration: 2,
        ease: "power1.inOut"
      } })

      tl.from(heading.current, {
        opacity: 0
      })
      
    }, heading);
    
    return () => ctx.revert(); // cleanup
    
  }, []);
  return (
		<div className="top-[0vh] left-0 w-screen h-screen absolute">
			<div className="top-[36vh] left-1/2 -translate-x-1/2 absolute grid place-items-center h-screen`">
				<h1 className="text-5xl text-white text-center font-poppins font-semibold" ref={heading}>
					VOLVO</h1>
			</div>
		</div>
	);
};

export default Frame1;
