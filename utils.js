
/**
 * @constant {Function} - Adds zeros to the beginning of a given number up to the given size
 * @param {Number} number - The given number
 * @param {Number} size - The size to pad with zero until
 */
export const padWithZero = (number, size) => {
  var s = number+"";
  while (s.length < size) s = "0" + s;
  return s;
}