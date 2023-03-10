import { Html, useProgress } from "@react-three/drei";

function Loader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<span class="loader"></span>
      <h1 className="text-xl text-center text-white font-poppins">
        {progress.toFixed(2) + "%"}
      </h1>
		</Html>
	);
}

export default Loader;
