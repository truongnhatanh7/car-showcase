import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const data = [
	{
		title: "Reduce tailpipe emissions",
		description:
			"Our mild hybrids recover energy produced when braking and store it in a 48V battery. When this energy is used, fuel consumption and tailpipe emissions are both reduced.",
	},
	{
		title: "Mobility refined",
		description:
			"The S90 mild hybrid has been engineered to deliver smooth take-offs and refined acceleration, making both city and highway journeys more refined.",
	},
	{
		title: "Fuel savings",
		description:
			"Every drop of fuel saved helps – and in our mild hybrids, you enjoy lower fuel consumption without experiencing performance compromises.",
	},
];

const Frame3 = () => {

	return (
		<div className="top-[200vh] h-screen w-screen absolute">
			<div className="w-screen h-screen grid place-items-center">
				<div className="lg:w-[50%] w-[90%] h-fit flex-wrap lg:flex-nowrap flex justify-center gap-2 lg:gap-4">
					{data.map((card, index) => (
						<div
							key={card.title + index}
							className="flex-1 basis-full border-2 border-solid border-white font-poppins p-4 bg-[rgba(0,0,0,0.5)] relative
                  before:contents-[''] before:h-1 before:w-[50%] before:absolute before:bottom-3 before:right-2 before:bg-white
                "
							ref={card}
						>
							<h2 className="lg:text-lg text-blue-500 font-semibold mb-4 lg:mb-0">
								{card.title}
							</h2>
							<p className="lg:text-lg text-gray-200 hidden lg:block lg:mb-6">
								{
									card.description
								}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Frame3;
