// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.


function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    let score = []
    let array1 = a;
    let array2 = b;
    for (var index = 0; index <= a.length; index++){
        if (array1[index] > array2[index]) {
            console.log(array1);
            aliceScore++;
            console.log(aliceScore, bobScore)
            console.log("Alice +1")
        } else if (array1[index] < array2[index]) {
            bobScore++;
            console.log("Bob +1")
        } else if (array1[index] == array2[index]) { }
        else {
            break;
        }
    }
    score.push(aliceScore);
    score.push(bobScore);
    return score;
    }


let alice = [77, 77, 77];
let bob = [4, 5, 6];

compareTriplets(alice, bob)





