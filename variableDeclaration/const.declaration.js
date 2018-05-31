//console.log(name); // it will return refernce error 
//const name; // it must be initialization . it doesn't initialzise it will throw missing initializer error
const name = "global const value";
console.log(name);

let val4 = "ragu"

if(val4 === "ragu"){
    const name = "if block const value";
    console.log(name);
}
console.log(name);

function testVar(){
    const name = "testVar block value";
    console.log(name);

}
console.log(name); //it will return global const value
testVar();
console.log(name); //it will return global const value

const officeTest = {}; // this declaration is correct
// const off = office;
const office = {name: ""};
office.name= "testing const";
const off = office; // this declaration is correct
off.office = {age: 25}; // this declaration is correct
console.log(office);
off.age = 25;  // this declaration is correct
off.age = 2;
console.log(off);

