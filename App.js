// LOGICAL OPERATORS

let num1 =10;
let num2 =20;
let num3 ="10";
let word1= "Hello";
let word2= "hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1==num3);
console.log(num1===num3);
console.log(word1===word2);
console.log(word1!=word2);


// CONTROL FLOW
let item = "U2";
if ( item === "annapurna") {
    console.log("Buy annapurna");
} else if (item === "U2"){
    console.log("Buy U2");
} else if ( item === "A1"){
    console.log("Buy A1");
} else {
    console.log("Buy rocky salt");
}


// GRADIND SYSTEM
let score =101;
if (score >= 0 && score <= 100) {
    if (score >= 90 && score <= 100) {
        console.log("Excellent");
    } else if (score >= 80) {
        console.log("Very good");
    } else if (score >= 70) {
        console.log("Good");
    } else if (score >= 60) {
        console.log("Average");
    } else if (score >= 50) {
        console.log("Credit");
    } else if (score >= 40) {
        console.log("Pass");
    } else if (score >= 0) {
        console.log("Fail");
    }
} else {
    console.log("Please enter a valid score");
}

// FUNCTION
function sum(a, b){
    let total = a + b;
    return total;
    // console.log(a + b);
}


let eleven = sum(5, 6);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);

function multiply(a = 6, b){
    let result = a * b;
    return result;
}


let Ab = multiply(4, );
let Cd = multiply( , 5);
console.log(Ab)
console.log(Cd)


// LOOPS
// for loop
for (let i = 1; i <= 50; i++) {
    console.log(i + ". I will not sleep in class again");
}

// While loop
let num = 1;
while (num <= 10) {
    console.log(num)
    num = num ++;
}

// do while loop
let age = 2;
do {
console.log(" You can't vote");
age++
} while (age < 18);


// Array Method
let ages = [19, 23, 26, 17, 40, 33, 29, 21, 17, 15, 37];
for (let age of ages) {
    console.log(Math.pow(age, 2))
}
    
let marriage = ages.filter(function(num){
    return num > 25;
});
console.log(marriage);

// map
let squares = ages.map((age) => age * age);
console.log(squares);

// Find
let eighteen = ages.find((age) => age === 17);
