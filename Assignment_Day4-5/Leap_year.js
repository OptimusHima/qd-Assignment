const prompt = require("prompt-sync")();

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function getNextLeapYear(year) {
    let nextYear = year + 1;
    while (!isLeapYear(nextYear)) {
      nextYear++;
    }
    return nextYear;
  }
  
  // Get input from the user
  const year = prompt("Please enter a year:");
  
  // Calculate the next leap year
  const nextLeapYear = getNextLeapYear(year);
  
  // Print the result
  
  console.log("the next leap year, After " + year + " is " + nextLeapYear);