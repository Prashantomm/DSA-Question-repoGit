
function longestIncreasingSubarray(arr){
    if(arr.length==0){
        return 0;
        
    }
    let maxLen=1;
    let len =1
    for(let i=1; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            len++
        }else{
            len=1;
        }
        maxLen = Math.max(maxLen,len)
    }
    return maxLen;
}
let arr = [1,2,3,4,5,5,5,4,5,6]
let ans =longestIncreasingSubarray(arr)
