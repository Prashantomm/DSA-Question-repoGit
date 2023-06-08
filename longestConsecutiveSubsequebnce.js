
function Longest(n,arr){
    
    arr.sort((a,b)=>a-b);
    // console.log(arr)
    let max=1;
    let count=1;
    for(let i=1; i<n; i++){
        if(arr[i]-arr[i-1]==1){
            count++;
        }else {
            
           
            count=1
        }
         max=Math.max(count,max)
    }
    return max;
}
let n=6;
let arr=[1,4,2,3,4,5]
let ans=Longest(n,arr)
