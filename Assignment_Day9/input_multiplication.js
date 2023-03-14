// Write a program that takes a number as an input and create a file with multiplacation table.

const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number: ', num => {

  // input a number
  num = Number(num);

  // Create the file
  const file = fs.createWriteStream(`table-${num}.txt`);
  
  // Loop( 1 to 10 ) and write the multiplication table to the file
  for (let i = 1; i <= 10; i++) {
    const result = num * i;
    file.write(`${num} x ${i} = ${result}\n`);
  }
  
  
  file.end();
  console.log(`Table ${num} created successfully.`);
  readline.close();
});
