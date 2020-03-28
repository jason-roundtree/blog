webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var _components_KeywordTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/KeywordTags */ "./components/KeywordTags.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "nuslkc-0"
})(["margin:1em 0;font-size:1.75em;"]);
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-1"
})(["font-size:.85em;"]);

var Index = function Index(props) {
  console.log('props: ', props);
  var propsArray = Object.values(props); // last item in props is next.js url metadata

  var posts = propsArray.slice(0, propsArray.length - 1); // console.log('posts: ', posts)

  var tagCounts = posts.reduce(function (tagsObj, post) {
    var postTags = post.tags && post.tags; // console.log('postTags: ', postTags)

    postTags.forEach(function (tag) {
      if (!tagsObj[tag.name]) {
        tagsObj[tag.name] = 1;
      } else {
        tagsObj[tag.name] = tagsObj[tag.name] + 1;
      }
    });
    return tagsObj;
  }, {});
  console.log('tagCounts: ', tagCounts);
  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Tags:"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Posts:"), posts.map(function (_ref) {
    var _id = _ref._id,
        _createdAt = _ref._createdAt,
        slug = _ref.slug,
        title = _ref.title,
        description = _ref.description;
    return __jsx(ListItem, {
      key: _id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/post/[slug]",
      as: "/post/".concat(slug.current),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, description), __jsx(DateP, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(_createdAt).format("LL")));
  }));
};

Index.getInitialProps = function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_client__WEBPACK_IMPORTED_MODULE_2__["default"].fetch("\n        *[ _type == \"post\" ]{\n            ..., \n            tags[]->{_id, name}\n        }\n    "));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2b64cdac9db16bd13a27.hot-update.js.map