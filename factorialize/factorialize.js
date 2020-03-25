function factorialize(num) {
    // Set the base of recursion and return only 1 if the number is 0 or 1
    if (num == 0 || num == 1) {
        return 1;
    } else {
        // Multiply the number by the function and argument minus 1; repeat till the base of recursion is hit
        return num * factorialize(num - 1);
    }
}

factorialize(5);

