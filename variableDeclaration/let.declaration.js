//console.log(val1); // return to reference error
let val1; // without initialization
val1 = "global scope";
console.log(val1);
// let val1 = "Redeclare global scope"; // redeclare doesn't work
let val3 = "global let variable";
let val4 = "ragu"
//console.log(val2); it doesnot work throw reference error val2 declare in inside the function

if(val3 === "global let variable"){
let val1 = "first if block global scope";
console.log(val1);
console.log(val3);// return to val3 value
}

if(val4 === "ragu"){
let val1 = "second if block global scope";
console.log(val1);
}

// console.log(val2);

function testVar(){
    let val2 = "local scope"; // this variable only access in the function only doesn't access outside
    val1 = "val1 declare local scope";
    console.log(val2);
    console.log(val1);
    console.log(val3);// return to val3 value

}
console.log(val1);//access to outside let variable
testVar();
console.log(val1);//access to testVar val1 variable dispalyed
console.log(val3);



