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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var _components_KeywordTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/KeywordTags */ "./components/KeywordTags.js");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import useSWR from 'swr'






var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "nuslkc-0"
})(["margin:15px 0 0 15px;padding:10px 15px;font-size:1.75em;border:1px solid rgb(0,85,143);"]);
var TagListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "pages__TagListItem",
  componentId: "nuslkc-1"
})(["display:inline-block;margin-right:5px;padding:3px 5px;font-size:.5em;background-color:rgb(250,223,147);"]);
var DescP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "pages__DescP",
  componentId: "nuslkc-2"
})(["font-size:.85em;"]);
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-3"
})(["font-size:.7em;"]); // removes duplicate post objects by converting
// each post into a JSON string so that they can be
// compared and filtered using Set, then parsing the final 
// unique array of posts back to a normal array of objects

function uniquePostsArray(posts) {
  return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(posts.map(function (postObj) {
    return JSON.stringify(postObj);
  }))).map(function (postStr) {
    return JSON.parse(postStr);
  });
}

function Index(_ref) {
  var _this = this;

  var posts = _ref.posts,
      tags = _ref.tags;
  console.log('posts: ', posts);
  console.log('tags: ', tags);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(posts),
      allPosts = _useState[0],
      setAllPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      filteredPosts = _useState2[0],
      setFilteredPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      tagCounts = _useState3[0],
      setTagCounts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      filteredTags = _useState4[0],
      setFilteredTags = _useState4[1];

  console.log('filteredTags global: ', filteredTags);
  console.log('filteredPosts global: ', filteredPosts);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _tagCountPromi = tags.reduce(function _callee(acc, tag) {
      var count;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch("\n                count(*[ _type == \"post\" && $tagID in tags[]._ref ])\n            ", {
                tagID: tag._id
              }));

            case 2:
              count = _context.sent;
              // TODO: this check is in case i've added a tag in 
              // sanity studio but haven't assigned it to a post yet:
              console.log('count: ', count);

              if (count > 0) {
                acc.push({
                  _id: tag._id,
                  name: tag.name,
                  count: count
                }); // TODO: Should i call all these at once??
                // setTagCounts(state => [...state, tagCount])
              }

              return _context.abrupt("return", acc);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }, []);

    console.log('_tagCounts: ', _tagCounts);
    Promise.all(_tagCounts).then(tag);
    setTagCounts(_tagCounts);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (filteredTags.length > 0) {
      var _filteredPosts = [];
      allPosts.forEach(function (post) {
        post.tags.forEach(function (tag) {
          if (filteredTags.includes(tag._id)) {
            _filteredPosts.push(post);
          }
        });
      }); // console.log('_filteredPosts: ', _filteredPosts)

      setFilteredPosts(uniquePostsArray(_filteredPosts));
    } else {
      setFilteredPosts([]);
    }
  }, [filteredTags]);

  function handleTagFilter(e) {
    var selectedTagID = e.target.id;

    if (!filteredTags.includes(selectedTagID)) {
      setFilteredTags(function (state) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [selectedTagID]);
      });
    } else {
      setFilteredTags(filteredTags.filter(function (tag) {
        return tag !== selectedTagID;
      }));
    }
  }

  var postsToRender = filteredPosts.length > 0 ? filteredPosts : allPosts;
  return __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Tags:"), __jsx(_components_KeywordTags__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tags: tagCounts,
    handleTagFilter: handleTagFilter,
    filteredTags: filteredTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Posts:"), postsToRender.map(function (_ref2) {
    var _id = _ref2._id,
        _createdAt = _ref2._createdAt,
        description = _ref2.description,
        slug = _ref2.slug,
        title = _ref2.title,
        tags = _ref2.tags;
    return __jsx(ListItem, {
      key: _id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/post/[slug]",
      as: "/post/".concat(slug.current),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 29
      }
    }, title)), __jsx(DescP, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }, description), __jsx(DateP, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, moment__WEBPACK_IMPORTED_MODULE_6___default.a.utc(_createdAt).format("LL")), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }, tags.map(function (tag) {
      return __jsx(TagListItem, {
        key: tag._id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 37
        }
      }, tag.name);
    })));
  }));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d68b2648d560dcd59553.hot-update.js.map