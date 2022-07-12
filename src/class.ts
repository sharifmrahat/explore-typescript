class Employee {
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

const rahim = new Employee("Rahim Uddin", 45, "Full Stack Developer");

const employees: Employee[] = [];

employees.push(rahim);

//ACCESS Modifier
// 1. Public 2. Private 3. Readonly
// By default access modifier is public.

// rahim.name = 'Karim Uddin' // we can not access the name as it is private,
rahim.age = 34; // we can access the age as it is public

//Readonly access modifier can be access but can not be change or modify.
