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


var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import useSWR from 'swr'





var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "nuslkc-0"
})(["margin:15px 0 0 15px;padding:10px 15px;font-size:1.75em;border:1px solid var(--primary-darker);"]);
var ListItemLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "pages__ListItemLink",
  componentId: "nuslkc-1"
})(["font-weight:400;&:hover{cursor:pointer;color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.primaryColor;
});
var TagListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "pages__TagListItem",
  componentId: "nuslkc-2"
})(["display:inline-block;margin-right:5px;padding:3px 5px;font-family:'Nanum Gothic Coding',monospace;font-size:.5em;color:", ";background:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.secondaryColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primaryColor;
});
var DescP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "pages__DescP",
  componentId: "nuslkc-3"
})(["font-size:.85em;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.primaryColor;
});
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-4"
})(["font-size:.7em;"]); // removes duplicate post objects by converting each post into a JSON string so that they can be compared and filtered using `new Set`, then parsing the final unique array of posts back to a normal array of objects

function uniquePostsArray(posts) {
  return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(posts.map(function (postObj) {
    return JSON.stringify(postObj);
  }))).map(function (postStr) {
    return JSON.parse(postStr);
  });
}

function getTagCountsData(tags) {
  return Promise.all(tags.map(function _callee(tag) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch("\n                *[ _id == $tagID ]{\n                    name,\n                    _id,\n                    \"count\": count(\n                        *[ \n                            _type == \"post\" && \n                            $tagID in tags[]._ref \n                        ]\n                    )\n                }[0]\n            ", {
              tagID: tag._id
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }));
}

function Index(_ref5) {
  var _this = this;

  var posts = _ref5.posts,
      tags = _ref5.tags,
      onToggleThemeClick = _ref5.onToggleThemeClick;

  // console.log('posts: ', posts)
  // console.log('tags: ', tags)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(posts),
      allPosts = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      filteredPosts = _useState2[0],
      setFilteredPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      tagCounts = _useState3[0],
      setTagCounts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      filteredTags = _useState4[0],
      setFilteredTags = _useState4[1]; // console.log('tagCounts: ', tagCounts)


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getTagCountsData(tags).then(function (tagCounts) {
      setTagCounts(tagCounts);
    })["catch"](function (err) {
      return console.log('error getting tag counts: ', err);
    });
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
      });
      setFilteredPosts(uniquePostsArray(_filteredPosts));
    } else {
      setFilteredPosts([]);
    }
  }, [filteredTags]);

  function handleTagFilter(e) {
    var selectedTagID = e.target.id;

    if (selectedTagID === 'clearFilter') {
      setFilteredTags([]);
    } else if (!filteredTags.includes(selectedTagID)) {
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
  return (// TODO: is there a better way to render HeaderLayout instead of using in here and in [slug] (and any other separate pages that I add? Checkout next.js _document)
    __jsx(_components_HeaderLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onToggleThemeClick: onToggleThemeClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, "Tags:"), __jsx(_components_KeywordTags__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tags: tagCounts,
      handleTagFilter: handleTagFilter,
      filteredTags: filteredTags,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, "Posts:"), postsToRender.map(function (_ref6) {
      var _id = _ref6._id,
          _createdAt = _ref6._createdAt,
          description = _ref6.description,
          slug = _ref6.slug,
          title = _ref6.title,
          tags = _ref6.tags;
      return __jsx(ListItem, {
        key: _id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/post/[slug]",
        as: "/post/".concat(slug.current),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }
      }, __jsx(ListItemLink, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 29
        }
      }, title)), __jsx(DescP, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 25
        }
      }, description), __jsx(DateP, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 25
        }
      }, moment__WEBPACK_IMPORTED_MODULE_6___default.a.utc(_createdAt).format("LL")), __jsx("ul", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }
      }, tags.map(function (tag) {
        return __jsx(TagListItem, {
          key: tag._id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 37
          }
        }, tag.name);
      })));
    }))
  );
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4d2e5abe66bf9bc8b104.hot-update.js.map