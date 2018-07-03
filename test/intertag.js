/**
 * Dependencie(s)
 */

const test = require('tape')
const intersect = require('..')


test('should be a regular tagged template', assert => {
  assert.plan(1)
  const bar = 'beep'
  const args = intersect`foo and ${bar}`
  assert.deepEqual(args, [['foo and ', ''], 'beep'])
})
