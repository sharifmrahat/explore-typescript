"use strict";
//Type in TypeScript:
// 1. Explicit Type
// 2. Union Type
// 3. Dynamic Type or any type
// 1. Explicit Type
//Directly declare a single type like string, number, boolean, array, object.
//2: UNION Type
let a;
a = "something";
a = 4;
// a = {} we can no set the value as object as it is string or number type
//Array or Object Schema or data structure.
let arry = [];
arry.push("something", 56);
// arry.push({}) : here we can not push object in this array because it is string or number type array. this is same for an object schema.
// example:
let obj;
obj = {
    name: "something",
    age: 25,
    student: true,
    other: [],
};
//INTERESTING: In JavaScript array is an object:
let abc;
abc = ["a", 4, true]; //here we declared abc as object but assign an array but showing no error because in JavaScript array is one kind of object.
// 3: Dynamic Type or any type
let book;
book = "something";
book = 45;
book = [];
book = {};
//any type is used for rare case. no need to use Typescript if we use any type.
