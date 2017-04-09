

/**
 * Sort array using bubble sort algorithm.
 *
 * @param {Array} array
 * @return {Array}
 * @api public
 */

module.exports = function(array, distance) {
  distance = distance || ((prev, next) => prev < next)
  array = array.slice(0)
  var length = array.length - 1
  var swapped
  do {
    swapped = false
    for(var i = 0; i < length; i++) {
      var big = array[i]
      var small = array[i+1]
      if(distance(small, big)) {
        array[i] = small
        array[i + 1] = big
        swapped = true
      }
    }
  } while (swapped)
  return array
}
