
# lazyrequire

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Lazily require modules in node.js.

```js
var lazy = require('lazyrequire')(require)

var esprima = lazy('esprima')

setImmediate(function () {
  esprima(/* load it if it's not loaded */).parse()
})
```

[npm-image]: https://img.shields.io/npm/v/lazyrequire.svg?style=flat
[npm-url]: https://npmjs.org/package/lazyrequire
[travis-image]: https://img.shields.io/travis/module-utils/lazyrequire.svg?style=flat
[travis-url]: https://travis-ci.org/module-utils/lazyrequire
[coveralls-image]: https://img.shields.io/coveralls/module-utils/lazyrequire.svg?style=flat
[coveralls-url]: https://coveralls.io/r/module-utils/lazyrequire?branch=master
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat
[gittip-url]: https://www.gittip.com/jonathanong/
