var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  //   const sortS = s.split("").sort().join("");
  //   const sortT = t.split("").sort().join("");

  //   return sortS === sortT;

  const countLetterFound = {};

  for (const letter of s) {
    countLetterFound[letter] = (countLetterFound[letter] || 0) + 1;
  }

  for (const letter of t) {
    if (!countLetterFound[letter]) return false;
    countLetterFound[letter]--;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"));

//s = "anagram", t = "nagaram"
