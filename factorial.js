

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    let n = +input[0];
    console.log(factorial(n))
  }
  function factorial(n){
      if(n==0){
          return 1;
      }
      return n*factorial(n-1)
      
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


