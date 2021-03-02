// what I want:
// have the output be like a staircase, cutted in half. 
// 
// GOAL: console.log the join array with the # at the specific location.
// 1. given n (5)
// 2. make array with n length(5)
// 3. 

// make a function that wil

function staircase(n) {
    let numberOfHashTags = 1;
    let array = [];
    let numberOfBlanks = (n - numberOfHashTags)
    while (numberOfHashTags <= n) {
        for (let i = 1; i <= numberOfBlanks; i++) {
            array.unshift(" ");
        }
        for (let i = 1; i <= numberOfHashTags; i++) {
            array.push("#");
        }
        let final = array.join("");
        console.log(final);
        numberOfHashTags++;
        numberOfBlanks--;
        array = [];
        if (numberOfHashTags > n) {
            break;
        }
    }
}


staircase(10);

// const array = [];
// array.push("#")
// array.unshift(" ")
// array.unshift(" ");

// console.log(array);
// console.log(array.join(" "))
// const someArray = [" ", " ", "#"]
// let string = someArray.join("");
// staircase(6);


// let someArray = []
// someArray.push("#");
// someArray.unshift(" ");
// someArray.unshift(" ");
// someArray.unshift(" ");
// console.log(someArray);

// let numberOfBlanks = 4
// let array = []
// for (let i = 1; i <= numberOfBlanks; i++) {
//     array.unshift(" ");
// }
// console.log(array)






















