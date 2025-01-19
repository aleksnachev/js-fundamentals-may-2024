function extractFile(path) {
  let splitedPath = path.split("\\");
  let finalChar = splitedPath.pop();

  let splitedFinalChar = finalChar.split(".");

  let nameOfFile = splitedFinalChar[0];
  let extension = splitedFinalChar[1];

  if (splitedFinalChar.length <= 2) {
    let nameOfFile = splitedFinalChar[0];
    let extension = splitedFinalChar[1];
    console.log(`File name: ${nameOfFile}`);
    console.log(`File extension: ${extension}`);
  } else {
    let extension = splitedFinalChar.pop();
    let nameOfFile = splitedFinalChar.join(".");
    console.log(`File name: ${nameOfFile}`);
    console.log(`File extension: ${extension}`);
  }
}
extractFile("C:\\Internal\\training-internal\\Template.back.pptx");
