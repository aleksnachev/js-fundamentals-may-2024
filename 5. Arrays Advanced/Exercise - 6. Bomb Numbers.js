function bomb (n1,n2){


    let bombNumber = n2[0]
    let pow = n2[1]
    
    for (let i=0; i<n1.length;i++){
        let curNum = n1[i];
       if (curNum === bombNumber){
        n1.splice(i,pow+1)
        n1.splice(i-pow,pow)
       } 
    }
    let sum=0
    for (let j=0;j<n1.length; j++){
        sum += n1[j]
    }
    
    console.log(sum);
    }