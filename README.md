# Intertag

  [![Build Status](https://travis-ci.org/bredele/intertag.svg?branch=master)](https://travis-ci.org/bredele/intertag)
  [![NPM](https://img.shields.io/npm/v/intertag.svg)](https://www.npmjs.com/package/intertag)
  [![Downloads](https://img.shields.io/npm/dm/intertag.svg)](http://npm-stat.com/charts.html?package=intertag)
  [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Module that allows to compose template literals together using function interpolation. Created for [cypher-async](https://github.com/bredele/cypher-async), intertag allowed to compose multiple database queries together. Use it today to create your own template engine on top of [ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). 

## Usage


```js
const compose = require('intertag')

function query () {
  const name = 'jane'
  return intersect`with ${name}`
}

compose`intersect john ${query}`
// [['intersect john with', ''], 'jane']

```


## Installation

```shell
npm install intertag --save
```

[![NPM](https://nodei.co/npm/intertag.png)](https://nodei.co/npm/intertag/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Bluff is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any intertag related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
