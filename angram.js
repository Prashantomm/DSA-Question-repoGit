function IsAnagram(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let obj={};
    for(let letter of str1){
        obj[letter] =( obj[letter] || 0)+1
    }

    for(let itm of str2){
        if(!obj[itm]){
            return false;
        }
        obj[itm]-=1;
    }
}

let ans = IsAnagram(hello,ollhe);
console.log(ans)