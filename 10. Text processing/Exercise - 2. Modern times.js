function modernTimes(str) {
  let splitedStr = str.split(" ");
let result = []
  for (const token of splitedStr) {
    let negative =0
   
    if (token.length > 1 && token.includes("#")) {
        let fixedToken = token.substring(1);
        
        for (const t of fixedToken) {
        let charAsAski = t.charCodeAt();
        
        if (
          (charAsAski >= 65 && charAsAski <= 90) ||
          (charAsAski >= 97 && charAsAski <= 122)) {

          } else {
          negative +=1
        }
        
      }
      if (!result.includes(fixedToken) && negative === 0){
        result.push(fixedToken)
    }
     
    }

    
  }


  console.log(result.join("\n"));
}
modernTimes("Nowadays everyone uses # to tag a #special1 word in #socialMedia");
