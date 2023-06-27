const numbers = [175, 50, 25];

var sum =  numbers.reduce(myFunc);

function myFunc(total, num) {
  return total + num;
}

console.log(` Array: ${numbers}`);
console.log(sum);