// string utils
/**
 * capitalizes the first letter of a string
 * @param {string} str this is the input string
 * @returns {string} this is the output string with first letter capitalized
 */
export function capitalize(str) {
  if (typeof str !== 'string' || !str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * reverses the given string
 * @param {string} str this is the input string
 * @returns {string} this is the output string with the characters reversed
 */
export function reverse(str) {
  if (typeof str !== 'string' || !str) return '';
  return str.split('').reverse().join('');
}

/**
 * truncates string to a certain length, adding '...' if needed
 * @param {string} str this is the input string
 * @param {number} length this is the maximum length including ellipsis
 * @returns {string} this is the output string truncated to the specified length
 */
export function truncate(str, length) {
  if (typeof str !== 'string' || typeof length !== 'number' || length <= 0) return '';
  if (str.length <= length) return str;
  if (length <= 3) return '.'.repeat(length);
  return str.slice(0, length - 3) + '...';
}

/**
 * i think you get the idea lmao
 */  