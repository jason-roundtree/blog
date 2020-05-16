webpackHotUpdate("static/development/pages/posts/[slug].js",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var _colorsAndThemes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../colorsAndThemes */ "./colorsAndThemes.js");

var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/posts/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var MainContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "slug__MainContent",
  componentId: "tg0oky-0"
})(["margin-top:1.5em;font-size:1.15em;line-height:1.75em;"]);
var PDesc = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "slug__PDesc",
  componentId: "tg0oky-1"
})(["font-size:1.1em;color:", ";margin:3px 0 0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.primaryColor;
});
var PDate = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(PDesc).withConfig({
  displayName: "slug__PDate",
  componentId: "tg0oky-2"
})(["font-size:1em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
var PBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "slug__PBlock",
  componentId: "tg0oky-3"
})(["margin-bottom:1em;"]);
var AsideBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "slug__AsideBlock",
  componentId: "tg0oky-4"
})(["margin-bottom:1em;padding:1em 2em;background-color:", ";font-size:.9em;border-left:1px solid rgba(114,143,203,.5);"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.asideBackground;
});
var Pre = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].pre.withConfig({
  displayName: "slug__Pre",
  componentId: "tg0oky-5"
})(["font-family:'Nanum Gothic Coding',monospace;font-size:.9em;overflow:auto;text-align:left;margin:1em 0;padding:0.5em;& .token-line{line-height:1.4em;height:1.3em;}"]);
var LineNo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "slug__LineNo",
  componentId: "tg0oky-6"
})(["display:inline-block;width:2em;user-select:none;opacity:0.3;"]);
var ExternalLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "slug__ExternalLink",
  componentId: "tg0oky-7"
})(["text-decoration:underline;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.articleLinks;
});
var BackToTopBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "slug__BackToTopBtn",
  componentId: "tg0oky-8"
})(["position:fixed;"]);

function Post(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showBackToTopBtn = _useState[0],
      toggleShowBackToTopBtn = _useState[1]; // console.log('propsPost: ', props)


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e) {
    console.log('handleScroll e: ', e.target.scrollingElement.scrollTop);
    e.target.scrollingElement.scrollTop > 750 ? toggleShowBackToTopBtn(true) : toggleShowBackToTopBtn(false);
  }

  var postContent = []; // TODO: change these to use functional loops?:

  function paragraphBlock(section) {
    // console.log('paraSection: ', section)
    var blockContent = [];

    for (var i = 0; i < section.children.length; i++) {
      if (section.children[i].marks.length > 0) {
        for (var j = 0; j < section.markDefs.length; j++) {
          if (section.markDefs[j]._key === section.children[i].marks[0]) {
            blockContent.push(__jsx(ExternalLink, {
              target: "_blank",
              href: section.markDefs[j].href,
              key: section.markDefs[j]._key,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 29
              }
            }, section.children[i].text));
          }
        }
      } else {
        blockContent.push(section.children[i].text);
      }
    } // console.log('blockContent: ', blockContent)


    return __jsx(PBlock, {
      key: section._key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 16
      }
    }, blockContent);
  }

  function asideStringNewlines(content, _key) {
    var contentArray = content.split('\n'); // console.log('contentArray: ', contentArray)

    var renderedLines = [];

    for (var i = 0; i < contentArray.length; i++) {
      renderedLines.push(__jsx("div", {
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 32
        }
      }, contentArray[i]));
    }

    return __jsx(AsideBlock, {
      key: _key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 16
      }
    }, renderedLines);
  }

  function prismafyCodeBlock(content, _key) {
    var _this = this;

    return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["defaultProps"], {
      theme: props.themeString === 'light' ? _colorsAndThemes__WEBPACK_IMPORTED_MODULE_6__["default"].light.syntax : _colorsAndThemes__WEBPACK_IMPORTED_MODULE_6__["default"].dark.syntax,
      code: content,
      language: "jsx",
      key: _key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }), function (_ref5) {
      var className = _ref5.className,
          style = _ref5.style,
          tokens = _ref5.tokens,
          getLineProps = _ref5.getLineProps,
          getTokenProps = _ref5.getTokenProps;
      return __jsx(Pre, {
        className: className,
        style: style,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, tokens.map(function (line, i) {
        return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getLineProps({
          line: line,
          key: i
        }), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }
        }), __jsx(LineNo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 33
          }
        }, i + 1), line.map(function (token, key) {
          return __jsx("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
            token: token,
            key: key
          }), {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 41
            }
          }));
        }));
      }));
    });
  }

  props.body && props.body.forEach(function (section) {
    switch (section._type) {
      case 'block':
        postContent.push(paragraphBlock(section));
        break;

      case 'code':
        postContent.push(prismafyCodeBlock(section.code, section._key));
        break;

      case 'post_aside':
        postContent.push(asideStringNewlines(section.str_content_newline, section._key));
        break;
      // default:
      //     console.log('default case')
    } // console.log('postContent: ', postContent)

  });
  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onToggleThemeClick: props.onToggleThemeClick,
    themeString: props.themeString,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx("article", {
    onScroll: handleScroll,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, props.title), __jsx(PDesc, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, props.description), __jsx(PDate, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default.a.utc(props._createdAt).format("LL")), __jsx(MainContent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, postContent.map(function (content) {
    return content;
  }))), showBackToTopBtn && __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, "Back to top"));
}

// Post.getInitialProps = async function(context) {
//     // default the slug so that it doesn't return "undefined"
//     // console.log('context: ', context)
//     const { slug = "" } = context.query
//     const data = await client.fetch(`
//         *[_type == "post" && slug.current == $slug][0]
//     `, { slug })
//     return data
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[slug].js.92fb7a59a40d054c2cbe.hot-update.js.map