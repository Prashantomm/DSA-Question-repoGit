function stoneAge(n,arr){
    let i=0;
    let j=n-1;
    let lSum=arr[0];
    let rSum=arr[j];
    let max = 0;
    while(i<j){
        if(lSum===rSum){
            max=rSum;
            i++;
            j--;
            lSum+=arr[i];
            rSum+=arr[j]
            
        }else if(rSum>lSum){
            i++;
            lSum+=arr[i]
        }else{
            j--;
            rSum+=arr[j]
        }
    }
    console.log(max)
}