function minerTask (arr){

    let recourseQuantities = {}

    for (let i = 0; i<arr.length; i+= 2){
        let resource = arr[i]
        let quantity = Number(arr[i+1])

        if(resource in recourseQuantities){
            recourseQuantities[resource] += quantity
        }else {
            recourseQuantities[resource] = quantity
        }
    }
let recouseEntries = Object.entries(recourseQuantities)

for (let [resource,quantity] of recouseEntries ){
    console.log(`${resource} -> ${quantity}`);
}
}minerTask ([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])
    