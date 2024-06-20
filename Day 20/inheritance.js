class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // using super calling the parent class constructor
        this.grade = grade;
    }

    displayInfo() {
        super.displayInfo(); //using super calling the parent class constructor
        console.log(`Grade: ${this.grade}`);
    }
}
const student1 = new Student("Utsav Wagle", 22, 75);
student1.displayInfo();
