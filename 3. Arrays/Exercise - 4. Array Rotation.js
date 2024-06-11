function solve (arr,rotations){

    for (let curRotation =1;curRotation<=rotations; curRotation++){
        let firstElement = arr.shift();
        arr.push(firstElement)
    }
    console.log(arr.join(" "));
}