webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/post/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var PBody = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "slug__PBody",
  componentId: "sc-1e354jq-0"
})(["margin-top:1.5em;font-size:1.15em;line-height:1.75em;"]);
var PDesc = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "slug__PDesc",
  componentId: "sc-1e354jq-1"
})(["font-size:1.25em;color:", ";margin:3px 0 0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.primaryColor;
});
var PDate = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(PDesc).withConfig({
  displayName: "slug__PDate",
  componentId: "sc-1e354jq-2"
})(["font-size:1.15em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
{
  /* <pre>
     <code className="language-js">
         ${section.code}
     </code>
  </pre> */
}

function Post(props) {
  console.log('propsPost: ', props.body); // let postContent = ''
  // props.body.forEach(section => {
  //         if (section._type === 'block') {
  //             postContent += section.children[0].text
  //         } else if (section._type === 'code') {
  //             postContent += section.code
  //         }
  // })

  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onToggleThemeClick: props.onToggleThemeClick,
    themeString: props.themeString,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, props.title), __jsx(PDesc, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, props.description), __jsx(PDate, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(props._createdAt).format("LL")), __jsx(PBody, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("code", {
    className: "language-js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "\n        function test() { \n            return 'hello hello!'\n        }\n                        "))));
}

Post.getInitialProps = function _callee(context) {
  var _context$query$slug, slug, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // default the slug so that it doesn't return "undefined"
          // console.log('context: ', context)
          _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_client__WEBPACK_IMPORTED_MODULE_2__["default"].fetch("\n        *[_type == \"post\" && slug.current == $slug][0]\n    ", {
            slug: slug
          }));

        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[slug].js.e83c40f277ee30179596.hot-update.js.map