webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var _components_KeywordTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/KeywordTags */ "./components/KeywordTags.js");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import useSWR from 'swr'






var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "nuslkc-0"
})(["margin:15px 0 0 15px;padding:10px 15px;font-size:1.75em;border:1px solid rgb(250,223,147);"]);
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-1"
})(["font-size:.75em;"]);

function Index(_ref) {
  var posts = _ref.posts;
  console.log('posts: ', posts);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      filteredKeywords = _useState[0],
      setFilteredKeywords = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      filteredPosts = _useState2[0],
      setFilteredPosts = _useState2[1]; // const tagCounts = 
  // async function getFilteredPosts() {
  //     const posts = await client.fetch(`
  //     `)
  //     console.log('posts: ', posts)
  //     setFilteredPosts(posts)
  // }
  // function handleTagFilter(e) {
  //     const selectedKeyword = e.target.firstChild.data
  //     // console.log('selectedKeyword: ', selectedKeyword)
  //     if (!filteredKeywords.includes(selectedKeyword)) {
  //         setFilteredKeywords([...filteredKeywords, selectedKeyword])
  //     } else {
  //         setFilteredKeywords(filteredKeywords.filter(keyword => keyword !== selectedKeyword))
  //     }
  //     console.log('filteredKeywords: ', filteredKeywords)
  //     getFilteredPosts()
  // }


  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Tags:"), __jsx(_components_KeywordTags__WEBPACK_IMPORTED_MODULE_5__["default"] // tags={tagCountsArray}
  // handleTagFilter={handleTagFilter}
  , {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Posts:"));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.56e00ef49b504fc29c01.hot-update.js.map