//undefined  is  a special keyword like placeholder placed in a memomry even before initialization of the variable;
console.log(b)// output is undefined;
var b = 8;
var a;
console.log(a);//output will be undefined
console.log(x)//We are not allocating any memory to this x so it will give error x is not defined;



//js is loosely type language(also known as weekly type language)  (it doesn't attached to any specific data type);
//Example;
var a;
console.log(a);//output---->undefined
a=10;
console.log(a); //output---->10
a="hello World";
console.log(a)  //output---->hello World
