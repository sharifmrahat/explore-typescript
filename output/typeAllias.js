"use strict";
//Type Allias: Declaring type for further use
//Function-1
// with type allias:
const myFunc1 = (id, user) => {
    console.log(`User Id is ${id}. Name is ${user.name} and age is ${user.age}`);
};
// without type allias:
const myFunc1Old = (id, user) => {
    console.log(`User Id is ${id}. Name is ${user.name} and age is ${user.age}`);
};
//Function-1
// with type allias:
const myFunc2 = (user) => {
    console.log(`Hello ${user.name}! Your age is ${user.age}`);
};
// without type allias:
const myFunc2Old = (user) => {
    console.log(`Hello ${user.name}! Your age is ${user.age}`);
};
