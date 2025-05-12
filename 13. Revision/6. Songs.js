function songs(arr){
    let endArr = []
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    let k = Number(arr.shift())

    for (let q=0; q<k; q++){
        let curToken = arr.shift()
        let splittedToken = curToken.split("_")
        typeList1 = splittedToken[0]
        name1 = splittedToken[1]
        time1 = splittedToken[2]

        let newSong = new Song(typeList1,name1,time1)
        endArr.push(newSong)
        
    }

    let searchTypeList = arr.shift()
    if (searchTypeList == "all"){
        for (const el1 of endArr) {
            console.log(el1.name);
            
            
        }
        return
    }
    for (const el of endArr) {

        if (el.typeList == searchTypeList){
            console.log(el.name);
            
        }
        
    
    }

}
songs ([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )