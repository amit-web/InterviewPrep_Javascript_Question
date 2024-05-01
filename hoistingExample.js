// Hoisting is  a phenomena in which we can access the variable and function even before the initialization.
// How it behave using Arrow funtion and Normal function and normal function assigned to variable.

Example1.
getName()  //output => somehow it will manage to get the output  Ans===> Amit kumar Mehta
console.log(getName) //output => it will have whole function;
console.log(x)  //output => undefined;
var x = 8;
function getName(){
    console.log("Amit kumar Mehta")
}
Example2.
getName()  //output => somehow it will manage to get the output  Ans===> Amit kumar Mehta
console.log(getName) //output => it will have whole function;
console.log(x)  //output => X is not defined it is not present in the memory;

function getName(){
    console.log("Amit kumar Mehta")
}
Example3.
getName()  //output => gateName is not a function it behave like a varibale in memory allocation phase in execution context it will get undefined  Ans===> Amit kumar Mehta
console.log(getName) //output => it will have whole function;
console.log(x)  //output => X is not defined it is not present in the memory;


var getName = ()=>{
    console.log("Amit kumar Mehta")
}
//Here getName2 is also behaving like varibale  only we  will write normal function then only we will get whole function present when we print in the code.
var getName2 = function (){
    console.log("Amit kumar Mehta")
}
