# 100 JavaScript & TypeScript Challenges for Backend Developers

This repository is dedicated to reclaiming core JS/TS skills by solving 100 fundamental to advanced problems without the help of AI.

## 🚀 Progress
- [ ] Section I: JavaScript Fundamentals (0/20)
- [ ] Section II: Asynchrony & Event Loop (0/15)
- [ ] Section III: TypeScript Basics (0/20)
- [ ] Section IV: Advanced TypeScript & Generics (0/20)
- [ ] Section V: Node.js & Architecture (0/15)
- [ ] Section VI: Logic & Algorithms (0/10)

---

## 🛠 Setup Instructions

To run these challenges locally, follow these steps:

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm**
- **WSL2** (If you are on Windows, highly recommended)

### 2. Installation
Clone the repository and install the development dependencies (needed for TypeScript execution):

```bash
git clone <your-repo-url>
cd js-ts-fundamentals
npm install
```

### 3. Running code

- For JS
``` node solutions/001-scope-loops.js ```

- For TS
```npx ts-node solutions/036-types-interfaces.ts```

## I. JavaScript Fundamentals (Scope, Closures, Prototypes)
1. **Scope in Loops:** Demonstrate the difference between `var`, `let`, and `const` inside a `for` loop containing a `setTimeout`.
2. **Private Counter:** Create a function using **closures** to encapsulate a private variable (counter).
3. **Hoisting:** Write code showing the difference in hoisting between a `function declaration` and a `function expression`.
4. **Memoization:** Implement a `memoize` function that caches the results of expensive function calls.
5. **The `this` Keyword:** Write 4 examples showing `this` in: global scope, object method, arrow function, and using `.bind()`.
6. **Prototypes:** Create a constructor function and add a method to its `.prototype`.
7. **Pseudo-Inheritance:** Simulate class inheritance using only functions and `Object.create`.
8. **Deep Clone:** Implement a `deepClone(obj)` function without using `JSON.parse/stringify`.
9. **Coercion:** Explain through code why `[] == ![]` is true.
10. **IIFE:** Write an Immediately Invoked Function Expression and explain its modern-day relevance.
11. **Currying:** Implement a `curry` function that transforms `f(a, b, c)` into `f(a)(b)(c)`.
12. **Event Loop Order:** Create a script with `console.log`, `setTimeout(0)`, `Promise.resolve`, and `process.nextTick`. Predict the order.
13. **WeakMap:** Demonstrate a memory-efficient way to store metadata for an object using `WeakMap`.
14. **Custom Map:** Implement `Array.prototype.myMap` from scratch.
15. **Custom Reduce:** Implement `Array.prototype.myReduce` from scratch.
16. **String Reverse:** Reverse a string without using `.reverse()`.
17. **Empty Object Check:** Write a utility to check if an object is empty `{}` (fastest way).
18. **Variable Shadowing:** Demonstrate what shadowing is and how it affects scope.
19. **Debounce:** Implement a `debounce` function for high-frequency events.
20. **Throttle:** Implement a `throttle` function.

## II. Asynchrony (Promises, Async/Await)
21. **Promisification:** Convert a callback-based function (like `fs.readFile`) into a Promise-based one.
22. **Promise.all:** Implement your own version of `Promise.all`.
23. **Promise.race:** Implement your own version of `Promise.race`.
24. **Unhandled Rejection:** Write code that triggers an unhandled promise rejection and handle it globally.
25. **Retry Logic:** Create a function that retries a failed fetch request up to 3 times with a delay.
26. **Promise.allSettled:** Explain the difference from `Promise.all` via code.
27. **Concurrency Limiter:** Write a function that executes 10 promises but only 2 at a time.
28. **Generators:** Create an infinite unique ID generator using `function*`.
29. **Async Iteration:** Use `for await...of` to consume an async generator.
30. **AbortController:** Write a fetch request that times out after 2 seconds using `AbortController`.
31. **Microtasks vs Macrotasks:** Write a code snippet that proves microtasks run before macrotasks.
32. **Streams:** Create a simple readable stream that emits numbers 1 to 10.
33. **Promisified Sleep:** Write a one-liner `sleep` function using `setTimeout`.
34. **Error Handling:** Compare `try/catch` in `async/await` vs `.catch()` in promise chains.
35. **Sequential vs Parallel:** Show code for running 3 independent async tasks sequentially vs in parallel.

## III. TypeScript Basics
36. **Types vs Interfaces:** Define the same object using both. Add a new field to the interface using declaration merging.
37. **Unknown vs Any:** Write a function accepting `unknown` and use a type guard to Narrow it to a string.
38. **Enums vs Const Objects:** Implement a "Status" enum and an equivalent `as const` object. Discuss differences.
39. **Readonly:** Use `Readonly<T>` and the `readonly` keyword on a class property.
40. **Tuples:** Define a `Response` tuple as `[data: object, status: number]`.
41. **Function Overloading:** Create a function `makeDate` that takes either 1 timestamp or 3 numbers (Y, M, D).
42. **Intersection Types:** Combine `User` and `Permissions` types.
43. **Type Assertions:** Show a case where `as` is necessary and one where it is dangerous.
44. **Literal Types:** Create a `Direction` type: `'North' | 'South' | 'East' | 'West'`.
45. **NonNullable:** Use the `NonNullable<T>` utility type on a type that includes `null | undefined`.
46. **Optional Properties:** Define an interface for `Config` where some keys are optional.
47. **Keyof Operator:** Write a function that gets a value from an object using `keyof T`.
48. **Non-null Assertion:** Demonstrate the use of the `!` operator.
49. **Index Signatures:** Create a dictionary type where keys are strings and values are numbers.
50. **Declaration Merging:** Merge two interfaces with the same name.
51. **Pick Utility:** Create a `UserPreview` type from a `User` interface using `Pick`.
52. **Omit Utility:** Create a `UserWithoutPassword` type using `Omit`.
53. **Record Utility:** Create a map of `Record<string, User>`.
54. **ReturnType:** Extract the return type of an existing function using `ReturnType<T>`.
55. **Discriminated Unions:** Create a `Shape` union (Circle | Square) and use a `switch` to calculate area.

## IV. Advanced TypeScript & Generics
56. **Generic Identity:** Write a generic `identity<T>` function.
57. **Generic Constraints:** Write a function that only accepts objects with a `.length` property.
58. **Mapped Types:** Create a type that makes all properties of an interface optional (`Partial` clone).
59. **Conditional Types:** Create a type `IsArray<T>` that returns `true` or `false`.
60. **Infer Keyword:** Write a type that extracts the type of elements inside an array.
61. **Class Decorator:** Write a `@Logger` decorator for a class.
62. **Method Decorator:** Write a `@MeasureTime` decorator for a class method.
63. **Template Literal Types:** Create a type for `padding-${'top' | 'bottom'}`.
64. **Variance:** Demonstrate covariance and contravariance in function assignments.
65. **DeepPartial:** Implement a recursive `DeepPartial<T>`.
66. **RequiredBy:** Create a utility type that makes only specific keys of an object required.
67. **Partial Implementation:** Re-implement `Partial<T>` manually.
68. **Exclude & Extract:** Show how these two utility types differ using code.
69. **ThisType:** Use `ThisType<T>` to type the `this` context in an object literal.
70. **Awaited:** Extract the underlying type of a `Promise<string[]>` using `Awaited`.
71. **Required Utility:** Re-implement `Required<T>` manually.
72. **Abstract Classes:** Create an abstract `BaseService` and extend it.
73. **Ambient Declarations:** Write a `.d.ts` file for a mock JS library.
74. **Private Fields:** Compare TS `private` vs ES `#private` at runtime.
75. **StrictOmit:** Implement an `Omit` that throws an error if the key doesn't exist.

## V. Node.js & Architecture (NestJS context)
76. **Stream Pipe:** Pipe a readable stream into a writable stream with error handling.
77. **EventEmitter:** Create a custom event emitter for a "UserRegistered" event.
78. **Buffer Manipulation:** Create a buffer from a string and convert it to Hex.
79. **Manual DI:** Implement a simple Dependency Injection container from scratch.
80. **Middleware Pattern:** Create a `Pipeline` class that executes functions in sequence.
81. **Child Process:** Use `spawn` to run a shell command and capture output.
82. **Worker Threads:** Offload a heavy Fibonacci calculation to a Worker Thread.
83. **Singleton:** Implement a thread-safe (as much as JS allows) Singleton.
84. **Validation Pipe:** Write a function that validates an object against a schema manually.
85. **Interceptors:** Create a wrapper function that logs "Before" and "After" execution.
86. **CJS vs ESM:** Show how to import a CommonJS module in an ESM file.
87. **Memory Leak:** Create a deliberate memory leak using a global array and closures.
88. **Race Conditions:** Write code where two async functions update the same variable and cause a bug.
89. **Object.freeze:** Show how `Object.freeze` behaves in "use strict" mode.
90. **Module Caching:** Demonstrate how Node.js caches modules and how to clear it.

## VI. Logic & Algorithms
91. **Palindrome:** Check if a string is a palindrome.
92. **Two Sum:** Find indices of two numbers that add up to a target.
93. **Flatten Array:** Recursively flatten a nested array.
44. **Unique Array:** Remove duplicates using `Set` and then using `.reduce()`.
95. **Anagram:** Determine if two strings are anagrams.
96. **Fibonacci:** Implement iterative vs recursive (with memoization).
97. **Deep Merge:** Merge two deeply nested objects.
98. **Chunking:** Split an array into chunks of size `N`.
99. **Pipe/Compose:** Implement `pipe(...fns)` and `compose(...fns)`.
100. **Refactor:** Take a complex `if/else` block and refactor it using a Strategy Pattern (Map or Object).