// Section 2
// Task 01
function processNumbers(num1, num2) {
  if (num1 && num2 % 2 == 0) {
    return num1 + num2;
  } else if (num1 % 2 && num2 % 2 !== 0) {
    return num1 * num2;
  } else if (
    (num1 % 2 == 0 && num2 % 2 !== 0) ||
    (num2 % 2 == 0 && num1 % 2 !== 0)
  ) {
    return "Invalid Input";
  }
}
console.log(processNumbers(2, 7));

// Section 2
// Task 02

function isPalindrome(stri) {
  let name = stri.toLowerCase();
  let j = name.length - 1;
  for (let i = 0; i < name.length - 1; i++) {
    if (name[i] != name[j]) {
      return "NO ITS NOT PALINDROME";
    }
    j--;
  }
  return "YES ITS PALINDROME";
}
console.log(isPalindrome("pakistan"));

// Section 2
// Task 03
const array = [3, 7, 2, 9, 5];
let gretest = 0;
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (gretest > element) {
    gretest = gretest;
  } else {
    gretest = element;
  }
}
console.log(gretest);
