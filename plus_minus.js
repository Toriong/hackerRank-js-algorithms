function plusMinus(arr) {
    let negNum = 0;
    let postiveNum = 0;
    let zeroNum = 0;
    for (let index = 0; index <= arr.length; index++) {
        let arrCheck = Math.sign(arr[index]);
        if (arrCheck == 1) {
            postiveNum++;
        } else if (arrCheck == -1) {
            negNum++;
        } else if (arrCheck == 0) {
            zeroNum++;
        }
    }
    console.log("Negative count", negNum);
    console.log(arr.length);
    let arrNumbers = [(postiveNum / arr.length).toFixed(6), (negNum / arr.length).toFixed(6), (zeroNum / arr.length).toFixed(6)];
    arrNumbers.forEach((number) => {
        return console.log(number);
    })
}

let someArr = [1, -2, -7, 9, 1, -8, -5]



plusMinus(someArr);


