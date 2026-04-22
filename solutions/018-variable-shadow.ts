//Variable Shadowing: Demonstrate what shadowing is and how it affects scope.

let n = 5; 
function a() {
    let n = 10;
    console.log(n);
}
a(); 
console.log(n);