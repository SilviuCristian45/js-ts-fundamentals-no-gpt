//Custom Map: Implement Array.prototype.myMap from scratch.

class MyArray<T> {

	private items: T[] = [];
	
	constructor(items: T[]) {
		this.items = items;
	}

	public silviuMap<U>(transformer:(item: T) => U) : U[] {
		const result: U[] = [];
		for (const element of this.items) {
			const newElem = transformer(element);
			result.push(newElem);
		}
		return result;
	}
} 

const s: MyArray<number> = new MyArray([3,4,5])
console.log(s.silviuMap( num => num ** 2));