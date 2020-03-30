webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/KeywordTags.js":
/*!***********************************!*\
  !*** ./components/KeywordTags.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:10px 15px;margin:15px 0 0 15px;color:rgb(250,223,147);font-size:1.2em;border:none;background-color:rgb(3,152,252);font-family:'Lustria',serif;&:hover{cursor:pointer;}"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "KeywordTags__Span",
  componentId: "sc-1eepvlk-1"
})(["margin:0 5px;color:rgb(250,223,147);"]);

function KeywordTags(props) {
  var _this = this;

  // console.log('props: ', props)
  tagCountsArray.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, tagCountsArray.map(function (tag) {
    return __jsx(TagBtn, {
      key: tag.name,
      onClick: props.handleTagFilter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, tag.name, __jsx(Span, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, "(", tag.count, ")"));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ })

})
//# sourceMappingURL=index.js.6245cc5ef3758209f52f.hot-update.js.map