import {onEnterPress} from "../utils/CommonEventHandlers.ts";
import * as React from "react";
import type {Feature} from "../types/Feature.ts";

type EarthquakeListItemProps = {
	item: Feature
	isActive: boolean
	onClick: (earthquake: Feature) => void;
}

const EarthquakeListItem = React.memo(function EarthquakeListItem(props: EarthquakeListItemProps) {
	const date = new Date(props.item.properties.time);

	return (
		<li key={props.item.id} className={`border-bottom px-2${props.isActive ? ' active' : ''}`} role="button" onClick={() => props.onClick(props.item)} tabIndex={0} onKeyDown={onEnterPress}>
			<div className="d-flex justify-content-center align-items-center">
				<span>{props.item.properties.mag.toPrecision(2)}</span>
				<div className="ps-2 flex-grow-1 d-flex flex-column align-items-center">
					<h6 className="text-center">{props.item.properties.place}</h6>
					<p className="fs-6 p-0 m-0 text-center">{date.toString()}</p>
				</div>
			</div>
		</li>
	);
});

export default EarthquakeListItem;
