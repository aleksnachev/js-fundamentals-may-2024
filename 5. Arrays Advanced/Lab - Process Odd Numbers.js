function solve(arr) {
let newArr=[]
    for (let i=0;i<arr.length;i++){

        let char = arr[i]
        if (i%2===1){
            newArr.push(char*2)
        }
    }
    console.log((newArr.reverse()).join(" "));
}
solve ([10,15,20,25])
   
