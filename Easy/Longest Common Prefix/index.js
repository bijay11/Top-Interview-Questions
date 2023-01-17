const longestCommonPrefix = (strs) => {
  // if empty string, return ""
  if (!strs.length) return "";

  // when we sort, it will be sorted alphabetically so we need to check the first and last element's value only
  strs.sort();

  const firstEl = strs[0];
  const lastEl = strs.length - 1;

  for (let i = 0; i < firstEl.length; i++) {
    if (firstEl[i] !== strs[lastEl][i]) return firstEl.substring(0, i);
  }
  return firstEl;
};

console.log("test str", longestCommonPrefix(["flower", "flow", "flight"]));
