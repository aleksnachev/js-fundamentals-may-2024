function search (numbers, stats){

    let numForTake = stats[0];
    let numToDelete = stats[1]
    let numToSearch = stats[2]
    
    let takenArr = numbers.slice(0,numForTake)
    takenArr.splice(0,numToDelete)
    let counter = 0
    for (let i=0; i< takenArr.length; i++){
    
        let curNum = takenArr[i]
        if(curNum === numToSearch){
            counter += 1
        }
    }
    
    console.log(`Number ${numToSearch} occurs ${counter} times.`);
    }