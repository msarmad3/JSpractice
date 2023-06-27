const ages = [3, 10, 18, 20];

var n = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
console.log(` Array: ${ages}`);
console.log(n);