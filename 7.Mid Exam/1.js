function games (arr){

    let totalDays = Number(arr.shift());
    let totalPeople = Number(arr.shift());
    let groupEnergy = Number(arr.shift());

    let waterForPerson = Number(arr.shift());
    let foodForPerson = Number(arr.shift());

    let totalWater = totalDays*totalPeople*waterForPerson;
    let totalFood = totalDays*totalPeople*foodForPerson;

    for (let day = 1; day <= totalDays; day++){

        let todayEnergy = Number(arr[day-1]);
        groupEnergy -= todayEnergy;

        if (groupEnergy <=0 ){
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        if (day %2 ===0){

            totalWater *= 0.7;
            groupEnergy *= 1.05

        }

        if (day % 3 === 0){

            totalFood -= totalFood/totalPeople;
            groupEnergy*= 1.1
        }
    }

console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}
games (["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])
    
    