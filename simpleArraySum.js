//testing code used in VS
let someArray = [1, 2, 3, 4, 5];

var sumOfArray = (array) => {
  let plusArray = [];
  for (let index = 0; index < array.length; index++){
    if (array[index] == array[array.length - 1]) {
      plusArray.push(array[index]);
      break;
    }
    plusArray.push(array[index] + "+");
  }
  let sum = (eval(plusArray.join("")));
    return sum;
}
console.log(sumOfArray(someArray));


//code that I pasted and edited on hackerRank
function simpleArraySum(array) {
    let plusArray = [];
    for (let index = 0; index < array.length; index++){
    if (array[index] == array[array.length - 1]) {
      plusArray.push(array[index]);
      break;
    }
    plusArray.push(array[index] + "+");
  }
    let sum = (eval(plusArray.join("")));
    return sum;
}