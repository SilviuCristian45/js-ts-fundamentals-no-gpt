interface Count {
    increment: () => void;
    decrement: () => void;
    show: () => void;
}

function createCounter(baseValue: number = 0): Count {
   let count = baseValue;
    return {
        increment: () => count = count + 1, 
        decrement: () => count = count - 1,
        show: () => console.log(count)
    }
}

const x = createCounter(5)
const y = createCounter(12)

x.increment()
x.increment()

x.show()
y.decrement()
y.show()