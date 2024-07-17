function train (arr){

    let wagons = arr.shift().split(' ').map(Number)

    let capacity = Number(arr.shift())

    for (let i=0; i<arr.length; i++){

        let command = arr[i]

        if (command.includes('Add')){
            let tokens = command.split(" ")
            let passengers = Number(tokens[1])
            wagons.push(passengers)
        }else {
            let newPassengers = Number(command)
            for (let j=0;j<wagons.length;j++){

                if (wagons[j] + newPassengers <= capacity){

                    wagons[j]+=newPassengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
 }