function replace(str) {
  let result = "";
  let lastChar = "";

  for (const char of str) {
    if (char !== lastChar) {
      result += char;
      lastChar = char;
    }
  }

  console.log(result);
}
replace("aaaaaabbbbsssaaabbb");
