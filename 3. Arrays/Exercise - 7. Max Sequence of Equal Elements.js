function solve (arr){
    let match=[]
    let longestArr=[]
for (let i=0; i<arr.length; i++){

    let curNum=arr[i];
    let curArr=[];
    curArr.push(curNum)
    for (let j=i+1; j<arr.length; j++){
        let secNum=arr[j];
        if (secNum===curNum){
            curArr.push(secNum)
        }else{
            if (curArr.length===longestArr.length){
                match=longestArr
            }
            if(curArr.length > longestArr.length){
                longestArr=curArr;
            }
            break;
        }
            
        if (curArr.length===arr.length){
            console.log(curArr.join(" "));
            return;
        }
    }
}


console.log(longestArr.join(" "));
}
solve ([1, 1, 1, 2, 3, 1, 3, 3])