//=============== Part 1: Fizz Buzz================/
//===== Using For Loop=====//
// Loop through all numbers from 1 to 100.
for (let i = 1; i< 101; i++){
    if (i % 15 === 0){
        console.log('FIZZBUZZ');//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    }
    else if (i % 5 === 0) {
        console.log('BUZZ');//If a number is divisible by 5, log “Buzz.”
    }
    else if (i % 3 === 0){
        console.log('FIZZ');//If a number is divisible by 3, log “Fizz.”
    }
    
    else {
        console.log(i);//If a number is not divisible by either 3 or 5, log the number.
    }
}; 


//============ Using  For While  loop ========//
let i = 0;
while (i < 100){
    i++;

if ( i % 15 === 0){
    console.log('FIZZBUZZ');
}
else if (i % 3 === 0){
    console.log('FIZZ');
    continue;
}

else {
    console.log(i);
}
};
