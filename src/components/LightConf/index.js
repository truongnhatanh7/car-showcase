import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const LightConf = () => {
	const pl1 = useRef();
	const pl2 = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(
			() => {
				const tl = gsap.timeline({
					defaults: {
						duration: 2.5,
						ease: "power4.in",
					},
				});

				tl.from(pl2.current.position, {
					x: 10 * Math.cos(180),
					y: 10 * Math.sin(180),
					z: 0,
				}, 0);
        tl.from(pl2.current, {
					intensity: 0
				}, 0);
			},
			pl1,
			pl2
		);

		return () => ctx.revert(); // cleanup
	}, []);

	return (
		<>
			{/* 
			<pointLight
				ref={pl1}
				position={[0, 25, 0]}
				angle={1.3}
				intensity={1}
				penumbra={1}
				shadowBias={-0.00001}
				castShadow
			/> */}
			<pointLight
				color={"white"}
				ref={pl2}
				position={[0, 90, 0]}
				angle={1.3}
				intensity={2}
				penumbra={1}
				castShadow
			/>
		</>
	);
};

export default LightConf;
