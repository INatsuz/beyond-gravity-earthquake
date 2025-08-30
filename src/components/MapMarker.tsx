import {Map, Marker} from "mapbox-gl";
import {type RefObject, useEffect, useRef} from "react";

type MapMarkerProps = {
	coordinates: [number, number, number];
	map: RefObject<Map | null>;
	isActive: boolean;
}

export default function MapMarker(props: MapMarkerProps) {
	const markerRef = useRef<Marker>(null);

	useEffect(() => {
		if (props.map.current) {
			markerRef.current = new Marker({color: props.isActive ? "red" : undefined}).setLngLat([props.coordinates[0], props.coordinates[1]]).addTo(props.map.current);
		}

		return () => {
			if (markerRef.current) markerRef.current.remove();
		};
	}, [props.isActive]);

	return null;
};
