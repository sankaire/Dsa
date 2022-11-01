/**
 * we convert the string to an array, use the Array.sort()
 * method to sort it and convert it back to a string. 
 * Then we compare both strings and check if they are the same.
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
const isAnagram = function (s, t) {
  return sortString(s) === sortString(t);
  function sortString(string) {
    return string.split("").sort().join("");
  }
};
