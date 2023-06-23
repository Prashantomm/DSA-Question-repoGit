function equilibriumElement(N, arr){
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }
    // console.log(sum)
    for (let i = 0; i < N; i++) {
        sum -= arr[i];
        if (leftSum === sum) {
            console.log(i)
            break;
        }
        leftSum += arr[i];
    }
    
    // console.log(sum)
    if(leftSum!== sum ){
        
    
        console.log(-1)
    }
}