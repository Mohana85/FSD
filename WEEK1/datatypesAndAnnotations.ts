let userAge=20;
let userName="Alice";
let isStudent=true;
console.log("Age:",userAge);
console.log("Name:",userName);
console.log("Is Student:",isStudent);
console.log("Age:",typeof userAge);
console.log("Name:",typeof userName);
console.log("Is Student:",typeof isStudent);

console.log("special datatypes");
let value:any = 10;
console.log("Any:",typeof value);
value="Hello";
console.log("Any:",typeof value);
let data:unknown="typescript";
if (typeof data==="string") {
    console.log("Unknown:",data.length);
}
function greet():void {
    console.log("Hello world");
}
greet();

console.log("Annotations in typescript");
let movieTitle:string="KGF";
let releaseYear:number=2024;
let isBlockBuster:boolean=true;
console.log("Type inference");
let shootingStartYear=2021;

function getMovieDetails(movieTitle:string,releaseYear:number):string{
    return `${movieTitle} is a massive hit released in ${releaseYear}`;
}
let details:string=getMovieDetails(movieTitle,releaseYear);
console.log(details);

let leadActors:string[]=["Yash","srinidhi shetty"];
console.log(`leadActors:${leadActors.join(",")}`);




