import React, { useLayoutEffect, useRef } from "react";
const Frame4 = () => {
	return (
		<div className="top-[400vh] h-screen w-screen absolute">
			<div className="w-screen h-screen grid place-items-center">
				<div className="">
					<h3 className="text-2xl text-white font-poppins mb-2">
						created by Anh Truong
					</h3>
					<a
						href="https://www.linkedin.com/in/anh-truong-457b611ba/"
						target="_blank"
						rel="noreferrer"
						className="font-poppins text-white text-lg underline"
					>
						My Linkedin
					</a>
          <br />
					<a
						target="_blank"
						rel="noreferrer"
						href="https://sketchfab.com/3d-models/volvo-s90-recharge-free-9462b07c10244fd4a28d86846dc9e3a9"
						className="font-poppins text-white text-lg underline"
					>
						3D Volvo Car Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default Frame4;
