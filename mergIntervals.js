
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let line = 1
    let intervals=[]
    for(let i=0; i<n;i++){
        intervals.push(input[line++].trim().split(" ").map(Number));
          
        
    }
    mergeIntervals(intervals)
    
  }
  function mergeIntervals(intervals) {
      let n = intervals.length
   
  
       intervals.sort((a, b) => a[0] - b[0]); 
      
      let ans = [intervals[0]];  
      for(let i=1; i<=n-1; i++){
          let curr = ans[ans.length-1];
          
          if(curr[1]<intervals[i][0]){
              ans.push(intervals[i])
          }else{
              curr[1]=Math.max(curr[1],intervals[i][1])
          }
      }
      let ans1=ans.join("\n");
      console.log(ans1.split(",").join(" "))
      
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
  