function solve (arr1, arr2){

    let arr3 = [];
    
    for (let i=0; i<arr1.length; i++){
        let curEl = arr1[i];
        let curEl2 = arr2[i];
        if (i % 2 === 0 ){
            sum=Number(curEl)+Number(curEl2);
            arr3.push(sum)
        }else {
            con=curEl + curEl2;
            arr3.push(con)
        }
    
    }

    console.log(arr3.join(" - "));

}
solve (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)