/** @module core/static */
 
/**
 * Calculates the tangent of a Complex Number.
 * The domain of this function is C / { (k + 0.5)π : k is any integer }.
 * @static
 * @param {Complex} num - Any Complex Number which is not in the form of (k + 0.5)π
 * @returns {Complex} The result of tangent function
 */
function tan(num) {
  return this.divide(
    this.sin(num),
    this.cos(num),
  );
}

module.exports = tan;
