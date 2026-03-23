const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        current: () => count
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.current()); //2