//Function along with its lexical scope forms a clouser;
//Function bundled with its lexical environment is known as a closure.
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
//Its not just that function alone it returns but the entire closure


//Example-1
function x(){
    var a = 90;
    function y(){
        console.log(a)
    }
    return y
}
let z = x();
console.log(z)//output : [Function: y]
z(); //output :--->90;


//Example-2
function d(){
    var c = 900;
    function x(){
        var a = 800;
        function y(){
            console.log(a,c)
        }
        y()
    }
    x()
}
d();


//Example:-3   //Where we can use

//Module Design pattern
//Currying
//Function like once
//Memoize
//Settimeouts
//Iterators
//Maintaining state in Async World;


