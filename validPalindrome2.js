
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
  
  let tc=+input[0]
  let line=1
    for(let i=0;i<tc;i++){
        let str=input[line++].trim()
        Validpalindrome(str)
        console.log(Validpalindrome(str)? "YES":"NO")
    }
  
  }
  function Validpalindrome(str){
      let l=0; 
      let r=str.length-1;
      let flag=false;
      while(l<r){
          if(str[l]==str[r]){
              l++;
              r--
          }else{
              if(flag){
                  return false
              }
              flag=true;
              if(str[l+1]==str[r]){
                  l+=2;
                  r--
              } else if(str[l]==str[r-1]){
                  l++;
                  r-=2;
             
                  
              }
          }
          
      }
      return true
      
      
      
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
  