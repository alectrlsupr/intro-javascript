// Javascript can return a dictionary (object) of functions
function counter(firstValue){
    var currentValue = firstValue

    var logger = function () {
      console.log("El valor actual es: ", currentValue); 
    }

    var decrement = function(step){
       currentValue -= step 
       logger()
    }

    var increment = function(step){
        currentValue += step 
        logger()
    }

    return { inc: increment, 
             dec: decrement }
}
// They are indepedent!
var exampleCounterOne = counter(0)
var exampleCounterTwo = counter(5)

exampleCounterOne.inc(1)
exampleCounterTwo.inc(1)

exampleCounterOne.dec(2)
exampleCounterTwo.dec(2)
