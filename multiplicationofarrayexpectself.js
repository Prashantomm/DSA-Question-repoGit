.
function runProgram(input) {
    input = input.trim().split("\n");
  let tc = +input[0];
  let line=1;
  for(let i=0; i<tc; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map (Number)
      productexpectSelf(n,arr)
  }
  
}
function  productexpectSelf(n,arr){
    // let ans=[];
    // let mul=1
    // for(let i=0; i<n;i++){
    //     let mul=1
    //     for(let j=0;j<n;j++){
    //         if(i!=j){
    //             mul*=arr[j] 
    //         }
           
           
            
    //     }
    //     ans.push(mul)
    // }
    // console.log(ans.join(" "))
    
   let ans=[];
   
   let mul1=1;
   let mul2=1;
   for(let i=0; i<n; i++){
       ans[i]=mul1;
       mul1*=arr[i]
   }
   //console.log(mul1)
   for(let i=n-1; i>=0; i--){
       ans[i]*=mul2;
       
       mul2*=arr[i]
   }
   console.log(ans.join(" "))
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
