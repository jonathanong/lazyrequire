
var chalk = lazy(require)('chalk')

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
        // TODO: make this better, like nodejs-depd
        console.trace()
        process.exit(1)
      }
    }
  }
}
