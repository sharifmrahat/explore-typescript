export class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Task() {
        console.log(`The employee ${this.name} for the position of ${this.position}`);
    }
}
