const ages = [3, 10, 18, 20];

var n = ages.some(checkAdult);
function checkAdult(age) {
  return age > 23;
}
console.log(` Array: ${ages}`);
console.log(n);