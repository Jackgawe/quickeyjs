// array utils
/**
 * removes duplicate values from an array
 * @param {Array} arr this is the input array
 * @returns {Array} this is the output array with unique values
 */
export function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

/**
 * splits array into chunks of given size
  * @param {Array} arr this is the input array
 * @param {number} size this is the chunk size
 * @returns {Array[]} this is the output array of chunks
 */
export function chunk(arr, size) {
  if (!Array.isArray(arr) || typeof size !== 'number' || size <= 0) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

/**
 * flattens nested arrays recursively
 * @param {Array} arr this is the input array
 * @returns {Array} this is the output flattened array
 */
export function flatten(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
}

/**
* thank you and goodnight <3
* i think you get the idea to write the rest of the utils 10/11/2025
 */  