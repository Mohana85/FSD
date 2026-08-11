"use strict";
var Student;
(function (Student) {
    Student.name = "Mohana";
    Student.age = 18;
    function display() {
        console.log("Name:", Student.name);
        console.log("Age:", Student.age);
    }
    Student.display = display;
})(Student || (Student = {}));
Student.display();
