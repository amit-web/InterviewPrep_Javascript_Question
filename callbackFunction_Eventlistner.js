
//What is  callbackfunction in javascript ?
//function which we are passing through parameter of a function is called call back function;
//Example-1
// function x(){
//     console.log("Ravi")
// }
// x(function y() {

// })

//Example-2
// setTimeout(function xyz(params) {
//    console.log("timer")
// }, 3000);

// function x(params) {
//   console.log("x")
// }
// x(function y(params) {
//     console.log("y")
//   }
// )

/*Output :---> x,
y
,
timer
*/
//What is blocking the main thread?
//Any opration which is blocking the call stack is calle blocking the main thread.so js engine will execute other peace of code ;


//Deep about eventlistener:--->
//Example-3 ---->



//Using clousure we are updating the value of count through this eventlistner;

function usingClousure(){
    let count = 0;
    document.getElementById('clickMe').addEventListener("click",function clicked(){
        console.log("button Clicked",count++);
    });

}
usingClousure();








