webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/KeywordTags.js":
/*!***********************************!*\
  !*** ./components/KeywordTags.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_validation_rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/validation/rules/PossibleFragmentSpreads */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs");

var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function KeywordTags(props) {
  for (var _ref in PossibleFragmentSprea) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2);

    var tag = _ref2[0];
    var count = _ref2[1];
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/printLocation */ "./node_modules/graphql/language/printLocation.mjs");



/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToJSON.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToJSON; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */

function defineToJSON(classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToStringTag.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToStringTag.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToStringTag; });
/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return devAssert; });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/identityFunc.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/identityFunc.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identityFunc; });
/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // eslint-disable-next-line no-shadow
undefined : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message || 'Unexpected invariant triggered');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isInvalid.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/isInvalid.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isInvalid; });
/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectLike; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyMap.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyMap; });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = item;
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyValMap.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyValMap; });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/mapValue.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapValue; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");


/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
function mapValue(map, fn) {
  var result = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(map); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var _key = _ref2[0];
    var _value = _ref2[1];
    result[_key] = fn(_value, _key);
  }

  return result;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/jsutils/toObjMap.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/toObjMap.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toObjMap; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");

function toObjMap(obj) {
  /* eslint-enable no-redeclare */
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  var map = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(obj); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var key = _ref2[0];
    var value = _ref2[1];
    map[key] = value;
  }

  return map;
}


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/*! exports provided: printLocation, printSourceLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return printLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return printSourceLocation; });
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, Object(_language_location__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var sublineIndex = Math.floor(columnNum / 80);
    var sublineColumnNum = columnNum % 80;
    var sublines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      sublines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
      return ['', subline];
    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectEntries.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/5838
var objectEntries = Object.entries || function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectEntries);


/***/ }),

/***/ "./node_modules/graphql/type/definition.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/definition.mjs ***!
  \**************************************************/
/*! exports provided: isType, assertType, isScalarType, assertScalarType, isObjectType, assertObjectType, isInterfaceType, assertInterfaceType, isUnionType, assertUnionType, isEnumType, assertEnumType, isInputObjectType, assertInputObjectType, isListType, assertListType, isNonNullType, assertNonNullType, isInputType, assertInputType, isOutputType, assertOutputType, isLeafType, assertLeafType, isCompositeType, assertCompositeType, isAbstractType, assertAbstractType, GraphQLList, GraphQLNonNull, isWrappingType, assertWrappingType, isNullableType, assertNullableType, getNullableType, isNamedType, assertNamedType, getNamedType, GraphQLScalarType, GraphQLObjectType, argsToArgsConfig, isRequiredArgument, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, isRequiredInputField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return assertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return isScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return assertScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return isObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return assertObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return isInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return assertInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return isUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return assertUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return isEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return assertEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return isInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return assertInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return isListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return assertListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return isNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return assertNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return isInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return assertInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return isOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return assertOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return isLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return assertLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return isCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return assertCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return isAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return assertAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return GraphQLList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return GraphQLNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return isWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return assertWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return isNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return assertNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return getNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return isNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return assertNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return getNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return GraphQLScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return GraphQLObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsToArgsConfig", function() { return argsToArgsConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return isRequiredArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return GraphQLInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return GraphQLUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return GraphQLEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return GraphQLInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return isRequiredInputField; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/mapValue */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/toObjMap */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/devAssert */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/instanceOf */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_identityFunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/identityFunc */ "./node_modules/graphql/jsutils/identityFunc.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _utilities_valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utilities/valueFromASTUntyped */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  if (!isType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL type."));
  }

  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLScalarType);
}
function assertScalarType(type) {
  if (!isScalarType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Scalar type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLObjectType);
}
function assertObjectType(type) {
  if (!isObjectType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  if (!isInterfaceType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Interface type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLUnionType);
}
function assertUnionType(type) {
  if (!isUnionType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Union type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLEnumType);
}
function assertEnumType(type) {
  if (!isEnumType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Enum type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  if (!isInputObjectType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Input Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isListType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLList);
}
function assertListType(type) {
  if (!isListType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL List type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  if (!isNonNullType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL Non-Null type."));
  }

  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  if (!isInputType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL input type."));
  }

  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  if (!isOutputType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL output type."));
  }

  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  if (!isLeafType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL leaf type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  if (!isCompositeType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL composite type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  if (!isAbstractType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL abstract type."));
  }

  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */

// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLList.prototype.toString = function toString() {
  return '[' + String(this.ofType) + ']';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLList);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLList);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLNonNull.prototype.toString = function toString() {
  return String(this.ofType) + '!';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLNonNull);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLNonNull);
/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  if (!isWrappingType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL wrapping type."));
  }

  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  if (!isNullableType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL nullable type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  if (!isNamedType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), " to be a GraphQL named type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveThunk(thunk) {
  // $FlowFixMe(>=0.90.0)
  return typeof thunk === 'function' ? thunk() : thunk;
}

function undefineIfEmpty(arr) {
  return arr && arr.length > 0 ? arr : undefined;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType =
/*#__PURE__*/
function () {
  function GraphQLScalarType(config) {
    var parseValue = config.parseValue || _jsutils_identityFunc__WEBPACK_IMPORTED_MODULE_9__["default"];
    this.name = config.name;
    this.description = config.description;
    this.serialize = config.serialize || _jsutils_identityFunc__WEBPACK_IMPORTED_MODULE_9__["default"];
    this.parseValue = parseValue;

    this.parseLiteral = config.parseLiteral || function (node) {
      return parseValue(Object(_utilities_valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_13__["valueFromASTUntyped"])(node));
    };

    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.serialize == null || typeof config.serialize === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));

    if (config.parseLiteral) {
      typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
    }
  }

  var _proto = GraphQLScalarType.prototype;

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLScalarType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLScalarType);

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType =
/*#__PURE__*/
function () {
  function GraphQLObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.isTypeOf == null || typeof config.isTypeOf === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(config.isTypeOf), "."));
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto2.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto2.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto2.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLObjectType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLObjectType);

function defineInterfaces(config) {
  var interfaces = resolveThunk(config.interfaces) || [];
  Array.isArray(interfaces) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
  return interfaces;
}

function defineFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  isPlainObj(fieldMap) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldMap, function (fieldConfig, fieldName) {
    isPlainObj(fieldConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object"));
    !('isDeprecated' in fieldConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldConfig.resolve), "."));
    var argsConfig = fieldConfig.args || {};
    isPlainObj(argsConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
    var args = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(argsConfig).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        extensions: arg.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(arg.extensions),
        astNode: arg.astNode
      };
    });
    return _objectSpread({}, fieldConfig, {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: args,
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      deprecationReason: fieldConfig.deprecationReason,
      extensions: fieldConfig.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    });
  });
}

function isPlainObj(obj) {
  return Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__["default"])(obj) && !Array.isArray(obj);
}

function fieldsToFieldsConfig(fields) {
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(fields, function (field) {
    return {
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    };
  });
}

function argsToArgsConfig(args) {
  return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      extensions: arg.extensions,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType =
/*#__PURE__*/
function () {
  function GraphQLInterfaceType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(config.resolveType), "."));
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto3.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      fields: fieldsToFieldsConfig(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto3.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLInterfaceType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLInterfaceType);

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType =
/*#__PURE__*/
function () {
  function GraphQLUnionType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._types = defineTypes.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(config.resolveType), "."));
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    if (typeof this._types === 'function') {
      this._types = this._types();
    }

    return this._types;
  };

  _proto4.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto4.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLUnionType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLUnionType);

function defineTypes(config) {
  var types = resolveThunk(config.types) || [];
  Array.isArray(types) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
=
/*#__PURE__*/
function () {
  function GraphQLEnumType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._values = defineEnumValues(this.name, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_2__["default"])(this._values, function (value) {
      return value.name;
    });
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(value) {
    var enumValue = this._valueLookup.get(value);

    if (enumValue) {
      return enumValue.name;
    }
  };

  _proto5.parseValue = function parseValue(value)
  /* T */
  {
    if (typeof value === 'string') {
      var enumValue = this.getValue(value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_12__["Kind"].ENUM) {
      var enumValue = this.getValue(valueNode.value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.toConfig = function toConfig() {
    var values = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_6__["default"])(this.getValues(), function (value) {
      return value.name;
    }, function (value) {
      return {
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        extensions: value.extensions,
        astNode: value.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      values: values,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto5.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLEnumType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLEnumType);

function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(typeName, " values must be an object with value names as keys."));
  return Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(valueMap).map(function (_ref2) {
    var valueName = _ref2[0],
        value = _ref2[1];
    isPlainObj(value) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(value), "."));
    !('isDeprecated' in value) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(typeName, ".").concat(valueName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    return {
      name: valueName,
      description: value.description,
      value: 'value' in value ? value.value : valueName,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      extensions: value.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(value.extensions),
      astNode: value.astNode
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType =
/*#__PURE__*/
function () {
  function GraphQLInputObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineInputFieldMap.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.');
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto6.toConfig = function toConfig() {
    var fields = Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(this.getFields(), function (field) {
      return {
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        extensions: field.extensions,
        astNode: field.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      fields: fields,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto6.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_11__["default"])(GraphQLInputObjectType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_10__["default"])(GraphQLInputObjectType);

function defineInputFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  isPlainObj(fieldMap) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldMap, function (fieldConfig, fieldName) {
    !('resolve' in fieldConfig) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
    return _objectSpread({}, fieldConfig, {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      extensions: fieldConfig.extensions && Object(_jsutils_toObjMap__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    });
  });
}

function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/typeComparators.mjs ***!
  \************************************************************/
/*! exports provided: isEqualType, isTypeSubTypeOf, doTypesOverlap */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return isEqualType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return isTypeSubTypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return doTypesOverlap; });
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");

/**
 * Provided two types, return true if the types are equal (invariant).
 */

function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeA) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeA) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(superType)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(superType)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(superType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isObjectType"])(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  } // Otherwise, the child type is not a valid subtype of the parent type.


  return false;
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeA)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isPossibleType(typeA, typeB);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/typeFromAST.mjs ***!
  \********************************************************/
/*! exports provided: typeFromAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return typeFromAST; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");




/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */

/* eslint-disable no-redeclare */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLList"])(innerType);
  }

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLNonNull"])(innerType);
  }

  /* istanbul ignore else */
  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  } // Not reachable. All possible type nodes have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected type node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(typeNode));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromASTUntyped.mjs ***!
  \****************************************************************/
/*! exports provided: valueFromASTUntyped */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return valueFromASTUntyped; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");






/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL:
      return null;

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT:
      return parseInt(valueNode.value, 10);

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT:
      return parseFloat(valueNode.value);

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING:
    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM:
    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN:
      return valueNode.value;

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT:
      return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_2__["default"])(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE:
      {
        var variableName = valueNode.name.value;
        return variables && !Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(variables[variableName]) ? variables[variableName] : undefined;
      }
  } // Not reachable. All possible value nodes have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected value node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(valueNode));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs ***!
  \***************************************************************************/
/*! exports provided: typeIncompatibleSpreadMessage, typeIncompatibleAnonSpreadMessage, PossibleFragmentSpreads */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIncompatibleSpreadMessage", function() { return typeIncompatibleSpreadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIncompatibleAnonSpreadMessage", function() { return typeIncompatibleAnonSpreadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreads", function() { return PossibleFragmentSpreads; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeComparators */ "./node_modules/graphql/utilities/typeComparators.mjs");





function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return "Fragment \"".concat(fragName, "\" cannot be spread here as objects of type \"").concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return "Fragment cannot be spread here as objects of type \"".concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */

function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(fragType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(parentType) && !Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](typeIncompatibleAnonSpreadMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType)), node));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](typeIncompatibleSpreadMessage(fragName, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType)), node));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), frag.typeCondition);

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
      return type;
    }
  }
}


/***/ })

})
//# sourceMappingURL=index.js.05d03e8cb190ca2c5193.hot-update.js.map