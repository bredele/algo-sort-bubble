

/**
 * Sort array using bubble sort algorithm.
 *
 * @param {Array} array
 * @return {Array}
 * @api public
 */

module.exports = function(array) {
  array = array.slice(0)
  var length = array.length
  while(length) {
    var i = 0
    var sorted = true
    while(i < (length - 1)) {
      if(array[i + 1] < array[i]) {
        var tmp = array[i + 1]
        array[i + 1] = array[i]
        array[i] = tmp
        sorted = false
      }
      i++
    }
    if(sorted) return array
    length--
  }
  return array
}
