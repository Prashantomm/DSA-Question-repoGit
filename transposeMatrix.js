function transposeTheMatrix(N, M, matrix){
    //write code here
   
    for(let i=0; i<M;i++){
         let str="";
        for (let j=0; j<N; j++){
            str+=matrix[j][i]+" "
         
        }
        console.log(str)
     
    }
    
  
}