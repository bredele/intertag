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

test('should intersect function with one interpolation template', assert => {
  assert.plan(1)
  const bar = () => {
    const name = 'beep'
    return intersect`bar and ${name}`
  }
  const args = intersect`foo and ${bar}`
  assert.deepEqual(args, [['foo and bar and ', ''], 'beep'])
})

test('should intersect function with at least two interpolation template', assert => {
  assert.plan(1)
  const bar = () => {
    const beep = 'beep'
    const boop = 'boop'
    return intersect`bar and ${beep} and ${boop}`
  }
  const args = intersect`foo and ${bar}`
  assert.deepEqual(args, [['foo and bar and ', ' and ', ''], 'beep', 'boop'])
})

test('should intersect function with complex interpolation template', assert => {
  assert.plan(1)
  const bar = () => {
    const beep = 'beep'
    const boop = 'boop'
    return intersect`bar and ${beep} and ${boop}`
  }
  const args = intersect`foo and ${bar} and ${bar}`
  assert.deepEqual(args, [['foo and bar and ', ' and ', ' and bar and ', ' and ', ''], 'beep', 'boop', 'beep', 'boop'])
})

test('should work with imbricated templates', assert => {
  assert.plan(1)
  const boop = () => intersect`bob and ${'boop'}`
  const beep = () => intersect`hello ${'you'} and ${boop}`
  const args = intersect`foo and ${beep} and ${boop}`
  assert.deepEqual(args, [['foo and hello ', ' and bob and ', ' and bob and ', ''], 'you', 'boop', 'boop'])
})

test('one final and complicated test', assert => {
  assert.plan(1)
  const galaxy = () => intersect`galaxy as ${'hawkins'} said!`
  const universe = () => intersect`universe and ${galaxy}`
  const args = intersect`hello ${'world'} and everybody in the ${universe}`
  assert.deepEqual(args, [['hello ', ' and everybody in the universe and galaxy as ', ' said!'], 'world', 'hawkins'])
})
