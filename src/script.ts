const country = "Bangladesh";
console.log("Hello");

let person = "Rahim";
console.log(person);

let age = 45;

let student: string;

student = "Karim";

//UNION Type

let a: string | number;
a = "something";
a = 4;
// a = {} we can no set the value as object as it is string or number type

//Array or Object Schema or data structure.

let arry: (string | number)[] = [];

arry.push("something", 56);

// arry.push({}) : here we can not push object in this array because it is string or number type array. this is same for an object schema.
// example:

let obj: {
  name: string;
  age: number;
  student: boolean;
  other: object;
};

obj = {
  name: "something",
  age: 25,
  student: true,
  other: [],
};
