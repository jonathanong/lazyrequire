
var assert = require('assert')

var lazy = require('..')(require)

it('should lazy("url")', function () {
  var url = lazy('url')

  assert.equal(url(), require('url'))
  assert.equal(url(), require('url'))
  assert.equal(url(), require('url'))
})

it('should lazy("..")', function () {
  var mod = lazy('..')

  assert.equal(mod(), require('..'))
  assert.equal(mod(), require('..'))
  assert.equal(mod(), require('..'))
})
