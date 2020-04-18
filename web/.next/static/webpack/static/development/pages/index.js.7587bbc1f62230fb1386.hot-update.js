webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeaderLayout.js":
/*!************************************!*\
  !*** ./components/HeaderLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _colorsAndThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colorsAndThemes */ "./colorsAndThemes.js");
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/HeaderLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Main = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "HeaderLayout__Main",
  componentId: "sc-2bs9km-0"
})(["max-width:750px;margin:0 auto;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header.withConfig({
  displayName: "HeaderLayout__Header",
  componentId: "sc-2bs9km-1"
})(["padding:1em 40px;background:rgb(250,223,147);color:", ";background:", ";display:flex;justify-content:space-between;align-items:center;"], function (_ref) {
  var theme = _ref.theme;
  return theme.primaryColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.secondaryColor;
});
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "HeaderLayout__H1",
  componentId: "sc-2bs9km-2"
})(["font-size:1.5em;"]);
var ToggleBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "HeaderLayout__ToggleBtn",
  componentId: "sc-2bs9km-3"
})(["height:1.8em;width:1.8em;&:hover{cursor:pointer;}"]);

function HeaderLayout(props) {
  console.log('propsaaa: ', props);
  var theme = props.themeString === 'light' ? "".concat(_colorsAndThemes__WEBPACK_IMPORTED_MODULE_4__["default"]['light']) : "".concat(_colorsAndThemes__WEBPACK_IMPORTED_MODULE_4__["default"]['dark']); // const themeInfo = {
  //     dark: {
  //         iconSrc: '/images/023-moon-3.svg',
  //         alt: 'Icon of moon for "Dark Mode"'
  //     },
  //     light: {
  //         src: '/images/023-moon-3.svg',
  //         alt: 'Icon of sun for "Light Mode"'
  //     }
  // }
  // props.themeString === 'light'
  //     ? mode['light']
  //     : 

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Jason Roundtree - Blog"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans300,400,600&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Cuprum&family=Fjalla+One&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(H1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Jason Roundtree - Blog")))), __jsx(ToggleBtn, {
    src: "".concat(theme.iconSrc),
    alt: "".concat(theme.iconAlt),
    onClick: props.onToggleThemeClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), __jsx(Main, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderLayout);

/***/ })

})
//# sourceMappingURL=index.js.7587bbc1f62230fb1386.hot-update.js.map