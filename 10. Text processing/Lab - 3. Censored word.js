function censoredWord(text, word) {
  let censoredWord = "*".repeat(word.length);
  while (text.includes(word)) {
    text = text.replace(word, censoredWord);
  }

  console.log(text);
}
censoredWord();
