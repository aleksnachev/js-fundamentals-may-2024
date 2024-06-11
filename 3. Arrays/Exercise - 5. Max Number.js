function solve (arr){

    let topNums=[];

    for (let i=0; i<arr.length; i++){
        let curNum=arr[i];
        let isTop=true;

        for (let j=1+i; j<arr.length; j++){
            let numToRight = arr[j]

            if (curNum<=numToRight){
                isTop=false;
                break;
            }
        }

    if (isTop){
        topNums.push(curNum);
    }
    }
    console.log(topNums.join(" "));
}