// object utils
/**
 * deeply merges two objects
 * @param {Object} obj1 this is the first object
 * @param {Object} obj2 this is the second object
 * @returns {Object} this is the output merged object
 */
export function merge(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || !obj1 || !obj2) return {};
  const out = {...obj1};
  for (const [key, value] of Object.entries(obj2)) {
    if (typeof value === 'object' && value && typeof out[key] === 'object' && out[key]) {
      out[key] = merge(out[key], value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

/**
 * checks if an object has no own properties
 * @param {Object} obj this is the input object
 * @returns {boolean} this is the output boolean true if empty
 */
export function isEmpty(obj) {
  if (typeof obj !== 'object' || obj === null) return true;
  return Object.keys(obj).length === 0;
}

/**
 * deep clones a plain object or array
 * @param {Object|Array} obj this is the input object/array
 * @returns {Object|Array} this is the output deep cloned object/array
 */
export function clone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(clone);
  const out = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      out[key] = clone(obj[key]);
    }
  }
  return out;
}

/**
 * i think you get the idea to write the rest of the utils 10/11/2025
 */  