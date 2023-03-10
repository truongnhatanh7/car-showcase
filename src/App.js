import { ScrollControls, Scroll, Preload, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Volvo } from "./components/Volvo";
import gsap from "gsap";
import Loader from "./components/Loader";
import MainLayout from "./layouts/MainLayout";

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
			<group>
				<pointLight
					ref={pl1}
					position={[0, 25, 0]}
					angle={1.3}
					intensity={1}
					penumbra={1}
					shadowBias={-0.00001}
					castShadow
				/>
        <pointLight
        color={"#eff0da"}
					ref={pl2}
					position={[0, 25, 0]}
					angle={1.3}
					intensity={1}
					penumbra={1}
					shadowBias={-0.00001}
					castShadow
				/>
			</group>

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
