import type {Feature} from "../types/Feature.ts";
import EarthquakeListItem from "./EarthquakeListItem.tsx";
import {List} from "react-window";

type EarthquakeListProps = {
	earthquakes: Feature[] | undefined;
	onClick: (earthquake: Feature) => void;
	loadMore: () => void;
	activeEarthquake: string;
}

export default function EarthquakeList(props: EarthquakeListProps) {
	return (
		<div className="h-100 overflow-y-hidden d-flex flex-column">
			<div className="border-bottom py-4 bg-light">
				<h5 className="text-center">Recent Earthquakes</h5>
				<p className="text-center m-0">Showing {props.earthquakes?.length}</p>
			</div>
			<div className="flex-fill overflow-y-hidden">
				{
					props.earthquakes &&
					<List
						rowHeight={98}
						rowComponent={EarthquakeListItem}
						rowProps={
							{
								items: props.earthquakes,
								onClick: props.onClick,
								activeEarthquake: props.activeEarthquake
							}
						}
						rowCount={props.earthquakes?.length}
					/>
				}
			</div>
			{
				props.earthquakes &&
				props.earthquakes.length < 200 &&
				<div className="py-2 bg-light border-bottom border-top text-center" role="button" onClick={() => props.loadMore()}>Click to Load More</div>
			}
		</div>
	);
}
