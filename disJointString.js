
function DisjointStrings(n,parstr,n1,cldStr1,n2,cldStr2){
    let parentSorted = parstr.split('').sort().join('');
    
    let comStr=cldStr1+cldStr2;
    let childSortd=comStr.split('').sort().join('');
    if(childSortd==parentSorted){
        console.log("true")
    }else{
        console.log('false')
    }
}
let n=7;
let parstr="sunrise";
let n1 = 3;
let cldstr1="sun"
let n2=4;
let cldstr2="sire"

