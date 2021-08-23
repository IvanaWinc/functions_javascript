//function declarations
function add(number1, number2) {
    console.log(number1 + number2);
}

add(5, 6);

//function expressions
const add = function (number1, number2) {
    console.log(number1 / number2);
};

add(11, 6);


//arrow functions
const add = (number1, number2) => {
    console.log(number1 - number2);
};
add(12, 6);