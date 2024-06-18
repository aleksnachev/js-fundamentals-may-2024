function solve (char1,char2){

    let code1=char1.charCodeAt();
    let code2 = char2.charCodeAt();
    const startCode=Math.min(code1,code2);
    const endCode = Math.max(code1,code2);
    let middleChars = [];

    for (let curCode = startCode+1;curCode<endCode;curCode++){
        let curChar = String.fromCharCode(curCode)
        middleChars.push(curChar)
    }
    console.log(middleChars.join(" "));
}