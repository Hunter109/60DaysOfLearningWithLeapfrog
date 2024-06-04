// ### If - ElseIf - Else Statement:
// 1. Create a program that checks if a student's exam score is A, B, C, D, or F based on the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Print the corresponding grade.

let score = 60;
if (score >= 90 && score <= 100) {
    console.log("the grade of the student is A");

} else if (score >= 80 && score <= 89) {
    console.log("the grade of the student is B");
}
else if (score >= 70 && score <= 79) {
    console.log("the grade of the student is C");
}
else if (score >= 60 && score <= 69) {
    console.log("the grade of the student is D");
}
else if (score < 60) {
    console.log("the grade of the student is F");
}