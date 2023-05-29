// ToDo
// Add, Multiply, Subtract, Divide
// Create 4 functions for above methods. Add a calculator method with an operator, that takes those functions as input
let total = 0;

const add = (...rest) => {                                  // using ...rest to get an "infinite" amount of inputs
    rest.forEach(element => {                               // forEach iterates through every element in an Array. Array is given by the ...rest parameter.
        total += element;                                   // adding every number from given array to variable total, which was initialized before.
    });
    return total;
}

const subtract = (...rest) => {                             // using ...rest parameter to get an "infinite" amount of inputs
    total = rest[0];                                        // Giving total the value of the first number in the Array. Otherwise we would be substracting from Zero, since total was initialized Zero before.       
    rest.slice(1).forEach(element => {                      // .slice() takes the array, but starts with the position given to it. forEach iterates through every Array element.
        total -= element;                                   // Subtracting each element with the starting element, we gave variable total before.
    })
    return total;
}

const multiply = (...rest) => { 
let total = rest[0];                                         //creating function with ...rest parameter as input
rest.slice(1).forEach(element => {                           //starting at position 1 in the array with .slice() -  iterating through every element of Array given by ...rest parameter. 
        total *= element;                                    //multiplying total with each element in the array. total was set to 0th place of array, so it doesnt multiply with 0. total was set to 0 before.   
    });
    return total;
}


const divide = (...rest) => {                                   //creating a function with ...rest parameter 
    let total = rest[0];                                        // setting total to 0th place of array, so function does not divide with 0.
    rest.slice(1).forEach(element => {                          // slice() starting at given position in Array. forEach iterating through every position in Array.
        total /= element;                                       // dividing (new) total with every element in Array.
    });
    return total;
}

// Now creating a calculator function, that uses an operator, that takes above functions as input

const calculator = (operator, ...rest) => {                     // creating calculator function. ...rest can only be used as last position as a parameter
        return operator(...rest);
}

console.log(calculator(divide,10,5));                           // remember that the operator is also a parameter, not a function. so the numbers are not allowed in ()

// Next step would be to wrap everything in an object, to make cleaner code and easier calling the functions