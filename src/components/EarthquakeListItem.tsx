import {onEnterPress} from "../utils/CommonEventHandlers.ts";
import type {Feature} from "../types/Feature.ts";
import type {RowComponentProps} from "react-window";
import * as React from "react";

type EarthquakeListItemProps = {
	items: Feature[];
	activeEarthquake: string;
	onClick: (earthquake: Feature) => void;
} & RowComponentProps;

const EarthquakeListItem = React.memo(function EarthquakeListItem(props: EarthquakeListItemProps) {
	const date = new Date(props.items[props.index].properties.time);
	const isActive = props.activeEarthquake === props.items[props.index].id;

	return (
		<div style={props.style} className={`earthquake-list-item border-bottom px-2${isActive ? ' active' : ''}`} role="button" onClick={() => props.onClick(props.items[props.index])} tabIndex={0} onKeyDown={onEnterPress}>
			<div className="d-flex justify-content-center align-items-center">
				<span>{props.items[props.index].properties.mag.toPrecision(2)}</span>
				<div className="ps-3 ps-xl-2 flex-grow-1 d-flex flex-column align-items-center">
					<h6 className="text-center">{props.items[props.index].properties.place}</h6>
					<p className="fs-6 p-0 m-0 text-center">{date.toString()}</p>
				</div>
			</div>
		</div>
	);
});

export default EarthquakeListItem;
