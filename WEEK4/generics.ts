console.log("Generic variables")
let value1:any="Hello";
console.log(value1);
value1=20;
console.log(value1);
console.log("Generic functions")
function display<T>(value:T):T{
    return value;
}
console.log(display<string>("Hello"));
console.log(display<number>(100));
console.log("Generic constraints")
function displayfunction<T extends string | number>(value: T){
    console.log(value);
}
displayfunction("Hello");
display(100);