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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderLayout */ "./components/HeaderLayout.js");
/* harmony import */ var _components_KeywordTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/KeywordTags */ "./components/KeywordTags.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_5__);






var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "nuslkc-0"
})(["margin:15px 0 0 15px;;font-size:1.75em;"]);
var DateP = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__DateP",
  componentId: "nuslkc-1"
})(["font-size:.85em;"]);

var Index = function Index(props) {
  console.log('props: ', props); // const propsArray = Object.values(props)

  var posts = props.posts; // console.log('posts: ', posts)

  return null; // last item in props is next.js url metadata
  // const posts = propsArray.slice(
  //     0, propsArray.length - 1
  // )
  // TODO: there's gotta be a more straightforward way to get these counts, right? Maybe just do it from query?
  // const tags = posts.reduce((tagCount, post) => {
  //     // TODO: is this check necessary or will there always be tags even when empty array?
  //    const postTags = post.tags && post.tags
  //     // console.log('postTags: ', postTags)
  //     postTags.forEach(tag => {
  //         if (!tagCount[tag.name]) {
  //             tagCount[tag.name] = 1
  //         } else {
  //             tagCount[tag.name] = tagCount[tag.name] + 1
  //         }
  //     })
  //     return tagCount
  // }, {})
  // return (
  //     <HeaderLayout>
  //         <h2>Tags:</h2>
  //         <KeywordTags 
  //             tags={tags}
  //         />
  //         <h2>Posts:</h2>
  //         {posts.map(
  //             ({ 
  //                 _id, 
  //                 _createdAt,
  //                 slug, 
  //                 title, 
  //                 description, 
  //             }) => (
  //                 <ListItem key={_id}>
  //                     <Link
  //                         href='/post/[slug]'
  //                         as={`/post/${slug.current}`}
  //                     >
  //                         <a>{title}</a>
  //                     </Link>
  //                     <p>{description}</p>
  //                     <DateP>
  //                         {moment.utc(_createdAt).format("LL")}
  //                     </DateP>
  //                 </ListItem>
  //             )
  //         )}
  //     </HeaderLayout>
  // )
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.36170bdcd9c9914e7830.hot-update.js.map