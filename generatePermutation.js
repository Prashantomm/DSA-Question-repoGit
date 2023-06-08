function generatePermutations(arr,n){
    var ans= [];
    generatePermutations(arr,0);
    
    
    ans.sort();
    let res="";
    for(let i=0; i<ans.length; i++){
        
        for(let j=0; j<ans[i].length; j++){
            res+=ans[i][j]+" ";
        }
        res+="\n";
    }
    console.log(res);
    
    function generatePermutations(arr,index){
        if(index==arr.length-1){
            
            let temp= [];
            for(let i=0; i<arr.length; i++) temp.push(arr[i]);
              
            ans.push(temp);
            return;
            
        
        }
        for(let i=index; i<arr.length; i++){
            swap(arr,i,index);
            generatePermutations(arr,index+1);
            swap(arr,i,index);
        }
        
    }
    function swap(arr,i,j){
        let temp= arr[i];
        arr[i] = arr[j];
        arr[j]=temp;
    }
    
    
    
}