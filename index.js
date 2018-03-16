

module.exports = (chunks, ...data) => {
  const args = []
  let tail = ''
  for (var i = 0, l = data.length; i < l; i++) {
    const item = data[i]
    if (typeof item === 'function') {
      const fn = data.splice(i, 1)[0]
      const results = fn()
      let templates = [...results.shift()]
      const head = templates.shift()
      args.push(tail + chunks[i] + head)
      tail = templates.pop()
      add(args, templates)
      data.splice(i, 0, ...results)
    } else {
      args.push(chunks[i])
    }
  }
  if (l === args.length) args.push(tail + chunks[i])
  return [args, ...data]
}



function add (array, chunks) {
  if (chunks[0] === '') chunks.shift()
  array.push(...chunks)
}
