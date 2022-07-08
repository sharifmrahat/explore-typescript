//Declare a signature for a function before declaring the function

//Declare Signature:
let add: (x: number, y: number) => number;

//Declare Function:
add = (a, b) => {
  return a + b;
};

//N. B: You must always maintain the signature and can not add new thing to function without changing the signature.

//Another Example:

let calculate: (p: number, q: number, r: string) => number;

calculate = (a, b, c) => {
  if (c === "plus") {
    return a + b;
  } else if (c === "minus") {
    return a - b;
  } else {
    return 0;
  }
};
