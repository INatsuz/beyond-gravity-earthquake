export type Feature = {
	id: string;
	geometry: {
		coordinates: [number, number, number];
	};
	properties: {
		title: string;
		place: string;
		status: string;
		mag: number;
		time: string;
		type: string;
	};
}
