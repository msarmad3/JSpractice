async function test(){
    await setTimeout(function(){(console.log("i am in the async function"))},2000);
    console.log("after timeout");
    return Promise.resolve("OK");
    //console.log("i am in the async function");
}
//console.log(test().value);
// after changes
test().then(
  function(value) {console.log(value);}
);
console.log("outside of the async function");

async function test(){
  await setTimeout(function(){(console.log("i am in the async function"))},2000);
  console.log("after timeout");
  return Promise.resolve("OK");
  //console.log("i am in the async function");
}
//console.log(test().value);
// after changes
test().then(
function(value) {console.log(value);}
);
console.log("outside of the async function");
