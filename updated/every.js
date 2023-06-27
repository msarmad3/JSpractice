const ages = [17, 33, 16, 40];

var bool = ages.every(checkAge);

function checkAge(age) {
    //console.log(age);
  return age > 18;
}
console.log(` Array: ${ages}`);
console.log(bool);