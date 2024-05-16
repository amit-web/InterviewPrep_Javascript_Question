// function x(){
//     let a = 20;
//     setTimeout(function(){
//        console.log(a)
//     },1000)
// }
// console.log("Amit kr Mehta");
// x()//Output :--->Amit kr Mehta,20

function x() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}
//console.log("Amit kr Mehta");
//x()
/*
Output
Amit kr Mehta
6
6
6
6
6
6
*/

//To print as count to number 1 to 5 we have two solutions
//Solution:-1  Using let , It will refrance to the diffrent memory location evrytime for each varible i;
function x() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(function () {
            //  console.log(i)
        }, i * 1000)
    }
}
//console.log("Amit kr Mehta");
//x()

//Solution:-2 (Using clousure, Wrap settimeout into the function, so that it will bind new value everytime with the value i in its lexical scope, so the callback function inside settimeout remember diffrent value of the varible );


function x() {

    for (var i = 1; i <= 5; i++) {
        function z(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        z(i)
    }

}
x()