//1.callback hell.
//2.Inversion of call back.


let cart = ["shoe","pants","shirts"]

api.addToCart(cart,function(){
    api.paymentpage(function(){
        api.summaryPage(function(){
            api.summaryDetails()
        })
    })
})

//After adding  to card move to payment page.  so thats why we are passing callback function to the addtocard.
//After payment recieved we need to move summary page.
//after that need to summary in details page so here we are passing another callback function
//like this evrytime for Asynchronous operation we need to pass call back function nd it is getting nested and complicated like callback hell.


//Inversion of callbacks or ((losing control over callback function) )

api.addToCart(cart,function(){
    api.paymentpage()
})
//Here we are giving control to the addtocart function for payment page, what if it will fail and run more than one time,
//so here we are giving the the control of payment page to add to cart.













