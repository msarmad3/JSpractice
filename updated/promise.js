let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("hello from promise"); }, 3000);
});

myPromise.then(function(value) {
  console.log(value);
});

console.log(myPromise);