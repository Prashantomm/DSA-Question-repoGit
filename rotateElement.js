//Enter code here
function rotatematrix(arr,n){
    let top=0,left=0,right=n-1,bottom=n-1;
    while(top<bottom && left < right){
        let prev = arr[top+1][left]
        
        for(let j=left; j<=right; j++){
            let prev1 =  arr[top][j];
            arr[top][j] = prev;
            prev = prev1;
        }
        top++;
        
        
        for(let i=top; i<=bottom; i++){
            let prev1 = arr[i][right];
            arr[i][right] = prev;
            prev = prev1;
        }
        right--;
        
        for(let j=right; j>= left; j--){
            let prev1 = arr[bottom][j];
            arr[bottom][j] = prev;
            prev = prev1;
        }
        bottom--;
        
        
        for(let i=bottom; i>=top; i--){
            let prev1 = arr[i][left];
            arr[i][left] = prev;
            prev = prev1;
        }
        left++;
        
        
        
    }
     for (let i = 0; i < arr.length; i++) {
        let row = '';
        for (let j = 0; j < arr[i].length; j++) {
            row += arr[i][j] + ' ';
        }
        console.log(row);
    }       
   
}

function runProgram(input){
    input = input.trim().split("\n");
    let n = +input[0];
    let line = 1;
    let arr=[]
    for(let i=0; i<n; i++){
        arr.push(input[line++].trim().split(" ").map(Number))
    }
    rotatematrix(arr,n)
   
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