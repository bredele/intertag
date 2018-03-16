/**
 * Dependencie(s)
 */

const test = require('tape')
const intersect = require('..')


test('should be a tagged template', assert => {
  assert.plan(1)
  const bar = 'beep'
  const args = intersect`foo and ${bar}`
  assert.deepEqual(args, [['foo and ', ''], 'beep'])
})


test('should intersect when interpolate function', assert => {
  assert.plan(1)
  const args = intersect`foo and ${partial}`
    assert.deepEqual(args, [['foo and john ', ''], 'doe'])
})


/**
 * Tagged templates partial.
 *
 * @return {Array}
 * @api private
 */

function partial () {
  const who = 'doe'
  return tagged`john ${who}`
}


/**
 * Return tagged template.
 *
 * @return {Array}
 * @api privtate
 */

function tagged (...args) {
  return args
}
