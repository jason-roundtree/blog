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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prism-react-renderer/themes/nightOwl */ "./node_modules/prism-react-renderer/themes/nightOwl/index.js");


var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/post/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import Prism from 'prismjs/components/prism-core'



var DivBody = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "slug__DivBody",
  componentId: "sc-1e354jq-0"
})(["margin-top:1.5em;font-size:1.15em;line-height:1.75em;"]);
var PDesc = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "slug__PDesc",
  componentId: "sc-1e354jq-1"
})(["font-size:1.25em;color:", ";margin:3px 0 0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.primaryColor;
});
var PDate = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(PDesc).withConfig({
  displayName: "slug__PDate",
  componentId: "sc-1e354jq-2"
})(["font-size:1.15em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
var Pre = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].pre.withConfig({
  displayName: "slug__Pre",
  componentId: "sc-1e354jq-3"
})(["font-family:'Courier Prime',monospace;font-size:.75 text-align:left;margin:1em 0;padding:0.5em;& .token-line{line-height:1.3em;height:1.3em;}"]);
var LineNo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "slug__LineNo",
  componentId: "sc-1e354jq-4"
})(["display:inline-block;width:2em;user-select:none;opacity:0.3;"]);

function formatParagraphBlock(block) {
  return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }
  }, block);
}

function formatCodeBlock(block) {
  var _this = this;

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_7__["defaultProps"], {
    theme: prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_8__["default"],
    code: block,
    language: "jsx",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), function (_ref3) {
    var className = _ref3.className,
        style = _ref3.style,
        tokens = _ref3.tokens,
        getLineProps = _ref3.getLineProps,
        getTokenProps = _ref3.getTokenProps;
    return __jsx(Pre, {
      className: className,
      style: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, tokens.map(function (line, i) {
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getLineProps({
        line: line,
        key: i
      }), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }), __jsx(LineNo, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }
      }, i + 1), line.map(function (token, key) {
        return __jsx("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTokenProps({
          token: token,
          key: key
        }), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 47
          }
        }));
      }));
    }));
  });
}

function Post(props) {
  console.log('propsPost: ', props.body);
  var postContent = [];
  props.body.forEach(function (section) {
    if (section._type === 'block') {
      var formattedPara = formatParagraphBlock(section.children[0].text);
      postContent.push(formattedPara);
    } else if (section._type === 'code') {
      var formattedCode = formatCodeBlock(section.code);
      postContent.push(formattedCode);
    }
  }); // console.log('postContent: ', postContent)

  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onToggleThemeClick: props.onToggleThemeClick,
    themeString: props.themeString,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, props.title), __jsx(PDesc, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, props.description), __jsx(PDate, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default.a.utc(props._createdAt).format("LL")), __jsx(DivBody, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, postContent.map(function (content) {
    return content;
  }))));
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
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch("\n        *[_type == \"post\" && slug.current == $slug][0]\n    ", {
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
//# sourceMappingURL=[slug].js.70df172fed1030853724.hot-update.js.map