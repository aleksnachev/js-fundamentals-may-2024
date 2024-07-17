function war (arr){

    let pirateship = arr.shift().split(">")
    let warShip = arr.shift().split(">")
    let maxHealth = arr.shift()

    for (let token of arr){

        let token2=token.split(" ")
        let command = token2.shift();

        while (command !== "Retire"){

            if (command === "Fire"){

                let index = token2.shift();
                let damage = Number(token2.shift());

                if (warShip.length >= index){

                    let section = Number(warShip[index])

                    if ((section - damage) > 0){
                        section-=damage

                        if (section <= 0){
                            console.log("You won! The enemy ship has sunken.");
                            return;
                        }
                    }
                }else {
                    break;
                }

            } else if (command === "Defend"){
                    let startIndex = token2.shift()
                    let endIndex = token2.shift()

                    let damage = Number(token2.shift())
                    if (pirateship[startIndex] && pirateship[endIndex]){
                    for (let i = startIndex; i <= endIndex; i++){

                        
                        pirateship[i] -= damage

                        if (pirateship <= 0){
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }

                    }
                    }else {
                        break;
                    }
            }
        }
    }

}
war ((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
    )