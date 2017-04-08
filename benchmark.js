var arr = array(100, 100)

suite('bubble, sort', function() {
  bench('normal', function() {
    normal(arr)
  })

  bench('optimal', function() {
    optimal(arr)
  })
})


function optimal(array) {
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


function normal(array) {
  array = array.slice(0)
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


function array(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}
