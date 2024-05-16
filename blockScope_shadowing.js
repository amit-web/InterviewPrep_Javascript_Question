{
    //this is block;
    //or compound statements;
    //var a = 10;
    //console.log(a);
}

//if(true)//output --> syntaxerror because if expect single statement here;
// if(true) true;//perfectly valid statements;

// but for multiple statement we are usig block( which is curly braces) so that   js treat that in single statement;
// so we are writing code in block(with multiple statements) where js is expexting single statement;
//Need block to write multiple statements;



// How things work in block : and scope of block;
//Hoisting

//Example-1;

{
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(a); //output-->10
        console.log(b);//output-->20
        console.log(c);//output-->30

}
console.log(a);//output-->10
//console.log(b);//output ---> refranceError-- b is not defined;
//console.log(c);//output ---> refranceError-- b is not defined;

// diffrent memory allocation happens for block scope variable and also for let and const diffrent memory allocation happen when they are hoisted;


//Example-2; Shadowing... illegal shadowing decaring var and let and const
//ex-a
var a = 10;
{
    var a = 40;
   // console.log(a); //output-->40

}
//console.log(a); //output-->40

//ex-b
var b = 10;
{
    let b = 40;
    //console.log(b); //output-->40

}
//console.log(b);//output-->10
//ex-c

let c = 100;
{
    //Illegal Shadowing;
    //var c = 400;
    //console.log(c); //SyntaxError: Identifier 'c' has already been declared;

}
//console.log(c)

//ex-d

const d = 100;
{
    //Illegal Shadowing;
    //var d = 400;
    //console.log(d); //SyntaxError: Identifier 'c' has already been declared;

}
//console.log(d)

//ex-e

let e = 60;
function v(){
   var e = 70;
   console.log(e);
}
v(); // This is perfectly correct ,Inside function var is block scoped;
// Whats implies on normal function it will be same for arrow function in this context.

//ex-f
var f = 100;
{
    var f = 400;
}
console.log(f);//output:---->400;



const  g = 500;
{
    const g = 600;
    {
        const g = 700;
        console.log(g)//output = 700;
        {
            console.log(g) //output = 700  // these are also lexically attched with parent block thats why we are geeting output here;
        }

    }
}

console.log(g)// This is perfectly correct to write like above, output = 500;


let l = 90;
{
    let l = 2000;
}
//This is perfectly correct to write like above
console.log(l) //output :--->90;






