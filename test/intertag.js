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


/**
 * Tagged templates partial.
 *
 * @return {Array}
 * @api private
 */

function partial () {
  const who = 'world'
  return tagged`hello ${who}`
}


/**
 * Return tagged template.
 *
 * @return {Array}
 * @api privtate
 */

function tagged () {
  return argumentws
}
