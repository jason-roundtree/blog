webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlobalStyles */ "./components/GlobalStyles.js");
/* harmony import */ var _colorScheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colorScheme */ "./colorScheme.js");



var _darkTheme,
    _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var darkTheme = (_darkTheme = {
  body: "".concat(_colorScheme__WEBPACK_IMPORTED_MODULE_5__["default"].darkThemeColorBg),
  text: "".concat(_colorScheme__WEBPACK_IMPORTED_MODULE_5__["default"].darkThemeColorText),
  primaryColor: "".concat(_colorScheme__WEBPACK_IMPORTED_MODULE_5__["default"].primaryColor)
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_darkTheme, "primaryColor", "".concat(_colorScheme__WEBPACK_IMPORTED_MODULE_5__["default"].primaryColor)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_darkTheme, "secondaryColor", "".concat(_colorScheme__WEBPACK_IMPORTED_MODULE_5__["default"].secondaryColor)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_darkTheme, "tertiaryColor", "".concat(_colorScheme__WEBPACK_IMPORTED_MODULE_5__["default"].tertiaryColor)), _darkTheme);

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('lightMode'),
      userTheme = _useState[0],
      setUserTheme = _useState[1];

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: darkTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["GlobalStyles"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.e304878c1d810afc59d1.hot-update.js.map