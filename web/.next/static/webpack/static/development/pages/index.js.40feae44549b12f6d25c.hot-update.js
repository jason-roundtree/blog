webpackHotUpdate("static/development/pages/index.js",{

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
  white: "rgb(252, 249, 237)",
  darkGrey: "rgb(54, 53, 55)",
  primaryColor: "rgb(3, 152, 252)",
  primaryColorDarker: "rgb(0, 85, 143)",
  secondaryColor: "rgb(250, 223, 147)",
  tertiaryColor: "rgb(16, 46, 36)"
};
var themes = {
  dark: {
    body: "".concat(colors.darkGrey),
    text: "".concat(colors.white),
    primaryColor: "".concat(colors.secondaryColor),
    secondaryColor: "".concat(colors.primaryColorDarker),
    iconSrc: '/images/sun.svg',
    iconAlt: 'Icon of moon for "Dark Mode" theme',
    syntax: prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  light: {
    body: "".concat(colors.white),
    text: "".concat(colors.darkGrey),
    primaryColor: "".concat(colors.primaryColorDarker),
    secondaryColor: "".concat(colors.secondaryColor),
    iconSrc: '/images/moon.svg',
    iconAlt: 'Icon of sun for "Light Mode" theme',
    syntax: prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
};


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/duotoneLight/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/duotoneLight/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Duotone Light
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#faf8f5",
    color: "#728fcb"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#b6ad9a"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#063289"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#b29762"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#2d2006"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#896724"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule"],
    style: {
      color: "#728fcb"
    }
  }, {
    types: ["placeholder", "variable"],
    style: {
      color: "#93abdc"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#896724"
    }
  }]
};

/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ })

})
//# sourceMappingURL=index.js.40feae44549b12f6d25c.hot-update.js.map