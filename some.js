const ages = [3, 10, 18, 20];

let result = ages.some(checkAdult);
 function checkAdult(age) {
     console.log(age);
  //return age > 18;
}

console.log(result);