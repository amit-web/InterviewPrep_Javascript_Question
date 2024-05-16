//emptyjs file is the shotest js example
//js engine create first global execution context along with this a global object (Which is window w.r.t browser and this will also created);
//this===Window ----->True(global object of browser);
//global space ===> whatever we can write outside the function that  is present in global space;
//

var a = 10;
function b(){
    var c = 30;
}
console.log(window.a) //output ===>10
console.log(a);  //output ===>10
console.log(this.a)  //output ===>10

// output  is same because All are refering to same memory space in global object;