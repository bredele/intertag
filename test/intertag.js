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


test('should intersect two tagged template', assert => {
  assert.plan(1)
  const args = intersect`foo and ${john}`
  assert.deepEqual(args, [['foo and john ', ''], 'doe'])
})


test('should intersect more than two tagged template', assert => {
  assert.plan(1)
  const args = intersect`foo and ${john} and ${john}`
  assert.deepEqual(args, [['foo and john ', ' and john ', ''], 'doe', 'doe'])
})


/**
 * Tagged templates partial.
 *
 * @return {Array}
 * @api private
 */

function john () {
  const who = 'doe'
  return tagged`john ${who}`
}


/**
 * Tagged templates partial.
 *
 * @return {Array}
 * @api private
 */

function jane () {
  const who = 'jane'
  return tagged`${who} his sister`
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
