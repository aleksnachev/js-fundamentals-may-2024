function revealWord(words, text) {
  let wordsAsArr = words.split(", ");
  let censordWords = words.split(", ").map((word) => "*".repeat(word.length));
  let textArr = text.split(" ");

  for (const cenWord of censordWords) {
    let i = 0;
    for (const token of textArr) {
      if (token === cenWord) {
        textArr.splice(i, 1, wordsAsArr[censordWords.indexOf(cenWord)]);
      }

      i++;
    }
  }

  console.log(textArr.join(" "));
}
revealWord(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
