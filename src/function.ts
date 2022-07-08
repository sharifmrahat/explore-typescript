function multiply(a: number, b: number) {
  return a + b;
}

console.log(multiply(2, 3));

const myFunc = (a: string, b: number, c?: string) => {
  //here c is optional argument. also we can set default value instead of using optional parameter.
  console.log(`Name is ${a} and age is ${b}`);

  //javascript returns undefined but typescript returns void if we don't return anything.
};

console.log(myFunc("John", 45));
