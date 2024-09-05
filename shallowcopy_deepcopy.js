//shallow copy and deep copy  in js.
//bascically we are copying the obj and arr in with these two methods
//In shallow copy when we have nested object and we want to copy through shallow copy ,after copying when we will modify in copied nested obj it will
//affect the orginal  object also and original object and shallow copied object both are pointed to same memory refrance;
//the main diffrance in both we can see in nested object;



//Example of shallow copy:

// let original = {
//     a: 2,
//     b:{c:3}
// };

// let shallowcopy = Object.assign({}, original);

// shallowcopy.b.c = 5;

// console.log(original.b.c); //output---> 5
// console.log(shallowcopy.b.c);//output---> 5

// //here it is affecting the original object;

// let original1 = {
//     a: 1,
//     b: 2,
//     c: 3
    
// }

// let shallowcopy1 = Object.assign({}, original);

// shallowcopy1.c = 5;

// console.log(original1.c); //output---> 5
// console.log(shallowcopy1.c);




//Deep copy:---->in deep copy we are copying the original object but it will not affect the original object diffret instance is created for that and diffrent memory allocation happens for the copied one ,

//when we will change in nested object of copied one there will no change in original one ;



let original = {
  a: 2,
  b: { c: 3 },
};


let deepcopy = JSON.parse(JSON.stringify(original))

console.log(deepcopy); //output copied object;


deepcopy.b.c = 8;


console.log(original.b.c); //output  3
console.log(deepcopy.b.c); //output  8


//We modified the copied object but it is not affecting the original one;
