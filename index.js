
module.exports = function (require) {
  return function (name) {
    var module
    return function () {
      if (module != null) return module
      return module = require(name)
    }
  }
}
