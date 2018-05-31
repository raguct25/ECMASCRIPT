console.log(val1); // return to undefined
var val1; // without initialization
val1 = "global scope";
console.log(val1);
var val1 = "Redeclare global scope";
console.log(val1);
var val3 = "ragu";
var val4 = "ragu"
//console.log(val2); it doesnot work throw reference error val2 declare in inside the function

if(val3 === "ragu"){
val1 = "first if block global scope";
}
if(val4 === "ragu"){
val1 = "second if block global scope";
}

function testVar(){
    var val2 = "local scope"; // this variable only access in the function only doesn't access outside
    var val1 = "val1 declare local scope";
    console.log(val2);
    console.log(val1);

}
testVar();
console.log(val1);



