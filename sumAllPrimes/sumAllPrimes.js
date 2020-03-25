const sumPrimes = num => {
    // Create a container to grab values that pass isPrime
    let primeArray = [];

    // If the number is 1, return 1 and stop, no need to run it through the loop
    if (num == 1) return 1;

    // Capture all iterations of num that pass isPrime as true and add them to the array
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) primeArray.push(i);
    }
    // Use the reduce function on array
    const result = primeArray.reduce((a, b) => a + b, 0);
    return result;
}

// Separate function to test all prime numbers
const isPrime = num => {
    if (num < 2) return false;

    // Iterate and test if the ith up to num are not prime numbers and return false 
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    // Return true if num passes and is prime
    return true;
}
