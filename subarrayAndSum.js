function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    subarrayAndSum(n,k,arr)
    
  }
  function subarrayAndSum(n,k,arr){
      let ans = 0,len=1,sum=0,maxLength=0;
      for(let i=0; i<n; i++){
          sum+=arr[i];
          len++;
          if(sum%k!==0){
              if(len>maxLength){
                  maxLength=len;
                  ans=1
              }else if(len===maxLength){
                  ans++
              }
          }
      }
      for(let i=0; i<n; i++){
          sum-=arr[i];
          len++;
          if(sum%k!==0){
              if(len>maxLength){
                  maxLength=len;
                  ans=1;
                 
              }else if(len===maxLength){
                  ans++
              }
          }
      }
      console.log(ans)
      
      
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
  