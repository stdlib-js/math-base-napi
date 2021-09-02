<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# napi

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library C APIs for registering a Node-API module exporting interfaces.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-napi
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math-base-napi' );
```

#### ns

Standard library C APIs for registering a Node-API module exporting interfaces.

```javascript
var operators = ns;
// returns {...}
```

The namespace contains the following packages:

<!-- <toc pattern="*"> -->

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/math-base-napi' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-napi.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-napi

[test-image]: https://github.com/stdlib-js/math-base-napi/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-napi/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-napi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-napi?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-napi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-napi/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-napi/main/LICENSE

<!-- <toc-links> -->

<!-- </toc-links> -->

</section>

<!-- /.links -->