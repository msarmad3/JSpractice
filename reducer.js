const numbers = [15.5, 2.3, 1.1, 4.7];
var result = numbers.reduce(getSum, 0);

function getSum(total, num) {
    console.log(total);
  return total + Math.round(num);
}

console.log(result);