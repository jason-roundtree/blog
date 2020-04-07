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
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:10px 15px;margin:15px 0 0 15px;color:var(--secondary-color);font-size:1.2em;border:none;background-color:var(--primary-color);font-family:'Lustria',serif;&:hover{cursor:pointer;}"]);

function getTagCountsData(tags) {
  return tags.map(function (tag) {
    return _client__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("\n                *[ _id == $tagID ]{\n                    name,\n                    _id,\n                    \"tagCount\": count(\n                        *[ _type == \"post\" && $tagID in tags[]._ref ]\n                    )\n                }[0]\n            ", {
      tagID: tag._id
    });
  });
}

function KeywordTags(props) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      tagCounts = _useState[0],
      setTagCounts = _useState[1];

  console.log('props: ', props);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var tc = getTagCountsData(props.tags); // tags.forEach(async tag => {
    //     const count = await client.fetch(`
    //         count(*[ _type == "post" && $tagID in tags[]._ref ])
    //     `, { tagID: tag._id })
    //     // this check is in case i've added a tag in sanity studio but haven't assigned it to a post yet:
    //     if (count > 0) {
    //         const tagCount = {
    //             _id: tag._id,
    //             name: tag.name,
    //             count
    //         }
    //         // TODO: what's a good way to set these all these at once??
    //         setTagCounts(state => [...state, tagCount])
    //     }
    // })
  }, []); // tagCounts.sort((a, b) => {
  //     return (a.name > b.name) ? 1 : -1
  // })

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(TagBtn, {
    onClick: props.handleTagFilter,
    id: "clearFilter",
    className: props.filteredTags.length > 0 ? '' : 'selectedTag',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "All Posts"), tagCounts.map(function (tag) {
    return (// console.log('tagtag: ', tag)
      tag.count > 0 && __jsx(TagBtn, {
        key: tag.name,
        id: tag._id,
        onClick: props.handleTagFilter,
        className: props.filteredTags.includes(tag._id) ? 'selectedTag' : '',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, tag.name, "\xA0 (", tag.tagCount, ")")
    );
  })); // return null
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ })

})
//# sourceMappingURL=index.js.c9777f85a7ceed5cdc43.hot-update.js.map