function delayExecution() {
  const startTime = Date.now();
  while (Date.now() - startTime < 3000) {
    // Delay execution for 3 seconds
  }
  console.log("Execution delayed for 3 seconds.");
}
console.log("hello before delay");
delayExecution();
console.log("hello after delay");