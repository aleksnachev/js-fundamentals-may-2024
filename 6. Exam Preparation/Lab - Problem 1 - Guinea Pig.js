function pig (arr){

    let foodInGrams = Number(arr[0]*1000);
    let hayInGrams = Number(arr[1]*1000);
    let coverInGrams = Number(arr[2]*1000);
    let weightInGrams = Number(arr[3]*1000);

    for (let days = 1; days<= 30 ; days++){

        if (foodInGrams >= 300){
            foodInGrams -= 300;
        }else {
            console.log("Merry must go to the pet store!");
            return;
        }

        if (days % 2===0){
            if (hayInGrams >= foodInGrams * 0.05){
                hayInGrams = hayInGrams - (foodInGrams * 0.05)
            }else {
                console.log("Merry must go to the pet store!");
                return;
            }
        }

        if (days % 3 ===0){
            if (coverInGrams >= (weightInGrams/3)){

                coverInGrams = coverInGrams - (weightInGrams/3)
            }else {
                console.log("Merry must go to the pet store!");
                return;
            }
        }


    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams/1000).toFixed(2)}, Hay: ${(hayInGrams/1000).toFixed(2)}, Cover: ${(coverInGrams/1000).toFixed(2)}.`);

}
pig((["10", "5", "5.2", "1"]));