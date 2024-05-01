//Example1

var x = 1;
a();  //output =>10
b();  //output =>100
console.log(x); //output =>1
//javscript execution context  came here into the picture

function a(){
var x = 10;
console.log(x)
}
function a(){
    var x = 100;
    console.log(x)

}