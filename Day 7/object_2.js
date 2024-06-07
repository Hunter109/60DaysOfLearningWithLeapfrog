// nested object 
const classInfo = {
    utsav: {
        semester: "6th",
        program: "BE Computer",
        rollNo: 43

    },
    arun: {
        semester: "7th",
        program: "BE Computer",
        rollNo: 17
    },
    ramesh: {
        semester: "6th",
        program: "BE Electrical",
        rollNo: 20

    },
    sachin: {
        semester: "7th",
        program: "BE Computer",
        rollNo: 23
    }

};
// acessing the key value pair in nested object 
console.log(classInfo.ramesh.program);
console.log(classInfo.utsav.program);
console.log(classInfo.sachin.semester);
console.log(classInfo.arun.rollNo);

// output 
// BE Electrical
// BE Computer
// 7th
// 17