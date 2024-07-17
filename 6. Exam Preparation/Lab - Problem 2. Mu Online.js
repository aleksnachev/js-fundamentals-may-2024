function game (string){

let arr = string.split("|")
let health = 100;
let bitcoin = 0;
let originalArr = arr.length
while (arr.length > 0){

    let token = arr.shift();
    let splited = token.split(" ")
    
    let command = splited.shift();
    let number = Number(splited.shift())
    if (command === "potion"){

       
       if (health+number >100){
            number = 100-health;
            health+=number
       }else {
        health+=number
       }
        console.log(`You healed for ${number} hp.`);
        console.log(`Current health: ${health} hp.`);
    }else if (command === "chest"){
        
        bitcoin+=number;
        console.log(`You found ${number} bitcoins.`);
    }else {

        health-=number;

        if (health>0){
            console.log(`You slayed ${command}.`);
        }else {
            console.log(`You died! Killed by ${command}. `);
            console.log(`Best room: ${originalArr-arr.length}`);
            return;
        }
    }

}
// "You've made it!"
// "Bitcoins: {bitcoins}"
// "Health: {health}"

console.log("You've made it!");
console.log(`Bitcoins: ${bitcoin}`);
console.log(`Health: ${health}`);
}
game ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");