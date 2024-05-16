//function statement or Function Declarations
a()//output :--->Executed
expression1()  //output :---> ReferenceError: Cannot access 'expression1' before initialization
function a (){

}
// function Expression :
let expression1 = function (){

}
//Named function expression
let expression2 = function xyz (){
    //console.log(xyz)
}
expression2();//output :--->[Function: xyz]

//Anonymus function :--->   function without name is called anonymus function;

// function (){

// }

//Diffrance between prameters and arguments:--->
function x (param1,param2){
    //console.log(param1,param2)
}
x(1,2)//arguments is value;



//first class function or first class citizens:--->

function j(arg1){

    return function k(){
        console.log(arg1)
    }
}

j(function l(){})();



// console.log(j(1));


/*
1.  What is Function Statement ?
A.  A normal function that we create using Naming convention.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }

3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     }

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.

*/


