const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

  var n = ages.find(checkAge);
console.log(` Array: ${ages}`);
console.log(n);