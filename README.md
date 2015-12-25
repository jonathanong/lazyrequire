
# lazyrequire

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Lazily require modules in node.js.

```js
var lazy = require('lazyrequire')(require)

var esprima = lazy('esprima')

setImmediate(function () {
  esprima(/* load it if it's not loaded */).parse()
})
```

[npm-image]: https://img.shields.io/npm/v/lazyrequire.svg?style=flat-square
[npm-url]: https://npmjs.org/package/lazyrequire
[travis-image]: https://img.shields.io/travis/jonathanong/lazyrequire.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/lazyrequire
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/lazyrequire/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/lazyrequire
[david-image]: http://img.shields.io/david/jonathanong/lazyrequire.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/lazyrequire
[license-image]: http://img.shields.io/npm/l/lazyrequire.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/lazyrequire.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/lazyrequire
