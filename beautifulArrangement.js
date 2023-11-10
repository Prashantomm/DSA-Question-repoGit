function counter(n) {
    let c = 0;
  
    function calculate(pos, vis) {
        
          if (pos > n){
               
        c++;
        return;
          }
      
      
      for (let i = 1; i <= n; i++) {
        if (!vis[i] && (i % pos === 0 || pos % i === 0 )) {
          vis[i] = true;
          calculate(pos + 1, vis);
          vis[i] = false;
        }
      }
    }
  
    let vis = new Array(n + 1).fill(false);
    calculate(1, vis);
    return c;
  }
  
  console.log(counter(2));