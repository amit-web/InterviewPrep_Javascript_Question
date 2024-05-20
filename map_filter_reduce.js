// const user = [
//     {firstName:"Amit",lastName:"Mehta",age:25},
//     {firstName:"Ritik",lastName:"Mehta",age:30},
//     {firstName:"Rohit",lastName:"Mehta",age:25},
//     {firstName:"Mohan",lastName:"Mehta",age:30}
// ]

//Using reduce need to find first name which have age less than 30;
//acc me array


// const output = user.reduce(function(acc,curr){
//  if(curr.age<30){
//     acc.push(curr.firstName)
//  }
//  return acc;
// },[])
// console.log(output)


//Using filter find age less than 30 and give array of the first and last name of the user;


// const  output = user.filter((user)=>user.age<30).map((final_res)=>{
//     return final_res.firstName + " " +final_res.lastName
// });
// console.log(output)

 //let arr = [2,3,4,5,6]
// //find the sum using reduce function:

// let output = arr.reduce((acc,curr)=>{
//     let res = acc+curr;
//     return res;

// },0)
// console.log(output)


//filter  out the array which is greater than 2;


// let output = arr.filter((res)=>res>2).reduce((acc,curr)=>{
//     let res = acc+curr
// return res},0)
// console.log(output);


//map example double triple binary:

// let output = arr.map((x)=>x*2)
// let output1 = arr.map((x)=>x*3)
// let output2 = arr.map((x)=>{
//     return x.toString(2)})
// console.log(output,output1,output2);







const shareBtn =  document.querySelector("#sharebtn");

shareBtn.addEventListener("click",(event)=>{
    if(navigator.share){
        navigator.share({
            title:"Share functionality implemented",
            url:"https://www.google.com"
        }).then(()=>{
            console.log("checking here")
        }).catch((err)=>{
            console.log("Error using Web share API")
            console.log(err)
        })
    }
    else{
        alert("Something went Wrong")
    }
})