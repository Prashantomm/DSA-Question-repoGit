

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let [a,b] = input[line++].trim().split(" ").map(Number) 
        console.log(gcd(a,b))
    }
  
  }
  function gcd(a,b){
      if(b===0){
          return a;
      }else{
         return gcd(b,a%b)
          
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
