// implementation of the this keyword in object method 
//function inside the object is called method 
const result = {
    math: 95,
    science: 88,
    english: 90,
    nepali: 85,
    computer: 99,
    showMark() {
        console.log(`mark in the math subject is ${this.math}`);
        console.log(`mark in the science subject is ${this.science}`);
        console.log(`mark in the english subject is ${this.english}`);
        console.log(`mark in the nepali subject is ${this.nepali}`);
        console.log(`mark in the computer subject is ${this.computer}`);
    },
    // using this keyword in object function 
    getPercentange() {
        let total = (this.math + this.science + this.english + this.nepali + this.computer)
        let percentange = (total / 5);
        console.log(`the percentage of the student is ${percentange}%`);
    }

}
result.showMark();
result.getPercentange();