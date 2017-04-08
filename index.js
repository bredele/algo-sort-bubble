

/**
 *
 */

module.exports = function(array) {
  var length = array.length
  while(length) {
    var i = 0
    while(i < (length - 1)) {
      if(array[i + 1] < array[i]) {
        var tmp = array[i + 1]
        array[i + 1] = array[i]
        array[i] = tmp
      }
      i++
    }
    length--
  }
  return array
}
