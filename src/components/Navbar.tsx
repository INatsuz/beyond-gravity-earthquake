import {onEnterPress} from "../utils/CommonEventHandlers.ts";

export default function Navbar() {
	function onTopClick() {
		window.scrollTo(0, 0);
	}

	function onMapIconClick() {
		document.getElementById("map-container")?.scrollIntoView();
	}

	return (
		<>
			<nav className="navbar bg-body-tertiary shadow-sm fixed-top">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">BG Earthquake Tracker</span>
					<div>
						<i className="bi bi-arrow-up-circle fs-5 navbar-icon me-2" tabIndex={0} role={"button"} onKeyDown={onEnterPress} onClick={onTopClick}></i>
						<i className="bi bi-map fs-5 navbar-icon" role={"button"} tabIndex={0} onKeyDown={onEnterPress} onClick={onMapIconClick}></i>
					</div>
				</div>
			</nav>
		</>
	)
}
