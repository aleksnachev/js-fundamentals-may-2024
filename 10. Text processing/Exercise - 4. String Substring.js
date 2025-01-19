function substring(word, text) {
  let lowerCaseText = text.toLowerCase();
  let textWords = lowerCaseText.split(" ");

  if (textWords.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
substring();
