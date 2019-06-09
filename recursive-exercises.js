// TIME FOR RECURSIVES!!
// Write a JavaScript program to calculate the factorial of a number.

const fractional = (number) => {
    if(number === 0){
        return 1
    }
    return number * fractional(number-1)
};

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

const gcd = (a, b) => {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

// Write a JavaScript program to get the integers in range (x, y)

const integersInRange = (start_num, end_num) => {
    if (end_num - start_num === 2){
        // console.log(start_num + 1, 'first?')
        return [start_num + 1];
    }
    else{
        let list = integersInRange(start_num, end_num - 1);
        list.push(end_num - 1);
        // console.log(list, 'list')
        return list;
    }
};

// console.log(integersInRange(4,20))
//Write a JavaScript program to compute the sum of an array of integers

const calculateArraysSum = (arrayToSum) => {
    if (arrayToSum.length === 1) {
        return arrayToSum[0];
    }
    else {
        return arrayToSum.pop() + calculateArraysSum(arrayToSum);
    }
};

const calculateExponent = (number, power) =>{
    if(power === 0){
        return 1;
    } else {
        return number * calculateExponent(number, power-1)
    }
};

//Question:  How would you reverse a string in JavaScript?
const reverse = (stringToReverse) => {
    if (stringToReverse === "") {
        return "";
    } else {
        return reverse(stringToReverse.substr(1)) + stringToReverse.charAt(0);
    }
};

//Question: Write a recursive function that performs a binary search and tells where you can find the number you are looking for(index).

const binarySearch = (arr, searchingValue, firstIndex=0, lastIndex=(arr.length-1)) => {
    //Mid point is an index that is currently checked for searching value occurance.
    let midPoint = Math.floor(((lastIndex-firstIndex)/2) + firstIndex);

    switch (true) {
        case arr[midPoint] === searchingValue:
            return `The number that you are looking for can be found at index number ${midPoint} in your array`;
        case lastIndex - firstIndex === 0:
            return false;
        case arr[midPoint] < searchingValue:
            return binarySearch(arr, searchingValue, midPoint+1, lastIndex)
        case arr[midPoint] > searchingValue:
            return binarySearch(arr, searchingValue, firstIndex, midPoint)
    }
};
let arrayToCheck = [1,2,3,4,5,6,7,8,9,10];

// Write a JavaScript program to get the first n Fibonacci numbers

const fibonacciSequenceGenerator = (n) => {
    if (n===1) {
        return [0, 1];
    }
    else {
        let fibonacciSequence = fibonacciSequenceGenerator(n - 1);
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
        return fibonacciSequence;
    }
};

// Write a JavaScript program to check whether a number is even or not.

const isEven = (numberToCheck) => {
    if (numberToCheck < 0){
        numberToCheck = Math.abs(numberToCheck);
    }
    if (numberToCheck === 0){
        return true;
    }
    if (numberToCheck === 1){
        return false;
    }
    else {
        numberToCheck = numberToCheck-2;
        return isEven(numberToCheck);
    }
};

// Write a merge sort program in JavaScript

Array.prototype.merge_Sort = function () {
    if (this.length <= 1) {
        return this;
    }

    let half = parseInt(this.length / 2);
    let left = this.slice(0, half).merge_Sort();
    let right = this.slice(half, this.length).merge_Sort();
    let merge = function (left, right) {
        let array = [];
        while (left.length > 0 && right.length > 0) {
            array.push((left[0] <= right[0]) ? left.shift() : right.shift());
        }
        return array.concat(left).concat(right);
    };
    return merge(left, right);
};

let a = [34,7,23,32,5,62];

// Create function that works with: sum(1,2) and sum(1)(2) or any number of arguments

let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
    return function () {
        let totalArgs = prevArgs.concat(Array.from(arguments));
        if (totalArgs.length === numArgs) {
            return sum(totalArgs);
        }
        return addGenerator(numArgs, totalArgs);
    };
};

let add = addGenerator(2, []);

add(2, 5); // 7
add(2)(5); // 7
add()(2, 5); // 7
add()(2)(5); // 7
add()()(2)(5); // 7

const aT = [1,2,3,4,5]

// aT.forEach(function (value) {
//     console.log(value)
// });
