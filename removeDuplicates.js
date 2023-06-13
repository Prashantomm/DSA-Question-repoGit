
function removeDuplicates(str){
    
    let res = '';
    let i = 0;
    while (i < str.length) {
      if (str[i] !== str[i+1]) {
        res += str[i];
        i++;
      } else {
        while (str[i] === str[i+1]) {
          i++;
        }
        i++;
      }
    }
    if (res !== str && res.length > 0) {
      return removeDuplicates(res);
    } else {
      return res.length>0 ?res:"Empty String";
    }
  }
  let str = "subhamupadhyay"
let ans=removeDuplicates(str);
