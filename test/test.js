'use strict'

/* eslint-env mocha */

const child_process = require('child_process')
const assert = require('assert')

const lazy = require('..')(require)

it('should lazy("url")', () => {
  const url = lazy('url')

  assert.equal(url(), require('url'))
  assert.equal(url(), require('url'))
  assert.equal(url(), require('url'))
})

it('should lazy("..")', () => {
  const mod = lazy('..')

  assert.equal(mod(), require('..'))
  assert.equal(mod(), require('..'))
  assert.equal(mod(), require('..'))
})

it('should fail gracefully', (done) => {
  child_process.fork('./test/fail.js').on('close', (code) => {
    assert.equal(code, 1)
    done()
  })
})

it('should throw if you do not pass `require` into `lazyrequire(require)`', () => {
  assert.throws(() => require('..')())
})
