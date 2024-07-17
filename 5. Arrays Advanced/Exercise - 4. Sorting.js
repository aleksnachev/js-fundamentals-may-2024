function sorting (arr){

    let resultArr = []
    let sortedArr = arr.sort((a,b) => b-a)
    
    while(sortedArr.length > 0){
        let firstElement = sortedArr.shift()
        resultArr.push(firstElement)

        if (sortedArr.length > 0){
            let lastElement = sortedArr.pop();
            resultArr.push(lastElement)
        }
    }
console.log(resultArr.join(' '));
}