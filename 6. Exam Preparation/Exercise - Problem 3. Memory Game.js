function memoryGame (arr){

    let integers = arr.shift().split(" ")
    let moves=0
    
    while (arr[0] !== "end"){
        moves++;
        let command = arr.shift().split(" ");
        let firstIndex = Number(command.shift())
        let secondIndex= Number(command.shift())
        if (!arr.includes(arr[firstIndex]) || !arr.includes(arr[secondIndex])){

            arr.splice((arr.length/2),0,`-${moves}a`)
            console.log("Invalid input! Adding additional elements to the board");

        }
        if (arr[firstIndex] === arr[secondIndex]){

            arr.splice(firstIndex,0)
            arr.splice(secondIndex,0)

            console.log(`Congrats! You have found matching elements - ${arr[firstIndex]}!`);
        }else {
            console.log("Try again!");
        }

        if(arr.length === 0){
            console.log(`You have won in ${moves} turns!`);
            return;
        }


    }


//  "Sorry you lose :(
// {the current sequence's state}"

console.log("Sorry you lose :(");
console.log(`${arr}`);


}
memoryGame ([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])