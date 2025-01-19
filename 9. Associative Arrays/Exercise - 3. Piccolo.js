function piccolo (arr){

    let parking = {}

    for (let i =0; i<arr.length; i++){

        let token = arr[i].split(", ")
        let command = token[0]
        let plateNum = token[1]

       

        if (command === "IN"){

            parking[plateNum] = command

        }else {

            delete parking[plateNum]
        }
        
    }

    let entries = Object.entries(parking)
    let sortedArr = entries.sort((a,b) => a[0].localeCompare(b[0]))
if (sortedArr.length === 0){
    console.log("Parking Lot is Empty");
}else {
    for (const [plate,com] of sortedArr) {
        
        console.log(plate);
    }
}

}