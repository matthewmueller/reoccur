/**
 * Module Dependencies
 */

let assert = require('assert')
let loop = require('./')

/**
 * Tests
 */

describe('reoccur', function() {
  it('should resolve', function() {
    let i = 0
    return loop(function (recur, resolve, reject) {
      if (i > 100) i-- && recur()
      resolve(i)
    }).then(v => {
      assert.equal(v, 0)
    })
  })

  it('should reject', function() {
    let i = 0
    return loop(function (recur, resolve, reject) {
      if (i > 100) i-- && recur()
      reject(i)
    }).catch(v => {
      assert.equal(v, 0)
    })
  })
})
