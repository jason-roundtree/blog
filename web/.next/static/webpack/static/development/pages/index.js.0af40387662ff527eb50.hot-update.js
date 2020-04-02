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
})(["margin:15px 0 0 15px;padding:10px 15px;font-size:1.75em;border:1px solid rgb(250,223,147);"]);
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-1"
})(["font-size:.75em;"]);

function Index(_ref) {
  var _this = this;

  var posts = _ref.posts,
      tags = _ref.tags;
  console.log('posts: ', posts); // console.log('tags: ', tags)

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
      setFilteredTags = _useState4[1]; // console.log('tagCounts: ', tagCounts)


  console.log('filteredTags global: ', filteredTags);
  console.log('filteredPosts global: ', filteredPosts);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    tags.forEach(function _callee(tag) {
      var count, tagCount;
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

              // TODO: this check is in case i've added a tag in sanity studio but haven't assigned it to a post yet:
              if (count > 0) {
                tagCount = {
                  _id: tag._id,
                  name: tag.name,
                  count: count
                }; // TODO: Should i call all these at once??

                setTagCounts(function (state) {
                  return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [tagCount]);
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log('getFilteredPosts');
    console.log('filteredTags useEffect: ', filteredTags); // TODO: not totally sure how this mounted variable 
    // and the cleanup function at the end are working
    // to prevent react's memory leak warning:
    // https://www.debuggr.io/react-update-unmounted-component/

    var mounted = true;

    if (filteredTags.length > 0 && mounted) {
      // if (filteredTags.length > 0) {
      var allMatchedPosts = filteredTags.map(function (tag) {
        return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch("\n                    *[ _type == \"post\" && $tagID in tags[]._ref ]{\n                        ..., \n                        tags[]->{_id, name}\n                    }\n                ", {
          tagID: tag
        });
      });
      Promise.all(allMatchedPosts).then(function (data) {
        // console.log('then', data)
        var flattenedPosts = data.flat();

        function uniqueArray(posts) {
          Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(posts.map(function (obj) {
            return JSON.stringify(obj);
          }))).map(function (s) {
            return JSON.parse(s);
          });
        }

        var uniquePosts = uniqueArray(flattenedPosts); // console.log('uniquePosts: ', uniquePosts)

        setFilteredPosts(uniquePosts);
      });
      console.log('sadsadszddsa');
    } else {
      setFilteredPosts([]);
    }

    return function () {
      return mounted = false;
    };
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
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Tags:"), __jsx(_components_KeywordTags__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tags: tagCounts,
    handleTagFilter: handleTagFilter,
    filteredTags: filteredTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/post/[slug]",
      as: "/post/".concat(slug.current),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, description), __jsx(DateP, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }, moment__WEBPACK_IMPORTED_MODULE_6___default.a.utc(_createdAt).format("LL")), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, tags.map(function (tag) {
      return tag.name;
    })));
  }));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0af40387662ff527eb50.hot-update.js.map