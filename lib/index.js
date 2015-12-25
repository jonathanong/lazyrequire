'use strict'

const createGetter = require('fn-getter')
const callsite = lazy(require)('callsite')
const chalk = lazy(require)('chalk')

module.exports = lazy

function lazy (require) {
  if (typeof require !== 'function' || require.name !== 'require') {
    throw new Error('You must pass `require` into `lazyrequire(require)`')
  }

  return name => createGetter(() => {
    try {
      return require(name)
    } catch (err) {
      /* istanbul ignore if */
      if (err.code !== 'MODULE_NOT_FOUND') throw err
      console.error(chalk().yellow('Could not lazily require the module "')
        + chalk().red(name)
        + chalk().yellow('".'))
      console.error(chalk().yellow('You were expected to install this module yourself.'))
      console.error(chalk().yellow('Please run `')
        + chalk().cyan('npm i --save ' + name)
        + chalk().yellow('` in your console.'))
      const site = callsite()()[1]
      console.error(chalk().green(site.getFileName() + ':' + site.getLineNumber()) + ' ' + (site.getFunctionName() || 'anonymous'))
      process.exit(1)
    }
  })
}
