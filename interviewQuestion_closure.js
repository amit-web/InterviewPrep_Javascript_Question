//Example -1;  normal example , Ineer function has access to its lexical parent outer function so it can can access the varibale a due to clousure;

// function outer (){
//     var a = 90;
//    return function inner(){
//       console.log(a);
//     }
// }
// let res = outer();
// res();  //output--->90



//example-2

// function outer (){
//      let a = 90;
//    return function inner(){
//       console.log(a);
//     }
// }
// let res = outer();
// res(); // output--->90


//example-3
//What  is double paranthesis here, we are calling the function first it is returning the outer function and outer function returning the inner function
//in res variable we will get inner function after calling the res we will get the output;

// function outest(){
//     var b = 100;

//     function outer (c){
//         let a = 90;
//       return function inner(){
//          console.log(a,b,c);
//        }
//    }
//    return outer;

// }

// let res = outest()("Hello World")
// res(); //output - 90 100 Hello World



//Give the best usecase of clousre ;
//curraying
//Module design pattern
//Data hiding or data encasulation

// What is Data hiding or data encasulation

//Example -4

function x(){
    var b = 50;
    return function y(){
        console.log(b)
    }
}

let res1 = x();
res1();
// console.log(b)
///Here we want to access the variable b outside the function so we are getting ReferenceError: b is not defined,
//because variable b is in the lexicl env of its parent function x and forming clousre so we can access the varible inside the function
//but not outside the function, that way we can hide data and use it anywhere by calling particular function as per our usecase;



// function counter (){
//     var count = 0;
//     return function increament(){
//     count++;
//     console.log(count)
//     }
// }

// let count1 = counter()
// count1();//Output-1
// count1();//Output-2
//Here we can see that we are calling the function count1 two times and getting the outout 1 and 2 it is diffrent right because of clousure it will remember the increament value and after calling first time it is printing value 2 which is increased.

// let count2 = counter()
// count2();//Output-1

//But see we made another varibale count2 and calling the function but as result is completly new as begining that is the beauty of clousre it is independently handle the value for diffrent types of variable.


//Optimization through constructor function :


function Counter (){
    var count = 0;
    this.increament = function(){
    count++;
    console.log(count)
    }
    this.decreament = function(){
    count--;
    console.log(count)
    }
}

let ans = new Counter

ans.increament();
ans.decreament();


//Garbage collector example


function a (){
    let c = 90;
    let r = 80
    function b (){
      console.log(c)
    }
}
a();//output 80

//see in browser while debugging you can access variable r in  console it will say refranceError : r is not defined;
//modern browser and browser which is using v8 engine smartly pushed these un utilized varible into garbage collecteor which is nothing but a storage where somthing which we are not using throughout the code browser put it there;








//


