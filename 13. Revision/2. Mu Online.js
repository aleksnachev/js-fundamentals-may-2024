function solve(str){

    let health = 100
    let bitcoins = 0
    let room = 0

    let inputArr = str.split("|")
    
    for (const token of inputArr) {
        let splittedToken = token.split(" ")
        let command = splittedToken[0]
        let num = Number(splittedToken[1])
        room++
        if (command == "potion"){
            let firstHealth = health
            health+=num
            if (health>100){
                health=100
            }
            console.log(`You healed for ${health-firstHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
            
            
        }else if (command == "chest"){
            bitcoins+=num
            console.log(`You found ${num} bitcoins.`);
            

        }else{
            health -= num
            if (health>0){
                console.log(`You slayed ${command}.`);
                
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                return;
                
            }

        }
        
    }
    
"You've made it!"
"Bitcoins: {bitcoins}"
"Health: {health}"
console.log("You've made it!");
console.log(`Bitcoins: ${bitcoins}`);
console.log(`Health: ${health}`);




}
solve ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
