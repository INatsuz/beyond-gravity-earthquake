import type {Feature} from "../types/Feature.ts";
import EarthquakeListItem from "./EarthquakeListItem.tsx";

type EarthquakeListProps = {
	earthquakes: Feature[] | undefined;
	onClick: (earthquake: Feature) => void;
	loadMore: () => void;
	activeEarthquake: string;
}

export default function EarthquakeList(props: EarthquakeListProps) {
	return (
		<>

			<ul className="earthquake-list h-100 p-0 overflow-y-scroll">
				<li>
					<div className="border-bottom py-4 bg-light">
						<h5 className="text-center">Recent Earthquakes</h5>
						<p className="text-center m-0">Showing {props.earthquakes?.length}</p>
					</div>
				</li>
				{
					props.earthquakes && props.earthquakes.map((item) => (<EarthquakeListItem item={item} onClick={props.onClick} isActive={item.id === props.activeEarthquake}/>))
				}

				{
					props.earthquakes &&
					props.earthquakes.length < 200 &&
					<li className="border-bottom text-center" role="button" onClick={() => props.loadMore()}>Click to Load More</li>
				}
			</ul>
		</>
	);
}
