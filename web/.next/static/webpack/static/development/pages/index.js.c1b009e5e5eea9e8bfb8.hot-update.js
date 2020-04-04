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
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:10px 15px;margin:15px 0 0 15px;color:rgb(250,223,147);font-size:1.2em;border:none;background-color:var(--primary-color);font-family:'Lustria',serif;&:hover{cursor:pointer;}"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "KeywordTags__Span",
  componentId: "sc-1eepvlk-1"
})(["margin:0 5px;color:rgb(250,223,147);"]);

function KeywordTags(props) {
  var _this = this;

  // console.log('props: ', props)
  props.tags.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(TagBtn, {
    onClick: props.handleTagFilter,
    id: "clearFilter",
    className: props.filteredTags.length > 0 ? '' : 'selectedTag',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "All Posts"), props.tags.map(function (tag) {
    return tag.count && __jsx(TagBtn, {
      key: tag.name,
      id: tag._id,
      onClick: props.handleTagFilter,
      className: props.filteredTags.includes(tag._id) ? 'selectedTag' : '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, tag.name, "\xA0 (", tag.count, ")");
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ })

})
//# sourceMappingURL=index.js.c1b009e5e5eea9e8bfb8.hot-update.js.map