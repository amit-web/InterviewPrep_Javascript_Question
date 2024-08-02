let ivy ={
    salary:10000,
    id:1,
    slarycredited:function getSalary(){
        console.log("Salary got credited")
    }
}
let employee = {
   name:"krishna",
}
employee.__proto__ = ivy;

employee.slarycredited();

//another method:---->

employee.Object.create(ivy,{
    emp1:"Amit",
    emp2:"Sunny"

})
