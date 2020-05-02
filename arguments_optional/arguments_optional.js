function addTogether() {
    // Convert args to an array
    const args = [...arguments];
    // Only accept numbers or return undefined and stop the program
    const numbersOnly = value => typeof (value) === 'number' ? value : undefined;
    // test args for numbersOnly and return only the first two arguments regardless of the length of args
    const numbers = args.filter((n) => typeof n === 'number');
    // if the original arg length is greater than the return of numbers.length after it's filtered, return undefined
    if (args.length > numbers.length) {
        return undefined;
    }// It has to add two numbers passed as parameters and return the sum.
    else if (numbers.length > 1) {
        return numbers[0] + numbers[1];
    }// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
    else if (numbers.length === 1) {
        let firstParam = numbers[0];
        return function (secondParam) {
            if (typeof secondParam !== 'number' || typeof firstParam !== 'number') {
                return undefined;
            }
            return secondParam + firstParam;
        }
    }
}

addTogether(2, '3');
addTogether(2);
addTogether(2, 3, 5, 6);