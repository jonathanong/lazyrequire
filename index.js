
var chalk = lazy(require)('chalk')
var callsite = lazy(require)('callsite')

module.exports = lazy

function lazy(require) {
  return function (name) {
    var module
    return function () {
      if (module != null) return module
      try {
        return module = require(name)
      } catch (err) {
        if (err.code !== 'MODULE_NOT_FOUND') throw err
        console.error(chalk().yellow('Could not lazily require the module "')
          + chalk().red(name)
          + chalk().yellow('".'))
        console.error(chalk().yellow('You were expected to install this module yourself.'))
        console.error(chalk().yellow('Please run `')
          + chalk().cyan('npm i --save ' + name)
          + chalk().yellow('` in your console.'))
        var site = callsite()()[1]
        console.error(chalk().green(site.getFileName() + ':' + site.getLineNumber()) + ' ' + (site.getFunctionName() || 'anonymous'))
        process.exit(1)
      }
    }
  }
}
