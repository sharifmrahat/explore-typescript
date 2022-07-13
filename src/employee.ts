export class Employee {
  constructor(
    private name: string,
    public age: number,
    readonly position: string
  ) {}

  Task() {
    console.log(
      `The employee ${this.name} for the position of ${this.position}`
    );
  }
}
