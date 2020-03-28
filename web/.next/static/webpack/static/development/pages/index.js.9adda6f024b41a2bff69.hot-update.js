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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 10px;\n    margin: 10px;\n    font-family: 'Lustria', serif;\n    color: rgb(16, 46, 36);\n    font-size: 1.2em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject());

function KeywordTags(props) {
  var _this = this;

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

  console.log('tagCountsArray: ', tagCountsArray);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, tagCountsArray.map(function (tag) {
    return __jsx(TagBtn, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, tag.name, tag.count);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ })

})
//# sourceMappingURL=index.js.9adda6f024b41a2bff69.hot-update.js.map