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
  const args = intersect`${jane} and foo and ${john} and ${john} and ${jane}`
  assert.deepEqual(args, [['', ' his sister and foo and john ', ' and john ', ' and ', ' his sister'], 'jane', 'doe', 'doe', 'jane'])
})

test('should work with imbricated interset', assert => {
  assert.plan(1)
  const args = intersect`${jane} and foo and ${complex} and ${jane} and ${john}`
  assert.deepEqual(args, [ [ '', ' his sister and foo and beep and ', ' his sister and boop and ', ' his sister and john ', ''], 'jane', 'jane', 'jane', 'doe'])
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


function complex () {
  return intersect`beep and ${jane} and boop`
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
