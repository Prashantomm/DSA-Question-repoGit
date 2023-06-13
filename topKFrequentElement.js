function topKFrequent(n,k,arr){
    let obj={};
    let arr1 = [];
    let ans = [];
    for(let i=0; i<n; i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }else{
            obj[arr[i]]=1;
        }
    }
    for(let key in obj){
        arr1.push([key,obj[key]])
    }
    // console.log(arr1)
    arr1=arr1.sort((a,b)=>b[1]-a[1]);
    // console.log(arr1)
    for(let j=0; j<k; j++){
        ans.push(arr1[j][0])
    }
    return ans.sort((a,b)=>a-b);
    
}