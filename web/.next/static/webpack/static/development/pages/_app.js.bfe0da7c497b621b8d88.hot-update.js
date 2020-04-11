webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GlobalStyles */ "./components/GlobalStyles.js");
/* harmony import */ var _colorScheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colorScheme */ "./colorScheme.js");

var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import { dark, light } from '../colorScheme'



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('light'),
      userThemeStr = _useState[0],
      setUserThemeStr = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_colorScheme__WEBPACK_IMPORTED_MODULE_4__["default"][userThemeStr]),
      userThemeObj = _useState2[0],
      setUserThemeObj = _useState2[1];

  console.log('userThemeStr: ', userThemeStr);
  console.log('userThemeObj: ', userThemeObj);

  function handleThemeToggle() {
    setUserThemeStr(userThemeStr === 'dark' ? 'light' : 'dark');
    console.log('xxxxx');
  }

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: userThemeObj,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["GlobalStyles"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    onToggleThemeClick: handleThemeToggle // userTheme={userTheme}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.bfe0da7c497b621b8d88.hot-update.js.map