
/**
 * Returns whatever number is passed in, or 5 if none is passed in
 * 
 * @param {number} [5] n - The number to be returned. Default value is 5.
 * @returns {number} Equal to either 5 or n
 */
function defaultNum(n) {
return n || 5
}

/**
 * Returns whatever string is passed in, or "hello world" if none is passed in
 * 
 * @param {string} ["hello world"] str - The string to be returned
 * @returns {string} - Equal to str, or "hello world"
 */
function defaultStr(str) {
return str || "hello world"
}

// Solution using default parameter
function defaultStr1(str="hello world"){
  return str
}

console.log(defaultStr1("a different string"))
console.log(defaultStr1())


module.exports = {
  defaultNum,
  defaultStr,
}