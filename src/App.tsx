import './App.css';
import Navbar from "./components/Navbar.tsx";
import EarthquakeListMap from "./components/EarthquakeListMap.tsx";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
	return (
		<>
			<Navbar/>
			<EarthquakeListMap/>
		</>
	);
}

export default App;
