webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/KeywordTags.js":
/*!***********************************!*\
  !*** ./components/KeywordTags.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalStyles.css */ "./globalStyles.css");
/* harmony import */ var _globalStyles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_css__WEBPACK_IMPORTED_MODULE_1__);


var TagBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "KeywordTags__TagBtn",
  componentId: "sc-1eepvlk-0"
})(["padding:10px 15px;margin:15px 0 0 15px;color:var(--secondary-color);font-size:1.2em;border:none;background-color:var(--primary-color);font-family:'Lustria',serif;&:hover{cursor:pointer;}"]);

function KeywordTags(props) {
  console.log('props: ', props); // props.tags.sort((a, b) => {
  //     return (a.name > b.name) ? 1 : -1
  // })
  // return (
  //     <div>
  //         <TagBtn
  //             onClick={props.handleTagFilter}
  //             id='clearFilter'
  //             className={props.filteredTags.length > 0 
  //                 ? ''
  //                 : 'selectedTag'
  //             }
  //         >
  //             All Posts
  //         </TagBtn>
  //         {props.tags.map(tag => (
  //             tag.count && (
  //                 <TagBtn 
  //                     key={tag.name}
  //                     id={tag._id}
  //                     onClick={props.handleTagFilter}
  //                     className={
  //                         props.filteredTags.includes(tag._id) 
  //                             ? 'selectedTag'
  //                             : ''
  //                     }
  //                 >   
  //                     {tag.name}
  //                     &nbsp;
  //                     ({tag.tagCount})
  //                 </TagBtn>
  //             )
  //         ))}
  //     </div>
  // )
}

/* harmony default export */ __webpack_exports__["default"] = (KeywordTags);

/***/ })

})
//# sourceMappingURL=index.js.18ab37b0cc58c6a8bc89.hot-update.js.map