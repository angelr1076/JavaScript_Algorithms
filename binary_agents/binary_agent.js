// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.
function binaryAgent(str) {
    //First convert the string to an array of bits
    const arrChar = str.split(' ')
        .map(item => item)
        //Iterate through the array and designate base 2 as the radix to use ascii decimal
        .map(char => parseInt(char, 2))
        //Take each ascii decimal returned and convert to its symbol
        .map(code => String.fromCharCode(code)).join('');

    return arrChar;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");