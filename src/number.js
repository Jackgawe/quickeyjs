// number utils
/**
 * clamps a number between min and max
 * @param {number} num this is the input number
 * @param {number} min this is the minimum
 * @param {number} max this is the maximum
 * @returns {number} this is the output number clamped between the minimum and maximum
 */
export function clamp(num, min, max) {
  if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') return NaN;
  return Math.min(Math.max(num, min), max);
}

/**
 * returns a random integer between min (inclusive) and max (inclusive)
 * @param {number} min this is the minimum
 * @param {number} max this is the maximum
 * @returns {number} this is the output random integer between the minimum and maximum
 */
export function randomInt(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number' || min > max) return NaN;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * returns the average of given numbers
 * @param {...number} nums this is the input numbers
 * @returns {number} this is the output mean value
 */
export function average(...nums) {
  if (!nums.length || nums.some(n => typeof n !== 'number')) return NaN;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

/**
 * i think you get the idea to write the rest of the utils 10/11/2025
 */  