function danceNight(n1, n2, boy, girl) {
    boy.sort((a, b) => a - b);  
    girl.sort((a, b) => a - b); 

    let i = 0; 
    let j = 0; 

    while (i < n1 && j < n2) {
        if (boy[i] > girl[j]) {
            i++; 
        }
        j++; 
    }

    if (i === n1) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
function runProgram(input){
    input = input.trim().split("\n");
    let tc  = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let[n1,n2] = input[line++].trim().split(" ").map(Number)
        let boy = input[line++].trim().split(" ").map(Number);
        let girl = input[line++].trim().split(" ").map(Number);
        danceNight(n1,n2,boy,girl)
    }
   
}