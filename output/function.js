"use strict";
function multiply(a, b) {
    return a + b;
}
console.log(multiply(2, 3));
const myFunc = (a, b, c) => {
    //here c is optional argument. also we can set default value instead of using optional parameter.
    console.log(`Name is ${a} and age is ${b}`);
    //javascript returns undefined but typescript returns void if we don't return anything.
};
console.log(myFunc("John", 45));
