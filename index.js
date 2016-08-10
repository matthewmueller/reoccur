/**
 * Export `reoccur`
 */

module.exports = loop

/**
 * Reoccur
 */

function loop (fn) {
  const d = new Deferred()
  const recur = () => run()
  const run = () => fn(recur, d.resolve, d.reject)
  return run() || d
}

/**
 * Deferred
 */

function Deferred () {
  const p = new Promise((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
  })

  this.then = p.then.bind(p)
  this.catch = p.catch.bind(p)
}
