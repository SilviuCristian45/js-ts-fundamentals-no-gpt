function deepClone(obj: any): any {
	console.log('Cloning:', obj);
	if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || obj === null || obj === undefined) {
		return obj; // Primitive types are returned as is
	}

	if (Array.isArray(obj)) {
		return obj.map(item => deepClone(item)); // Recursively clone each item in the array
	}

	if(typeof obj === 'object') {
		const clonedObj: any = {};
		for (const key in obj) {
			clonedObj[key] = deepClone(obj[key]);
		}
		//se intoarce din recursivitate aici
		return clonedObj;
	}
}

const dev = {
    name: "Silviu",
    skills: ["Node", "Nest"],
    address: {
        city: "Bucharest",
        coords: { lat: 44.4, lng: 26.1 }
    }
};



console.log(deepClone(dev)); // Should output a deep-cloned object