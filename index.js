/**
 * Dependencie(s)
 */

const compose = require('tag-compose')

/**
 * Imbricate templates literals together using function interpolation.
 *
 * @param {Array} literals
 * @return {Array}
 * @api public
 */

module.exports = (literals, ...data) => {
  // literals are frozen when created by JavaScript
  const copy = literals.slice(0)
  const chunks = []
  let i = 0
  data.map((element, idx) => {
    if (typeof element === 'function') {
      // literals are frozen when created by JavaScript
      const template = element().slice(0)
      const length = copy.length
      compose(copy, template.shift(), i)
      i = i + (copy.length - length + 1)
      chunks.push(...template)
    } else {
      chunks.push(element)
      i++
    }
  })
  return [copy, ...chunks]
}
