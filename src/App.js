import { ScrollControls, Scroll, Preload, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Volvo } from "./components/3DModel/Volvo";
import gsap from "gsap";
import Loader from "./components/Loader";
import MainLayout from "./layouts/MainLayout";
import LightConf from "./components/LightConf";

function App() {
	const pl1 = useRef();
	const pl2 = useRef();

	useFrame((state, delta) => {
		// const { clock } = state
		// const speed = 0.1
		// const radius = 10
		// const angle = clock.getElapsedTime() * speed;
		// const x = radius * Math.cos(angle);
		// const z = radius * Math.sin(angle);
		// test.current.position.set(x, z, 2);
		// pl2.current.position.set(-x, -z, 2);
	});

	return (
		<>
			<color args={["#000000"]} attach="background" />
			<ambientLight intensity={1} />

      <LightConf />

			<ScrollControls pages={3} damping={0.1}>
				<Volvo position={[0, -1, 0]} />
				<Sparkles
					count={100}
					scale={10}
					speed={3.5}
					size={1}
					noise={-100}
				/>
				<Preload all />
				<Scroll html>
					<MainLayout />
				</Scroll>
			</ScrollControls>
		</>
	);
}

export default App;
