//Enter code here
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n = +input[0];
    let arr=[];
    let line=1
    for(let i=0; i<n; i++){
        arr.push(input[line++])
    }
   console.log(largestnumber(arr))
  }
  function largestnumber(arr){
      
      arr.sort((a,b)=>{
          let x = a.toString()
          let y= b.toString()
         
          return ((x+y)>(y+x)?-1:1)
          
          
      });
      return arr.join("")
      
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