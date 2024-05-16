//Let and const are hoisted and it is in temporal dead zone for the time being;
//console.log(a);// Here we are using let to decare the variable and accesing it even before initialization let and conts are hoisted and they will get seperate memory space than global we can see it in browser while debugging;
//so the time between accessing even before initialization and assigning some value to it is temporal dead zone for variable a;
console.log(k); //ReferenceError: k is not defined
let a = 20;
//var b = 30;
//Ex-1
console.log(x);//ReferenceError: Cannot access 'x' before initialization
let x = 20;

//Ex-2
let y = 30;
//let y = 90; //SyntaxError: Identifier 'y' has already been declared

//Ex-3
console.log(z); //ReferenceError: Cannot access 'z' before initialization
const z = 30;
z=50;
console.log(z)//typrError  Assignment to constant variable.

console.log(b);//SyntaxError: Identifier 'b' has already been declared.
const b = 30;
console.log(b);//SyntaxError: Identifier 'b' has already been declared.

//Ex-5
// const d; //SyntaxError: Missing initializer in const declaration
// d=300;

//Above example we can do these things due to strinct nature of variable declaration of const;
