function isPalindrome(word) {
  let x = word.length;
  for (let n = 0; n < x/2; n++) {
   if (word[n] !== word[x - 1 - n]) {
    return false;
   }
  // Write your algorithm here
  return true;
  }
}
/* 
  Add your pseudocode here
*/

/*
we  reverse a string, this time using a for loop to check if the letters are exactly the same on both sides.

Declare a variable with the length of the string.
Declare a for loop, using half of the length of the string as a reference point.
Check if each letter is the same as its  equivalent 
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
