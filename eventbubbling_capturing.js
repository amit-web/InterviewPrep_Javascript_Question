var parentdiv1 = document.getElementById("firstparent");
var parentdiv2 = document.getElementById("secondparent");
var button = document.getElementById("child");
//Event bubbling happens here ,  in event bubbling event propogation happen through child to parent , event is bubbling out;
// parentdiv1.addEventListener("click", () => {
//   console.log("firstparent");
// });
// parentdiv2.addEventListener("click", () => {
//   console.log("secondparent");
// } );
// button.addEventListener("click", () => {
//     console.log("Target, child")
// })

//When i clicked on child output will be like this :
//output---->child,secondparent,firstparent


//When i clicked on firstparent output will be like this :
//output --->firstparent

//When i clicked on secondparent output will be like this :
//output----> secondparent,firstparent



//----------------------------------------------------------------------------------------

//Event capturing example:---->
//in event capturing event propogation happens through parent to child.it is totally depend on us how we can mange the event capturing and bubbling for capturing we nee to pass third argument as boolean --> true for even capturing.

// parentdiv1.addEventListener("click", () => {
//   console.log("firstparent");
// },true);
// parentdiv2.addEventListener("click", () => {
//   console.log("secondparent");
// },true);
// button.addEventListener("click", () => {
//   console.log("Target, child");
// }, true);


//When i clicked on child output will be like this :
//output---->firstparent,secondparent,Targetchild,

//When i clicked on firstparent output will be like this :
//output --->firstparent

//When i clicked on secondparent output will be like this :
//output----> secondparent,firstparent

parentdiv1.addEventListener("click", () => {
  console.log("firstparent");
},true);
parentdiv2.addEventListener("click", () => {
  console.log("secondparent");
});
button.addEventListener("click", () => {
  console.log("Target, child");
});

//When i clicked on child output will be like this :
//output---->firstparent,Targetchild,secondparent

//When i clicked on firstparent output will be like this :
//output --->firstparent

//When i clicked on secondparent output will be like this :
//output----> firstparent,secondparent



let arr = [[1, 2], [3, 4], [5, 6,[7, 8, 9]], [10, 11, 12, 13, 14, 15]]
// function flatten(array) {
//         let final = [];
//         function helper(array) {
//             for (let i = 0; i < array.length; i++) {
//                 let ele = array[i]
//             if (Array.isArray(ele)) {
//                  helper(ele)
//             }
//             else {
//                 final.push(ele)
//             }
//         }
//     }
//     helper(array)
//     return final

//     }

// console.log(flatten(arr));


// function flatten(arr) {
//     let finalOutput = [];
//     function check(arr) {
//         for (let i = 0; i < arr.length; i++){
//             let singleValue = arr[i];
//             if (Array.isArray(singleValue)) {
//                 check(singleValue)
//             }
//             else {
//                 finalOutput.push(singleValue)
//             }
//         }

       
//     }
//     check(arr);
//     return finalOutput;
// }

// console.log(flatten(arr));
