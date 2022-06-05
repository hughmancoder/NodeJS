function sayHello(name) {
    console.log('hello ' + name)
}

// ES5
var func1 = function (x, y) {
    return x * y;
}
console.log(func1(3,3));
// ES6
const z = (x ,y) => x * y;
const z1 = (x ,y) => { x * y } // also valid
console.log(z(5,4));
