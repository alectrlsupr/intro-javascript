function megaSum(){
  var argArray = Array.from(arguments)
  var sum = 0
  // A function passed to other function is known as 'callback' in Javascript
  argArray.forEach(function(elem){
    if(typeof(elem) == 'number'){  
      sum += elem
    }
  })  
return sum 
}
console.log(megaSum(1));
console.log(megaSum(1,2,3)); // => 6 
console.log(megaSum(1,2,3,4)); // => 10 
console.log(megaSum(1,'hola',3)) // => 4