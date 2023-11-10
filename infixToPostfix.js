function pres(c){
    if(c=='^'){
        return 3;
        
    }else if(c=="/" || c=="*"){
        return 2;
    }else if(c=="+" || c=="-"){
        return 1
    }else{
        return -1;
    }
}
function convert(s){
    let stk=[];
    let res="";
    for(let i=0; i<s.length; i++){
        if((s[i]>="a" && s[i]<="z") || (s[i]>="A" && s[i]<="Z")){
            res+=s[i];
        }else if(s[i]=="("){
            stk.push(s[i])
        }else if(s[i]==")"){
            while(stk.length!=0 && stk[stk.length-1]!="("){
                res+=stk[stk.length-1];
                stk.pop()
            }
            if(stk.length!=0){
                stk.pop();
            }
        }else{
            while(stk.length!=0 && pres(stk[stk.length-1])>pres(s[i])){
                res+=stk[stk.length-1];
                stk.pop();
            }
            stk.push(s[i])
        }
    }
    while(stk.length!=0){
            res+=stk[stk.length-1];
            stk.pop();
        }
        console.log(res)
    
}

let s="(a-b/c)*(a/k-l)"
convert(s);