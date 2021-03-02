

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
























