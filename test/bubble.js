/**
 * Test dependencies
 */

const test = require('tape')
const sort = require('..')


test('should sort array of numbers', assert => {
  assert.plan(1)
  assert.deepEqual(
    sort([6, 3, 98, 0, 1, 65,7]),
    [0, 1, 3, 6, 7, 65, 98]
  )
})

test('should sort array of strings', assert => {
  assert.plan(1)
  assert.deepEqual(
    sort(['a', 'bc', 'c', 'b', 'bd', 'ab', 'd']),
    ['a', 'ab', 'b', 'bc', 'bd', 'c', 'd']
  )
})
