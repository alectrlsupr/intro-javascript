function megaSum(){
  var argArray = Array.from(arguments)
  var sum = 0
       

  function onlyNumbers(elem){
    return typeof(elem) == 'number' && !isNaN(elem) // '&&' is important for this exercise and '!' is for "not is" in elem
  }

  function accumulate(elem){
    sum += elem 
  }

  argArray.filter(onlyNumbers).forEach(accumulate)

return sum
}
console.log(megaSum(1));
console.log(megaSum(1,2,3)); // => 6 
console.log(megaSum(1,2,3,4)); // => 10 
console.log(megaSum(1,'hola',3)) // => 4
console.log(megaSum(1,'hola',2,NaN)) // => 3 