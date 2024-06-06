// Problem no: 1
const score = 75;
let grade;

if (score >= 90) {
    grade = 'A';
    console.log(grade)
} else if (score >= 80) {
    grade = 'B';
    console.log(grade)
} else if (score >= 70) {
    grade = 'C';
    console.log(grade)
} else if (score >= 60) {
    grade = 'D';
    console.log(grade)
} else {
    grade = 'F';
}

console.log(`With a score of ${score}, the grade is ${grade}.`);


// Problem no : 2
function doubleNumber(number) {
    return number * 2;
}

// Problem no : 3
var array1 = [1, 2, 3, 4, 5];
var slicedArray = array1.slice(0, 3);
console.log(slicedArray);

// Problem no : 4
function addOne(number) {
    return number + 1;
}

// Problem no : 5
for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

// Problem no : 6
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// Problem no : 7
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number * 2);
});

// Problem no : 8
console.log("All tasks completed successfully!");

// Problem no : 9 
function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = payments.reduce((acc, payment) => acc + payment, 0);
    let afterTaxIncome = totalIncome - (totalIncome >= 3000 ? totalIncome * 0.2 : 0);

    let savings = afterTaxIncome - livingCost;

    return savings > 0 ? savings : "earn more";
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400])); 
