function powerFunction(a,b){
    // console.log(a**b)
    if(a==0){
        return 0;
    }else if(b==0){
        return 1;
        
    }
    return a*powerFunction(a,b-1);
        
    
}