const romanToInt = (s) => {
  // if s is empty, return null
  // lowercase s
  // make hashTable with symbols and values
  // declare output variable
  // if the largest if found first, add it
  // if smallest if sound and then largest, deduct small from the large and then add it to total
  // if equal is found, add it

  if (!s) return null;
  const lowerStr = s.toLowerCase();

  const romanSymbols = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  let total = 0;
  let counter = 0;

  while (counter < lowerStr.length) {
    if (romanSymbols[lowerStr[counter]] < romanSymbols[lowerStr[counter + 1]]) {
      total +=
        romanSymbols[lowerStr[counter + 1]] - romanSymbols[lowerStr[counter]];
      counter += 2;
    } else {
      total += romanSymbols[lowerStr[counter]];
      counter++;
    }
  }
  return total;
};

console.log("test roman", romanToInt("MCMXCIV"));
