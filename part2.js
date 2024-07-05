//=============Part 2: Prime Time ==========//
// Write a script that accomplishes the following:
//Declare an arbitrary number, n.
    // Create a loop that searches for the next prime number, starting at n and incrementing from there.
 // program to check if a n is prime or not prime

// take input from the user
const n = 5;
let isPrime = true;

// check if n is equal to 1
if (n === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if n is greater than 1
else if (n > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");}

    // ============= Another Way ===========================//
    var n1 = 0;
for (let i = 1; i <= 60; i++) {
  let prime = i > 1;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(i, "is a prime number");
    n1+= 1;
  } else {
    console.log(i, "is not a prime number");
  }
}

// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11
function nextPrime(num) {
    let newNum = num;

    for (let i = 0; i < newNum; i++) {
        if (nextPrime(newNum)) {
            newNum += 1;
        } else if (isPrime(newNum)) {
            return newNum;
        }
    }
}
console.log(nextPrime(4)); // 5
console.log(nextPrime(5)); // 5
console.log(nextPrime(9)); // 11

