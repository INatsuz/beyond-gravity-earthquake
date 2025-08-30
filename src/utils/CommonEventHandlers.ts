import * as React from "react";

export function onEnterPress(event: React.KeyboardEvent<HTMLElement>) {
	if (event.key !== "Enter") return;

	event.currentTarget.click();
}
