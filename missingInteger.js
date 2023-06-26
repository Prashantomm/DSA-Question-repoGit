function missingInteger(arr){
    let n=arr.length+1;
    let sum=0;
    for(let i=0; i<arguments.length;i++){
        sum+=arr[i]
    }
    let sum2=n*(n+1)/2;
    console.log(sum2-sum)
}
let arr=[1,3,4,5]
let ans=missingInteger(arr)
