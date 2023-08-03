function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
          let tc = +input[0]
          let line=1
     for(let i=0;i<tc;i++){
         let n=+input[line++]
         let mat=[]
         for(let j=0;j<n;j++){
         let arr=input[line++].split("").map(Number)
         mat.push(arr)
         } 
         mirrorGrid(n,mat)
       }
  }
  function mirrorGrid(n,mat){
      let ans=0;
      for(let i=0; i<n/2; i++){
          for(let j=i; j<n-i-1; j++){
              let o=0;
              let z=0;
              if(mat[i][j]===0){
                  z++
              }
              if(mat[i][j]===1){
                  o++
              }
              if(mat[n-1-j][i]===0){
                  z++
              }
              if(mat[n-1-j][i]===1){
                  o++
              }
              if(mat[j][n-1-i]===0){
                  z++
              }
              if(mat[j][n-1-i]===1){
                  o++
              }
              if(mat[n-1-i][n-1-j]===0){
                  z++
              }
              if(mat[n-1-i][n-1-j]===1){
                  o++
              }
              ans+=Math.min(o,z)
              //console.log(o,z)
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