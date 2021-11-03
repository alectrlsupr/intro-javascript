// The mix of high order functions, plus dictionaries with function (objects), plus IIFE 
// allow us to create modules (module pattern) 

var counter = (function(firstValue){
    
    var currentValue = firstValue

    var logger = function () {
        console.log("El valor actual es: ", currentValue);
    }
    
    var increment = function(step){
        currentValue += step 
        logger()
    }
    var decrement = function(step){
        currentValue -= step 
       logger()
    }

    return { inc: increment, 
             dec: decrement }
})(10)

counter.inc(2)
counter.inc(3)