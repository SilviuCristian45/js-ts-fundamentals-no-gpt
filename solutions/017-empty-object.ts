function isObjectEmpty(obj: any): boolean {
	if (obj === null || obj === undefined) return true;
	return Object.keys(obj).length === 0
}

console.log(isObjectEmpty({}));
console.log(isObjectEmpty({a: 3}));
console.log(isObjectEmpty({w: 3}));
console.log(isObjectEmpty(null));