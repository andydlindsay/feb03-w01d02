/*
Write a Node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.
*/

// 1. loop through arguments
// 3. sum the arguments
// 5. reading in arguments from the command line
// 2. discard anything not a whole number
// 4. returning the sum to the user
// ??. support negative numbers

// 1. loop through arguments
// array of strings
// let strings = ['5.45', 'four', 'rainbow', '-20', '1'];
let strings = process.argv.slice(2);

const convertStringArrayToNumbers = function(arr) {
  const result = arr.map(function(n) {
    return Number(n);
  });
  return result;
};

strings = convertStringArrayToNumbers(strings);

let total = 0;
for (let i = 0; i < strings.length; i++) {
  if (Number.isInteger(strings[i])) {
    total += strings[i];
    // total = total + strings[i];
  }
}

const outputToUser = function(val) {
  console.log(`Your total is: ${val}`);
};

outputToUser(total);
