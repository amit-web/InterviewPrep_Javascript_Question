//What is higher order function ?
//A function which takes function as argument nd return a function is called Higher order function.
//Example : calculate Area of circle and cicumferance and diameter;

let radius = [3,2,4,5]
let area = function (radius){
    return Math.PI*(radius*radius);
}

let circumference = function (radius){
    return 2*Math.PI*(radius);
}

let diameter = function (radius){
    return 2*(radius);
}

function calculate(radius,logic){
    let res = [];
    for(let i=0;i<radius.length;i++){
         res.push(logic(radius[i]))
    }
    return res;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));


//Above calculate function is acting like map higher order function it is also returnnnig an array
//using map also we can cal culate the area ;

let res = radius.map(area)
console.log(res);


//How can you make your calculate function just like map

Array.prototype.calculate = function(logic){
    let res = [];
    for(let i=0;i<this.length;i++){
         res.push(logic(this[i]))
    }
    return res;
}

let res1 = radius.calculate(diameter);
console.log(res1);



