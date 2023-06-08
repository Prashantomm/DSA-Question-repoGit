
function fibonacci(n){
    if(n<=1){
        return n;
    }else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}
function runProgram(input){
    input=input.trim().split("\n");
    let n=+input[0];
    console.log(fibonacci(n))
   
}
if (process.env.USERNAME === "") {
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