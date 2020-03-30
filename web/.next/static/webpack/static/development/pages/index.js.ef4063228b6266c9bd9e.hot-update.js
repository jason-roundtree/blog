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
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var _components_KeywordTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/KeywordTags */ "./components/KeywordTags.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "nuslkc-0"
})(["margin:15px 0 0 15px;padding:10px 15px;font-size:1.75em;border:1px solid rgb(250,223,147);"]);
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-1"
})(["font-size:.75em;"]);

function Index(_ref) {
  var _this = this;

  var posts = _ref.posts;

  function handleClickFilter(e) {
    console.log('e: ', e.target.value);
  } // TODO: there's gotta be a more straightforward way to get these counts, right? Maybe just do it from query?


  var tags = posts.reduce(function (tagCount, post) {
    // TODO: is this check necessary or will there always be tags even when empty array?
    post.tags && post.tags.forEach(function (tag) {
      if (!tagCount[tag.name]) {
        tagCount[tag.name] = 1;
      } else {
        tagCount[tag.name] = tagCount[tag.name] + 1;
      }
    });
    return tagCount;
  }, {});
  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Tags:"), __jsx(_components_KeywordTags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tags: tags,
    handleClickFilter: handleClickFilter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Posts:"), posts.map(function (_ref2) {
    var _id = _ref2._id,
        _createdAt = _ref2._createdAt,
        description = _ref2.description,
        slug = _ref2.slug,
        title = _ref2.title;
    return __jsx(ListItem, {
      key: _id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post/[slug]",
      as: "/post/".concat(slug.current),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, description), __jsx(DateP, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(_createdAt).format("LL")));
  }));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ef4063228b6266c9bd9e.hot-update.js.map