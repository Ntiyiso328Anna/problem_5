let number = 1;

function smallPositiveNumber(value) {   //the function to check if a given value is evenly divisible
    for (var i = 1; i <= 20; i++) {  //
     
        if (value % i !== 0) {
            return false;   //If the value is not divisible by any number, return false
        }
    }return true; //If the value is divisible by all numbers, return true
    
}

while (true) {
    if(smallPositiveNumber(number))
    {
        break; //If the number satisfies the divisibility condition, exit the loop
    }
    number++; // increment the number to get the next number
}
console.log(number); //output the smallest positive number that is evenly divisible by 1 to 20