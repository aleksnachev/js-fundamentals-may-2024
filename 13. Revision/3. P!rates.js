function pirates(arr){

    let allCities = {}
    class City {
        constructor(population,gold){
            this.population = population,
            this.gold = gold
        }
    }
    
    
    for (const el of arr) {
        if (el=="Sail"){
            break
        }
        let splittedToken = el.split("||")
        city = splittedToken.shift()
        popul = Number(splittedToken.shift())
        gold1 = Number(splittedToken.shift())
        
        let keys = Object.keys(allCities)
        if (keys.includes(city)){
            allCities[city].population += popul
            allCities[city].gold += gold1
        }else{
            let newCity = new City(popul,gold1)
            allCities[city] = newCity
        }
        
    }
    
    
    for (const token of arr) {
        if (token == "End"){
            break;
        }
        
        let splittedToken1 = token.split("=>")
        let command = splittedToken1.shift()
        
        if (command == "Plunder"){
            let town = splittedToken1.shift()
            let people = Number(splittedToken1.shift())
            let goldTaken = Number(splittedToken1.shift())
            allCities[town].population -= people
            allCities[town].gold -= goldTaken
            
            console.log(`${town} plundered! ${goldTaken} gold stolen, ${people} citizens killed.`);
            if (allCities[town].population <=0 || allCities[town].gold <= 0){
                console.log(`${town} has been wiped off the map!`);
                delete allCities[town]
            }
            
        }else if (command == "Prosper"){
            let town1 = splittedToken1.shift()
            let goldGiven = Number(splittedToken1.shift())
            
            
            if (goldGiven<0){
                console.log("Gold added cannot be a negative number!");
                continue
            }else{
                allCities[town1].gold += goldGiven
                console.log(`${goldGiven} gold added to the city treasury. ${town1} now has ${allCities[town1].gold} gold.`);
                
            }
            
            
        }
        

        
    }
    
    if (Object.keys(allCities).length == 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
        
    }else {
        let keysCount = Object.keys(allCities).length
        console.log(`Ahoy, Captain! There are ${keysCount} wealthy settlements to go to:`);
        
        
        let entries = Object.entries(allCities)
        
    
        for (const entry of entries) {
            let town2 = entry.shift()
            let obj = entry.shift()
            console.log(`${town2} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`);
            
        
        }
    } 

}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
    
    
    