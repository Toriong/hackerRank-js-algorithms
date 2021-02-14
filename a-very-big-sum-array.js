function aVeryBigSum(ar) {
    let array = ar;
    let sumArray = [];
    for(let index = 0; index <= array.length; index++){
        if(array[index] == array[array.length-1]){
            sumArray.push(array[index]);
            break;
        }
        let numAndPlus = array[index] + "+";
        sumArray.push(numAndPlus);
    }
    let sum = eval(sumArray.join(""));
    return sum;
}