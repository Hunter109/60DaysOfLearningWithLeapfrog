// object literals are used to store keyed collections and complex entities
const student = {
    name: "utsav wagle",
    age: 21,
    college: "united technical college",
    city: "chitwan"
};

// acessing the value of key in object using the dot operator
console.log(student.name);
console.log(student.age);
console.log(student.college);
console.log(student.city);

// adding new key value pair in object 
student.university = "Pokhara University";

// updating the existing value of key 
student.age = 22;

//prtinting object 
console.log(student)

// deleting the key value pair of the object 
delete student.city

