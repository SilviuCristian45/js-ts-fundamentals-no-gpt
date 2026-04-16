//WeakMap: Demonstrate a memory-efficient way to store metadata for an object using WeakMap.

const metadata = new WeakMap();
const obj = { name: "t2" };
metadata.set(obj, { created: new Date(), description: "This is a sample object." });

console.log(metadata.get(obj)); // Output: { created: ..., description: "This is a sample object." }