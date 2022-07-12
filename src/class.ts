class Employee {
  name: string;
  age: number;
  position: string;

  constructor(n: string, a: number, p: string) {
    this.name = n;
    this.age = a;
    this.position = p;
  }

  Task() {
    console.log(
      `The employee ${this.name} for the position of ${this.position}`
    );
  }
}

const rahim = new Employee("Rahim Uddin", 45, "Full Stack Developer");
