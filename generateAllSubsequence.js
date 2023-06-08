function generateallsubsequence(n,str){
    let sub_str=[];

    generateallsubsequence(str,sub_str,0);

     function generateallsubsequence(str,sub_str,position){
         if(sub_str.length!=0){
             console.log(sub_str.join(""));
         }
    
         if(str.length==position){
             return;
         }
         for(let i=position ;i<str.length; i++){
             sub_str.push(str[i]);
             generateallsubsequence(str,sub_str,i+1);
             sub_str.pop();
         }
     }
    
}