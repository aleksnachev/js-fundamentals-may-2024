function party (arr){

    let list =[];

    for (const token of arr) {
        
        if(token.includes("is going!")){

            let name = token.split(" is going!")[0]
            
            if(list.includes(name)){
                console.log(`${name} is already in the list!`);
            }else {
                list.push(name)
            }
            

        }else{

            let name = token.split(" is not going!")[0]

            if (list.includes(name)){
                let index = list.indexOf(name)
                list.splice(index,1)

            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
console.log(list.join("\n"));
}