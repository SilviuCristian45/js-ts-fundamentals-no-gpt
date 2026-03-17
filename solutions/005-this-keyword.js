// //global

// var c = 5;

// //typescript wont allow me to use this in gloval scope
// console.log(this?.c ?? "Dsa")

// function append(p) {
//     if (this.h === undefined)
//         this.h = p;
//     console.log(h);
//     return p + "#";
// }


// let x = append("123")
// let y = append("456")

// const remove = () => {
//     this.h = "no data";
// }

// console.log(x);

// remove();

// console.log(this.h);

const user = {
    name: "silviu",
    greet: () => console.log("hello everyone " + this.name),
    greet2() {
        console.log(this.name)
    },
}

user.greet()
user.greet2()

const ext = user.greet;
const ext2 = user.greet2;

ext();

ext2();

//hello everyone undefined
//silviu
//hello everyone undefined
//undefined 