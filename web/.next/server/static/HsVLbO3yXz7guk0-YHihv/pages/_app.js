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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./colorsAndThemes.js
var colorsAndThemes = __webpack_require__("UksA");

// CONCATENATED MODULE: ./components/GlobalStyles.js


const GlobalStyles = external_styled_components_["createGlobalStyle"]`
    :root {
        --primary-color: ${colorsAndThemes["a" /* colors */].primaryColor};
        --primary-darker: ${colorsAndThemes["a" /* colors */].primaryColorDarker};
        --secondary-color: ${colorsAndThemes["a" /* colors */].secondaryColor};
        --tertiary-color: ${colorsAndThemes["a" /* colors */].tertiaryColor};
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
// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function MyApp({
  Component,
  pageProps
}) {
  const {
    0: userThemeStr,
    1: setUserThemeStr
  } = Object(external_react_["useState"])('light');
  const {
    0: userThemeObj,
    1: setUserThemeObj
  } = Object(external_react_["useState"])(colorsAndThemes["b" /* default */][userThemeStr]);
  Object(external_react_["useEffect"])(() => {
    setUserThemeObj(colorsAndThemes["b" /* default */][userThemeStr]);
  }, [userThemeStr]);

  function handleThemeToggle() {
    setUserThemeStr(userThemeStr === 'dark' ? 'light' : 'dark');
  }

  return __jsx(external_styled_components_["ThemeProvider"], {
    theme: userThemeObj
  }, __jsx(GlobalStyles, null), __jsx(Component, _extends({}, pageProps, {
    onToggleThemeClick: handleThemeToggle,
    themeString: userThemeStr
  })));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "UksA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YSjV");
/* harmony import */ var prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_duotoneLight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prism_react_renderer_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZiqQ");
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

/***/ "YSjV":
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer/themes/duotoneLight");

/***/ }),

/***/ "ZiqQ":
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer/themes/duotoneDark");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });