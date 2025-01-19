function solve(text, word) {
  let counter = 0;

  let finalText = text.split(" ");

  for (const w of finalText) {
    if (w === word) {
      counter++;
    }
  }

  console.log(counter);
}
solve("is isis is", "is");
