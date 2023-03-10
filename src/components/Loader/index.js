import { Html, useProgress } from '@react-three/drei'

function Loader() {
  const { progress } = useProgress()
  return <Html center>
      <h1 className='text-3xl text-white'>

    {progress} % loaded
      </h1>
        </Html>
}

export default Loader;