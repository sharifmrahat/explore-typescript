// export class Employee {
//   constructor(
//     private name: string,
//     public age: number,
//     readonly position: string
//   ) {}

//   Task() {
//     console.log(
//       `The employee ${this.name} for the position of ${this.position}`
//     );
//   }
// }

//----------------Interfaces----------------\\

import { IsEmployee } from "./interfaces/IsEmployee.js";

export class Employee implements IsEmployee {
  constructor(
    public name: string,
    public age: number,
    readonly position: string
  ) {}

  Task() {
    console.log(
      `The employee ${this.name} for the position of ${this.position}`
    );
  }
}
