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
/* harmony import */ var _utils_sortStrings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sortStrings.js */ "./utils/sortStrings.js");
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // const TagsContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
// `

var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:7px 10px;margin:15px 0 0 15px;color:var(--secondary-color);font-size:1em;border:none;background-color:var(--primary-color);font-family:'Nanum Gothic Coding',monospace;&:hover{cursor:pointer;background-color:var(--primary-darker);}"]);
var TagCount = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "KeywordTags__TagCount",
  componentId: "sc-1eepvlk-1"
})(["font-family:'Fjalla One',sans-serif;color:var(--secondary-color);font-size:.8em;"]);

function KeywordTags(props) {
  var _this = this;

  // console.log('props: ', props)
  // props.tags.sort((a, b) => {
  //     return (a.name > b.name) ? 1 : -1
  // })
  var tags = Object(_utils_sortStrings_js__WEBPACK_IMPORTED_MODULE_2__["default"])(props.tags);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, tags.length > 0 && __jsx(TagBtn, {
    onClick: props.handleTagFilter,
    id: "clearFilter",
    className: props.filteredTags.length > 0 ? '' : 'selectedTag',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "All Posts"), tags.map(function (tag) {
    return tag.count > 0 && __jsx(TagBtn, {
      key: tag.name,
      id: tag._id,
      onClick: props.handleTagFilter,
      className: props.filteredTags.includes(tag._id) ? 'selectedTag' : '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, tag.name, "\xA0", __jsx(TagCount, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, "(", tag.count, ")"));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ }),

/***/ "./utils/sortStrings.js":
/*!******************************!*\
  !*** ./utils/sortStrings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (list) {
  list.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  });
});

/***/ })

})
//# sourceMappingURL=index.js.fcee43c9229aa5a7c688.hot-update.js.map