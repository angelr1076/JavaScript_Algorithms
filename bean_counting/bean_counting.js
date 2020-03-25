function countChar(str, letter) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            counter++;
        }
    }
    return counter;
}

function countBs(str) {
    return countChar(str, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));