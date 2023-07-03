function masaiCTO(n,arr){
    let bag="";
    let c=0;
    for(let i=0; i<n; i++){
        if(arr[i]==1){
            c++
            bag+=i;
            break;
        }
    }
    if(c==1){
        console.log(bag)
    }else{
        console.log("-1")
    }
}
let n=5
let arr=[0,0,0,1,1]
console.log(masaiCTO(n,arr))
