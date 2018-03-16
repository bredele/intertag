

module.exports = (chunks, ...data) => {
  const args = []
  for (var i = 0, l = data.length; i < l; i++) {
    const item = data[i]
    if (typeof item === 'function') {
      const fn = data.splice(i, 1)[0]
      const results = fn()
      let templates = [...results.shift()]
      const head = templates.shift()
      args.push(chunks[i] + head)
      data.splice(i, 0, ...results)
    } else {
      args.push(chunks[i])
    }
  }
  args.push(chunks[i])
  return [args, ...data]
}
