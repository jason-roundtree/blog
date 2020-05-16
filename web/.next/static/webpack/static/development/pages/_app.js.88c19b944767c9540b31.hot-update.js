webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./colorsAndThemes.js":
/*!****************************!*\
  !*** ./colorsAndThemes.js ***!
  \****************************/
/*! exports provided: default, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prism-react-renderer/themes/duotoneLight */ "./node_modules/prism-react-renderer/themes/duotoneLight/index.js");
/* harmony import */ var prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prism-react-renderer/themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js");


var colors = {
  offWhite: "rgb(252, 249, 237)",
  darkGrey: "rgb(54, 53, 55)",
  primaryColor: "rgb(3, 152, 252)",
  primaryColorDarker: "rgb(0, 85, 143)",
  secondaryColor: "rgb(250, 223, 147)",
  tertiaryColor: "rgb(16, 46, 36)",
  articleLinksLight: "rgb(114, 143, 203)",
  articleLinksDark: "rgb(255, 204, 153)"
};
var themes = {
  dark: {
    body: colors.darkGrey,
    text: colors.offWhitewhite,
    primaryColor: colors.secondaryColor,
    secondaryColor: colors.primaryColorDarker,
    iconSrc: '/images/sun.svg',
    iconAlt: 'Icon of moon for "Dark Mode" theme',
    syntax: prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__["default"],
    asideBackground: prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__["default"].plain.backgroundColor,
    articleLinks: colors.articleLinksDark
  },
  light: {
    body: colors.white,
    text: colors.darkGrey,
    primaryColor: colors.primaryColorDarker,
    secondaryColor: colors.secondaryColor,
    iconSrc: '/images/moon.svg',
    iconAlt: 'Icon of sun for "Light Mode" theme',
    syntax: prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__["default"],
    asideBackground: prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__["default"].plain.backgroundColor,
    articleLinks: colors.articleLinksLight
  }
};


/***/ })

})
//# sourceMappingURL=_app.js.88c19b944767c9540b31.hot-update.js.map