class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    studentDetail() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }

    updateGrade(newGrade) {
        this.grade = newGrade;
    }

    hasPassed() {
        if (this.grade >= 60) {
            console.log(`${this.name} has passed.`);
        } else {
            console.log(`${this.name} has not passed.`);
        }
    }
}

const student1 = new Student("utsav wagle", 20, 75);

student1.studentDetail();

student1.updateGrade(85);

student1.studentDetail();

student1.hasPassed();

const student2 = new Student("hunter xd", 22, 55);

student2.studentDetail();
student2.hasPassed();
