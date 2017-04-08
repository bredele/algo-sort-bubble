# Bubble sort
[![Build Status](https://travis-ci.org/bredele/algo-sort-bubble.svg?branch=master)](https://travis-ci.org/bredele/algo-sort-bubble)
[![NPM](https://img.shields.io/npm/v/algo-sort-bubble.svg?style=flat-square)](https://www.npmjs.com/package/algo-sort-bubble)
[![Downloads](https://img.shields.io/npm/dm/algo-sort-bubble.svg?style=flat-square)](http://npm-stat.com/charts.html?package=algo-sort-bubble)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)


Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. This algorithm is named for the way smaller or larger elements "bubble" to the top of the list.

![](https://upload.wikimedia.org/wikipedia/commons/5/54/Sorting_bubblesort_anim.gif?uselang=fr)

Although the algorithm is simple, it is too slow and impractical for most problems except when the inputs are in order but may occasionally have some out-of-order elements nearly in position.

## Usage

```js
const sort = require('algo-sort-bubble')
sort([
  0, 67, 7, 34, 54, 3, 2, 54, 1
])
// => [0, 1, 2, 3, 7, 34, 54, 54, 67]

sort([
  'world',
  'foo',
  'olivier',
  'a'
], (prev, next) => prev.length < next.length)
// => ['a', 'foo', 'world', 'olivier']
```

## Installation

```shell
npm install algo-sort-bubble --save
```

[![NPM](https://nodei.co/npm/algo-sort-bubble.png)](https://nodei.co/npm/algo-sort-bubble/)

## Licence

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
