module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prism-react-renderer/themes/duotoneLight */ "prism-react-renderer/themes/duotoneLight");
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prism-react-renderer/themes/duotoneDark */ "prism-react-renderer/themes/duotoneDark");
/* harmony import */ var prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__);


const colors = {
  offWhite: `rgb(252, 249, 237)`,
  darkGrey: `rgb(54, 53, 55)`,
  primaryColor: `rgb(3, 152, 252)`,
  primaryColorDarker: `rgb(0, 85, 143)`,
  secondaryColor: `rgb(250, 223, 147)`,
  tertiaryColor: `rgb(16, 46, 36)`,
  articleLinksLight: `rgb(114, 143, 203)`,
  articleLinksDark: `rgb(255, 204, 153)`
};
const themes = {
  dark: {
    body: colors.darkGrey,
    text: colors.offWhite,
    primaryColor: colors.secondaryColor,
    secondaryColor: colors.primaryColorDarker,
    iconSrc: '/images/sun.svg',
    iconAlt: 'Icon of moon for "Dark Mode" theme',
    syntax: prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1___default.a,
    asideBackground: prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1___default.a.plain.backgroundColor,
    articleLinks: colors.articleLinksDark
  },
  light: {
    body: colors.offWhite,
    text: colors.darkGrey,
    primaryColor: colors.primaryColorDarker,
    secondaryColor: colors.secondaryColor,
    iconSrc: '/images/moon.svg',
    iconAlt: 'Icon of sun for "Light Mode" theme',
    syntax: prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0___default.a,
    asideBackground: prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0___default.a.plain.backgroundColor,
    articleLinks: colors.articleLinksLight
  }
};


/***/ }),

/***/ "./components/GlobalStyles.js":
/*!************************************!*\
  !*** ./components/GlobalStyles.js ***!
  \************************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorsAndThemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorsAndThemes */ "./colorsAndThemes.js");


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    :root {
        --primary-color: ${_colorsAndThemes__WEBPACK_IMPORTED_MODULE_1__["colors"].primaryColor};
        --primary-darker: ${_colorsAndThemes__WEBPACK_IMPORTED_MODULE_1__["colors"].primaryColorDarker};
        --secondary-color: ${_colorsAndThemes__WEBPACK_IMPORTED_MODULE_1__["colors"].secondaryColor};
        --tertiary-color: ${_colorsAndThemes__WEBPACK_IMPORTED_MODULE_1__["colors"].tertiaryColor};
    }

    body {
        background: ${({
  theme
}) => theme.body};
        color: ${({
  theme
}) => theme.text};
        /* font-family: 'Open Sans', sans-serif;
        font-family: 'Poppins', sans-serif; */
        font-family: 'Nunito Sans', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Archivo Narrow', sans-serif; */
        /* font-family: 'Nanum Gothic', sans-serif; */
        /* font-family: 'Lato', sans-serif; */
        
        font-weight: 300;
        color: var(--primary-color)
    }

    h2 {
        font-size: 1.5em;
        margin-top: 1.5em;
        font-family: 'Cuprum', sans-serif;
        font-family: 'Fjalla One', sans-serif;
    }

    main {
        padding: 0 2.5em 2.5em 2.5em;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    p {
        line-height: 1.5em;
        color: ${({
  theme
}) => theme.text};
    }

    button {
        padding: 7px 10px;
        color: var(--secondary-color);
        font-size: 1em;
        border: none;
        background-color: var(--primary-color);
        font-family: 'Nanum Gothic Coding', monospace;
        &:hover {
            cursor: pointer;
            background-color: var(--primary-darker);
        }
    }

    .selectedTag.selectedTag {
        background-color: var(--primary-darker)
    }

    pre {
        font-family: 'Courier Prime', monospace;
    }
`;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GlobalStyles */ "./components/GlobalStyles.js");
/* harmony import */ var _colorsAndThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colorsAndThemes */ "./colorsAndThemes.js");
var _jsxFileName = "/Users/jasonroundtree/projects/blog/web/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function MyApp({
  Component,
  pageProps
}) {
  const {
    0: userThemeStr,
    1: setUserThemeStr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light');
  const {
    0: userThemeObj,
    1: setUserThemeObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_colorsAndThemes__WEBPACK_IMPORTED_MODULE_3__["default"][userThemeStr]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setUserThemeObj(_colorsAndThemes__WEBPACK_IMPORTED_MODULE_3__["default"][userThemeStr]);
  }, [userThemeStr]);

  function handleThemeToggle() {
    setUserThemeStr(userThemeStr === 'dark' ? 'light' : 'dark');
  }

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: userThemeObj,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["GlobalStyles"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(Component, _extends({}, pageProps, {
    onToggleThemeClick: handleThemeToggle,
    themeString: userThemeStr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "prism-react-renderer/themes/duotoneDark":
/*!**********************************************************!*\
  !*** external "prism-react-renderer/themes/duotoneDark" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer/themes/duotoneDark");

/***/ }),

/***/ "prism-react-renderer/themes/duotoneLight":
/*!***********************************************************!*\
  !*** external "prism-react-renderer/themes/duotoneLight" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer/themes/duotoneLight");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map