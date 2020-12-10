
/**
 * Returns whatever number is passed in, or 5 if none is passed in
 * 
 * @param {number} [5] n - The number to be returned. Default value is 5.
 * @returns {number} Equal to either 5 or n
 */
function defaultNum(n) {
    return 5 || n
}
defaultNum()
/**
 * Returns whatever string is passed in, or "hello world" if none is passed in
 * 
 * @param {string} ["hello world"] str - The string to be returned
 * @returns {string} - Equal to str, or "hello world"
 */
function defaultStr() {

}

module.exports = {
  defaultNum,
  defaultStr,
}