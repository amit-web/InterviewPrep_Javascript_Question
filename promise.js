//What is promises?
//promise is an object representing Eventual completion of an async operation;
//promise has three state pending, fulfilled nd rejected;

//Example-1

var promise = new Promise(function(resolve,reject){})


let cart = ["shoe","mobile","sim","card"];

createOrder(cart,function(orderID){
    proceedToPayment(orderID,function(paymentInfo){
        showOrderSummary(paymentInfo,function(showOrderSummary){
            updatewallet(showOrderSummary)
        })
    })
})
//pyramid of doom callback hell,


//we can solve through the promise;

createOrder(cart)
.then(function(orderID){
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
  return showOrderSummary(paymentInfo);
})
.then(function(showOrderSummary){
    return updatewallet(showOrderSummary);
})


//function execution suspended;
