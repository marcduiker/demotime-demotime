const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (let i = 0; i < 10; i++) {
  //<!-- START -->
  //<!-- END -->
  await sleep(500);
}

console.log("Demo app is finished.");
