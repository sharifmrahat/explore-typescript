"use strict";
class Employee {
    constructor(n, a, p) {
        this.name = n;
        this.age = a;
        this.position = p;
    }
    Task() {
        console.log(`The employee ${this.name} for the position of ${this.position}`);
    }
}
const rahim = new Employee("Rahim Uddin", 45, "Full Stack Developer");
