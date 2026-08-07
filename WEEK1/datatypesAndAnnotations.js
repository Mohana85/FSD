"use strict";
let userAge = 20;
let userName = "Alice";
let isStudent = true;
console.log("Age:", userAge);
console.log("Name:", userName);
console.log("Is Student:", isStudent);
console.log("Age:", typeof userAge);
console.log("Name:", typeof userName);
console.log("Is Student:", typeof isStudent);
console.log("special datatypes");
let value = 10;
console.log("Any:", typeof value);
value = "Hello";
console.log("Any:", typeof value);
let data = "typescript";
if (typeof data === "string") {
    console.log("Unknown:", data.length);
}
function greet() {
    console.log("Hello world");
}
greet();
console.log("Annotations in typescript");
let movieTitle = "KGF";
let releaseYear = 2024;
let isBlockBuster = true;
console.log("Type inference");
let shootingStartYear = 2021;
function getMovieDetails(movieTitle, releaseYear) {
    return `${movieTitle} is a massive hit released in ${releaseYear}`;
}
let details = getMovieDetails(movieTitle, releaseYear);
console.log(details);
let leadActors = ["Yash", "srinidhi shetty"];
console.log(`leadActors:${leadActors.join(",")}`);
