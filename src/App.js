import {
	ScrollControls,
	Scroll,
	Preload,
	Sparkles,
	Ring,
	Tube,
	Torus,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Volvo } from "./components/3DModel/Volvo";
import gsap from "gsap";
import Loader from "./components/Loader";
import MainLayout from "./layouts/MainLayout";
import LightConf from "./components/LightConf";
import {
	Bloom,
	ChromaticAberration,
	EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

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
			<EffectComposer>
				<Bloom
					blendFunction={BlendFunction.ADD}
					intensity={0.1}
					width={1000}
					height={1000}
					kernelSize={4}
					luminanceThreshold={0.55}
					luminanceSmoothing={0.055}
				/>
				<ChromaticAberration
					blendFunction={BlendFunction.NORMAL}
					offset={[0.0005, 0.0003]}
				/>
			</EffectComposer>

			<ScrollControls pages={5} damping={0.1}>
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
