
/**
 * Returns whatever number is passed in, or 5 if none is passed in
 * 
 * @param {number} [5] n - The number to be returned. Default value is 5.
 * @returns {number} Equal to either 5 or n
 */
function defaultNum(num) {
let num = 5
  return n
}
defaultNum(7)
/**
 * Returns whatever string is passed in, or "hello world" if none is passed in
 * 
 * @param {string} ["hello world"] str - The string to be returned
 * @returns {string} - Equal to str, or "hello world"
 */
function defaultStr(str) {
let str = "hello world"
  return 'Equal to str'
}

module.exports = {
  defaultNum,
  defaultStr,
}