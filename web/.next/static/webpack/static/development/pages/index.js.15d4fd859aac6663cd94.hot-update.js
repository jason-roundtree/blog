webpackHotUpdate("static/development/pages/index.js",{

/***/ "./client.js":
false,

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/components/KeywordTags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:10px 15px;margin:15px 0 0 15px;color:var;font-size:1.2em;border:none;background-color:var(--primary-color);font-family:'Lustria',serif;&:hover{cursor:pointer;}"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "KeywordTags__Span",
  componentId: "sc-1eepvlk-1"
})(["margin:0 5px;color:rgb(250,223,147);"]);

function KeywordTags(props) {
  var _this = this;

  // console.log('props: ', props)
  props.tags.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(TagBtn, {
    onClick: props.handleTagFilter,
    id: "clearFilter",
    className: props.filteredTags.length > 0 ? '' : 'selectedTag',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "All Posts"), props.tags.map(function (tag) {
    return tag.count && __jsx(TagBtn, {
      key: tag.name,
      id: tag._id,
      onClick: props.handleTagFilter,
      className: props.filteredTags.includes(tag._id) ? 'selectedTag' : '',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, tag.name, "\xA0 (", tag.count, ")");
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ }),

/***/ "./node_modules/@sanity/client/lib/assets/assetsClient.js":
false,

/***/ "./node_modules/@sanity/client/lib/auth/authClient.js":
false,

/***/ "./node_modules/@sanity/client/lib/config.js":
false,

/***/ "./node_modules/@sanity/client/lib/data/dataMethods.js":
false,

/***/ "./node_modules/@sanity/client/lib/data/encodeQueryString.js":
false,

/***/ "./node_modules/@sanity/client/lib/data/listen.js":
false,

/***/ "./node_modules/@sanity/client/lib/data/patch.js":
false,

/***/ "./node_modules/@sanity/client/lib/data/transaction.js":
false,

/***/ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js":
false,

/***/ "./node_modules/@sanity/client/lib/http/browserMiddleware.js":
false,

/***/ "./node_modules/@sanity/client/lib/http/errors.js":
false,

/***/ "./node_modules/@sanity/client/lib/http/queryString.js":
false,

/***/ "./node_modules/@sanity/client/lib/http/request.js":
false,

/***/ "./node_modules/@sanity/client/lib/http/requestOptions.js":
false,

/***/ "./node_modules/@sanity/client/lib/projects/projectsClient.js":
false,

/***/ "./node_modules/@sanity/client/lib/sanityClient.js":
false,

/***/ "./node_modules/@sanity/client/lib/users/usersClient.js":
false,

/***/ "./node_modules/@sanity/client/lib/util/defaults.js":
false,

/***/ "./node_modules/@sanity/client/lib/util/getSelection.js":
false,

/***/ "./node_modules/@sanity/client/lib/util/once.js":
false,

/***/ "./node_modules/@sanity/client/lib/util/pick.js":
false,

/***/ "./node_modules/@sanity/client/lib/validators.js":
false,

/***/ "./node_modules/@sanity/eventsource/browser.js":
false,

/***/ "./node_modules/@sanity/generate-help-url/index.js":
false,

/***/ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js":
false,

/***/ "./node_modules/@sanity/observable/minimal.js":
false,

/***/ "./node_modules/@sanity/observable/operators/filter.js":
false,

/***/ "./node_modules/@sanity/observable/operators/map.js":
false,

/***/ "./node_modules/@sanity/observable/operators/reduce.js":
false,

/***/ "./node_modules/deep-assign/index.js":
false,

/***/ "./node_modules/deep-assign/node_modules/is-obj/index.js":
false,

/***/ "./node_modules/eventsource-polyfill/dist/eventsource.js":
false,

/***/ "./node_modules/get-it/index.js":
false,

/***/ "./node_modules/get-it/lib/index.js":
false,

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js":
false,

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js":
false,

/***/ "./node_modules/get-it/lib/middleware/jsonRequest.js":
false,

/***/ "./node_modules/get-it/lib/middleware/jsonResponse.js":
false,

/***/ "./node_modules/get-it/lib/middleware/observable.js":
false,

/***/ "./node_modules/get-it/lib/middleware/progress/browser-progress.js":
false,

/***/ "./node_modules/get-it/lib/middleware/progress/index.js":
false,

/***/ "./node_modules/get-it/lib/request/browser-request.js":
false,

/***/ "./node_modules/get-it/lib/request/index.js":
false,

/***/ "./node_modules/get-it/lib/util/global.js":
false,

/***/ "./node_modules/get-it/lib/util/middlewareReducer.js":
false,

/***/ "./node_modules/is-plain-object/index.js":
false,

/***/ "./node_modules/isobject/index.js":
false,

/***/ "./node_modules/make-error/index.js":
false,

/***/ "./node_modules/nano-pubsub/index.js":
false,

/***/ "./node_modules/parse-headers/parse-headers.js":
false,

/***/ "./node_modules/querystringify/index.js":
false,

/***/ "./node_modules/requires-port/index.js":
false,

/***/ "./node_modules/rxjs/internal/Observable.js":
false,

/***/ "./node_modules/rxjs/internal/Observer.js":
false,

/***/ "./node_modules/rxjs/internal/Subscriber.js":
false,

/***/ "./node_modules/rxjs/internal/Subscription.js":
false,

/***/ "./node_modules/rxjs/internal/config.js":
false,

/***/ "./node_modules/rxjs/internal/observable/empty.js":
false,

/***/ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js":
false,

/***/ "./node_modules/rxjs/internal/operators/filter.js":
false,

/***/ "./node_modules/rxjs/internal/operators/map.js":
false,

/***/ "./node_modules/rxjs/internal/operators/reduce.js":
false,

/***/ "./node_modules/rxjs/internal/operators/scan.js":
false,

/***/ "./node_modules/rxjs/internal/operators/takeLast.js":
false,

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
false,

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
false,

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
false,

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
false,

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
false,

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
false,

/***/ "./node_modules/rxjs/internal/util/isArray.js":
false,

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
false,

/***/ "./node_modules/rxjs/internal/util/isObject.js":
false,

/***/ "./node_modules/rxjs/internal/util/noop.js":
false,

/***/ "./node_modules/rxjs/internal/util/pipe.js":
false,

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
false,

/***/ "./node_modules/same-origin/index.js":
false,

/***/ "./node_modules/url-parse/index.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})
//# sourceMappingURL=index.js.15d4fd859aac6663cd94.hot-update.js.map