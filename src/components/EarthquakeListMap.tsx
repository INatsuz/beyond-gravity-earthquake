import {type Ref, useCallback, useEffect, useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import MapMarker from "./MapMarker.tsx";
import type {Feature} from "../types/Feature.ts";
import EarthquakeList from "./EarthquakeList.tsx";

const MAP_TOKEN = "pk.eyJ1IjoiaW5hdHN1eiIsImEiOiJjbWV4MnM1Y3cweHprMnhzaHRwZHgwdm43In0.DeSZ5BhFGAKreH-35_9M2g";

export default function EarthquakeListMap() {
	const [earthquakeData, setEarthquakeData] = useState<{ features: Feature[] }>();
	const [activeEarthquake, setActiveEarthquake] = useState<string>("");

	const mapRef = useRef<mapboxgl.Map | null>(null);
	const mapContainerRef = useRef<HTMLElement | string>("");

	const limit = useRef(20);

	useEffect(() => {
		fetchEarthquakes();

		// I would usually not include the map token in my actual code but for this scenario and for ease of setup when testing I made an exception
		mapboxgl.accessToken = MAP_TOKEN;
		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current,
			center: {lat: 39.538219, lng: -8.031428},
			zoom: 5,
			cooperativeGestures: true,
		});

		// This makes sure that when the container is resized it doesn't break the map by resizing it accordingly
		mapRef.current.on("resize", function () {
			mapRef.current?.resize();
		});

		// Removing map when unmounting the component
		return () => {
			if (mapRef.current) mapRef.current.remove();
		};
	}, []);

	// Fetch the earthquakes from USGS API
	const fetchEarthquakes = useCallback(async () => {
		try {
			// Fetch the earthquakes with the default interval of the last 30 days with an initial limit of 20
			// The limit is increase when pressing the Load More button
			const data = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=${limit.current}`)
				.then(d => d.json());

			setEarthquakeData(data);

			// Center the map on the first earthquake unless an item is already selected
			if (activeEarthquake !== "") return;
			const firstEarthquake: Feature = data.features[0];

			mapRef.current?.flyTo({
				center: [firstEarthquake.geometry.coordinates[0], firstEarthquake.geometry.coordinates[1]]
			});
		} catch (error) {
			console.error(error);
		}
	}, [activeEarthquake]);

	function onListClick(earthquake: Feature) {
		setActiveEarthquake(earthquake.id);
		mapRef.current?.flyTo({center: [earthquake.geometry.coordinates[0], earthquake.geometry.coordinates[1]]});
		(mapContainerRef.current as HTMLElement).scrollIntoView();
	}

	function loadMore() {
		limit.current += 20;
		fetchEarthquakes();
	}

	return (
		<div className="map-list-wrapper row g-0">
			<div className="col h-100">
				<EarthquakeList earthquakes={earthquakeData?.features} onClick={onListClick} loadMore={loadMore} activeEarthquake={activeEarthquake}/>
			</div>
			<div className="col-12 col-xl-9 h-100">
				<div id="map-container" ref={mapContainerRef as Ref<HTMLDivElement>}/>
				{
					earthquakeData?.features.map((item) => (
						<MapMarker map={mapRef} key={item.id} isActive={item.id === activeEarthquake} coordinates={item.geometry.coordinates}/>
					))
				}
			</div>
		</div>
	);
};
