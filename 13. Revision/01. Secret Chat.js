function secret(arr){

    let concealedMessage = arr.shift()

    for (const token of arr) {
        if (token == "Reveal"){
            return
        }

        let splittedToken = token.split(":|:")
        let commend = splittedToken.shift()

        if (commend == "ChangeAll"){
            console.log(splittedToken);
            
            
        }else if (commend == "Reverse"){
            console.log(splittedToken);


        }else if (commend == "InsertSpace"){
            console.log(splittedToken);

        }
        
        
    }


}
secret ([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )