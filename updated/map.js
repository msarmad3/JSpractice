const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(`Old Array: ${numbers}`);
console.log(`Old Array: ${newArr}`);