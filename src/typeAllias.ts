//Type Allias: Declaring type for further use

type strOrNum = string | number;

type userType = { name: string; age: number };

//Function-1
// with type allias:

const myFunc1 = (id: strOrNum, user: userType) => {
  console.log(`User Id is ${id}. Name is ${user.name} and age is ${user.age}`);
};

// without type allias:

const myFunc1Old = (
  id: string | number,
  user: { name: string; age: number }
) => {
  console.log(`User Id is ${id}. Name is ${user.name} and age is ${user.age}`);
};

//Function-1
// with type allias:

const myFunc2 = (user: userType) => {
  console.log(`Hello ${user.name}! Your age is ${user.age}`);
};

// without type allias:

const myFunc2Old = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.name}! Your age is ${user.age}`);
};
