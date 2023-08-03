function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line  = 1;
    for(let i=0; i<tc; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number)
        simpleChallenge(n,arr)
    }
  }
  function simpleChallenge(n,arr){
  
   let max= 0;
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;
  
    for (let i = 0; i < n; i++) {
      max1 = Math.max(max1, arr[i] - i);
      min1 = Math.min(min1, arr[i] - i);
      max2 = Math.max(max2, arr[i] + i);
      min2 = Math.min(min2, arr[i] + i);
    }
  
    max = Math.max(max1 - min1, max2 - min2);
    console.log(max);
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
  