const results: Record<number, number> = {}

function expensiveFunction(y: number) {
    if (results[y]) {
        console.log(`return for param ${y} cached value ${results[y]}`)
        return results[y];
    }
    const val = y * y * y * y;
    results[y] = val;
    return val;
}

function memo(fun: (a: number) => number) {
   const data: Record<number, number> = {}
   
   return (a: number) => {
    console.log(data[a])
      if (data[a] !== undefined) {
        console.log('return from memo');
        return data[a]
      }
      const val = fun(a);
      data[a] = val;
      console.log(data)
      return val;
   }
}

// console.log(expensiveFunction(10))
// console.log(expensiveFunction(10))
// console.log(expensiveFunction(10))

const square = (a: number) => a * a;
const m = memo(square);
console.log(m(3))
console.log(m(9))
console.log(m(3))