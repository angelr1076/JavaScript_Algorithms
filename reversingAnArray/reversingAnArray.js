function reverseArray(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// reverseArray([1, 2, 3, 4, 5])

function reverseArrayInPlace(arr) {
    //Split the array in half
    for (let i = 0; i <= (arr.length / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}


reverseArrayInPlace([7, 8, 9, 10, 11]);