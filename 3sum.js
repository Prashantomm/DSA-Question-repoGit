.....
function  threeSum(n,arr){
    arr.sort((a,b)=>a-b);
    let triplets = [];
    
    for(let i=0; i<n; i++){
        if(i>0 && arr[i]==arr[i-1])continue;
        let target = 0-arr[i]
        let j=i+1;
        let k=n-1;
        while(j<k){
        let sum=arr[j]+arr[k];
            
            if(sum<target){
                    j++
            }else if(sum>target){
                    k--
            }else{
               
                triplets.push([arr[i],arr[j],arr[k]]);
                    
                while(arr[j]==arr[j+1])j++;
                while(arr[k]==arr[k-1])k--;
                j++;
                k--;
            }
            
        }
        
        
    }
    console.log(triplets.length)
    for(let m=0;m<triplets.length;m++){
        console.log(triplets[m].join(" "))
    }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line=1;
  for(let i=0; i<tc; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map (Number)
      threeSum(n,arr)
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
