//Custom Reduce: Implement Array.prototype.myReduce from scratch.

export {};

declare global {
   interface Array<T> {
	silviuReduce<U> (transform: (initAcc: U, item: T) => U, defaultUVal: U): U;
   }
}

Array.prototype.silviuReduce = function <T, U> (transform: (initAcc: U, item: T) => U, defaultUVal: U): U {
	let result: U = defaultUVal;
	for (let index = 0; index < this.length; index++) {
		const element = this[index];
		result = transform(result, element);
	}
	return result;
}

const p = [2,3,4]
console.log(p.silviuReduce( (acc, it) => acc + it, 0))
