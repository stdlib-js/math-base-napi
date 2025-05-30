/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name binary
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/math/base/napi/binary}
*/
setReadOnly( ns, 'binary', require( '@stdlib/math-base-napi-binary' ) );

/**
* @name quaternary
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/math/base/napi/quaternary}
*/
setReadOnly( ns, 'quaternary', require( '@stdlib/math-base-napi-quaternary' ) );

/**
* @name quinary
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/math/base/napi/quinary}
*/
setReadOnly( ns, 'quinary', require( '@stdlib/math-base-napi-quinary' ) );

/**
* @name ternary
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/math/base/napi/ternary}
*/
setReadOnly( ns, 'ternary', require( '@stdlib/math-base-napi-ternary' ) );

/**
* @name unary
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/math/base/napi/unary}
*/
setReadOnly( ns, 'unary', require( '@stdlib/math-base-napi-unary' ) );


// EXPORTS //

module.exports = ns;
