type Model = {
	id: string;
	name: string;
	photo: {
		caption: string;
		formats: {
			avif: string;
			webp: string;
			jpg: string;
		};
	};
	handle: string;
	content: {
		description: string;
		title: string;
	};
	location: {
		_latitude: number;
		_longitude: number;
	};
};

export default Model;
