function masaiPalSubString(S){
    //write code here
   let max=-Infinity;
for(let i=0;i<S.length;i++){
     let bag="";
     for(let j=i;j<S.length;j++){
        bag=bag+S[j];
        if(palindrome(bag) && bag.length>max){
            max=bag.length;
        }
    
     }
}
console.log(max);

}
function palindrome(str){
    let reverse="";
    for(let k=str.length-1;k>=0;k--){
        reverse+=str[k];
    }
    if(reverse==str){
        return true;
    }else{
        return false;
    }
}