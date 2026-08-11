"use strict";
console.log("Generic variables");
let value1 = "Hello";
console.log(value1);
value1 = 20;
console.log(value1);
console.log("Generic functions");
function display(value) {
    return value;
}
console.log(display("Hello"));
console.log(display(100));
console.log("Generic constraints");
function displayfunction(value) {
    console.log(value);
}
displayfunction("Hello");
display(100);
