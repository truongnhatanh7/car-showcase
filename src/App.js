import { ScrollControls, Scroll, Preload, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useLayoutEffect, useRef } from "react"
import { Volvo } from "./components/Volvo";
import gsap from "gsap";
import Loader from "./components/Loader";

function App() {

  const test = useRef();

  useFrame((state, delta) => {
    // console.log(delta);
    console.log(test.current);
    test.current.position.y += delta * 1.5
  })

  return (
    <>
    <color args={["#000000"]} attach="background" />
        <ambientLight intensity={0.2}/>
        <pointLight ref={test} position={[0,25,0]} angle={1.3} intensity={0.8} penumbra={1} shadowBias={-0.00001} castShadow/>
    
        <ScrollControls pages={3} damping={0.1}>
          <Suspense fallback={<Loader />}>
            <Volvo position={[0,-1,0]} />
          </Suspense>
          <Sparkles
            count={100}
            scale={10}
            speed={3.5}
            size={1}
            noise={-100}
          />
          <Preload all />
          <Scroll html>
            <div className="top-[0vh] left-0 w-screen h-screen absolute border border-white">
              <div className="top-[40vh] left-1/2 -translate-x-1/2 absolute grid place-items-center h-screen`">
                <h1 className="text-3xl text-white tracking-wider font-poppins">
                  VOLVO
                </h1>
              </div>
            </div>

            <div className="top-[100vh] absolute border border-white">
              <h1 className="text-3xl text-white m-auto font-poppins">
                INCREDIBLE PERFORMANCE
              </h1>
            </div>

            <div className="top-[200vh] absolute border border-white">
              <h1 className="text-3xl text-white font-poppins">
                Second
              </h1>
            </div>
          </Scroll>
        </ScrollControls>
    </>
  )
}

export default App
