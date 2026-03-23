console.log('--- Strange Coercion ---');
const a: any = false;
console.log( a == 0 ? "True" : "False" );
console.log( a === 0 ? "True" : "False" );

const b: any = "";
console.log( b == 0 ? "True" : "False" );
console.log( b === 0 ? "True" : "False" );

const c: any = null;
console.log( c == 0 ? "True" : "False" );
console.log( c === 0 ? "True" : "False" );

const d: any = null;
console.log( d == undefined ? "True" : "False" );
console.log( d === undefined ? "True" : "False" );

const e: any = null;
console.log( e == false ? "True" : "False" );
console.log( e === false ? "True" : "False" );