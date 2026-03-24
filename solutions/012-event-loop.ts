//12. **Event Loop Order:** Create a script with `console.log`, `setTimeout(0)`, `Promise.resolve`, and `process.nextTick`. Predict the order.
declare var process: any;

console.log("1")

process.nextTick(() => console.log("D"));

const p = Promise.resolve( () => {
	setTimeout( () => {
		return console.log("delay3")
	}, 500)
})

p.then(v => v()).catch()

setTimeout( () => {
	console.log("2")
}, 0);


