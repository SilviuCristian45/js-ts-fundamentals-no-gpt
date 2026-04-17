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


export {};

declare global {
  interface Array<T> {
    silviuMapV2<U>(transformer: (item: T) => U): U[];
  }
}

Array.prototype.silviuMapV2 = function<T, U> ( func: (item: T) => U) : U[] {
	const result: U[] = [];
    for (let i = 0; i < this.length; i++) {
        result.push(func(this[i]));
    }
    return result;
}



const s: MyArray<number> = new MyArray([3,4,5])
console.log(s.silviuMap( num => num ** 2));

const s2 = [3,4,5]
console.log(s2.silviuMapV2( num => num ** 3));