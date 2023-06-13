function pashaGroupAnagram(n,str){
    let obj = {}
   
    for(let i=0; i<n; i++){
        let curr = str[i];
        let sortstr = curr.split("").sort();
        if(obj[sortstr] === undefined){
            obj[sortstr]=[]
            obj[sortstr].push(curr)
        }else{
            obj[sortstr].push(curr)
        }
    }
    // console.log(obj)
    for(let key in obj){
        console.log(obj[key].length)
        console.log(obj[key].join("\n"))
    }
    
}