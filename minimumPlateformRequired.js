function runProgram(input) {
    // Write code here
    input= input.trim().split("\n");
    let n =+input[0];
    let line=1
    let arrival=[];
    let departure=[];
    let arr=input[line++].trim().split(" ")
   
    
    for(let i=0; i<n; i++){
        arrival.push(+arr[i].split(":").join("")) 
       
       
    }
    let dep=input[line++].trim().split(" ");
    for(let i=0; i<n; i++){
       departure.push(+dep[i].split(":").join("") )
       
       
    }
    minimumPlateformRequired(n,arrival,departure)
  }
  
  function minimumPlateformRequired(n,arrival,departure){
      let count=1;
      let i=1;
      let j=0;
      let ans=1;
      while(i<arrival.length && j<departure.length){
          if(arrival[i]<=departure[j]){
              count++;
              i++
          }else{
              count--;
              j++
          }
          ans=Math.max(count,ans)
      }
      console.log(ans)
      
      
  }