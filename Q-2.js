/*Q2. Write a program that grades students based on their marks.
Answer:*/

let marks = 80;

if (marks > 90) {
  console.log("A Grade");
} else if (marks >= 70 && marks <= 90) {
  console.log("B Grade");
} else if (marks >= 50 && marks < 70) {
  console.log("C Grade");
} else {
  console.log("F Grade");
}
