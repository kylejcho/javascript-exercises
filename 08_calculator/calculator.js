const add = function(a , b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const sum = function(sum) {
    return sum.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
    return array.reduce((total, num) => total * num , 1);
};

const power = function(a , b) {
    return Math.pow(a, b);
};

const factorial = function(num) {
    if (num === 0) return 1;
    let product = 1;
    for (let i = num; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
