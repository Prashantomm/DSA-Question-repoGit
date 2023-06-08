
function famousSum(sum){
    if(sum<10){
        return sum;
    }
    let sum2 = 0;
    while(sum>0){
        sum2+=sum%10;
        sum = Math.floor(sum/10);
    }
    return famousSum(sum2)
    
}
let ans = famousSum(343)
console.log(ans)
