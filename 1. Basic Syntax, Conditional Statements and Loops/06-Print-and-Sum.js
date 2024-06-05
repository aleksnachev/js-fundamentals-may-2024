function printAndSum (start,end){
    let sum=0;
    let allNums="";
    for (let curNum = start; curNum <= end; curNum++){
        sum+=curNum;
        allNums+=curNum + ' ';
    }
    console.log(allNums);
    console.log(`Sum: ${sum}`);

}
printAndSum (5, 10)