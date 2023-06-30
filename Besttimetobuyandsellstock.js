qqq
function stock(n,arr){
    let minPrice = arr[0];
     let maxProfit = 0;
  
  for (let i = 1; i < n; i++) {
    let presentPrice = arr[i];
    let netProfit =presentPrice - minPrice;
    maxProfit = Math.max(maxProfit, netProfit);
    minPrice = Math.min(minPrice, presentPrice);
  }
  
  console.log(maxProfit);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line=1;
  for(let i=0; i<tc; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map (Number)
      stock(n,arr)
  }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
