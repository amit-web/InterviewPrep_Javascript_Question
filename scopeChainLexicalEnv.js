//lexical(Meaning in herarchie or in ordar)_ENV:---> Whenevr is a execution context is creat a lexical env is also created,lexical env is local memory along with its lexical env of its parent;
// Whole chain of lexical env is known as scope chain;


function a(){
    var a = 10;
    c()
    function c(){
      console.log(a);
    }
}
a();

//scope === accessiability  

// c is physicaly present inside the function A , so it's lexical parent is function and scope for  function c is  lexical parent function A;
