function partyOrNot(N,C,R,arr){
    arr.sort((a,b)=>a-b)
            let count = 0;
            for(let i =0; i<N;i++){
                if(R-arr[i]>=0){
                    count++;
                    R-=arr[i];
                }
            }
            if(count>=C){
                 console.log("Party");
            }else{
                console.log("Sad");
            }
        
    }
    
    
            
    function runProgram(input) {
      // Write code here
      input=input.trim().split('\n');
      let [N,C,R]=input[0].trim().split(" ").map(Number);
      let arr = input[1].trim().split(" ").map(Number);
      partyOrNot(N,C,R,arr)
    }