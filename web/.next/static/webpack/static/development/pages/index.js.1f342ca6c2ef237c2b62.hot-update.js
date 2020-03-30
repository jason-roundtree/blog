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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:10px 15px;margin:15px 0 0 15px;color:rgb(250,223,147);font-size:1.2em;border:none;background-color:rgb(3,152,252);font-family:'Lustria',serif;&:hover{cursor:pointer;}"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "KeywordTags__Span",
  componentId: "sc-1eepvlk-1"
})(["margin:0 5px;color:rgb(250,223,147);"]);

function KeywordTags(props) {
  var _this = this;

  // console.log('props: ', props)
  var tagCountsArray = [];

  for (var _i = 0, _Object$entries = Object.entries(props.tags); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
        tag = _Object$entries$_i[0],
        count = _Object$entries$_i[1];

    tagCountsArray.push({
      'name': tag,
      'count': count
    });
  }

  tagCountsArray.sort(function (a, b) {
    return a.name - b.name;
  });
  console.log('sorted: ', sorted);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, tagCountsArray.map(function (tag) {
    return __jsx(TagBtn, {
      key: tag.name // onClick={}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, tag.name, __jsx(Span, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, "(", tag.count, ")"));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ })

})
//# sourceMappingURL=index.js.1f342ca6c2ef237c2b62.hot-update.js.map