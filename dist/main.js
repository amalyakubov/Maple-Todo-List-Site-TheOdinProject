/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ "./img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
}

body {
    display: flex;
    flex-direction: row;
    background-color: white;
}

P {
    margin: 0
}

:root {
    font-family: 'DM Sans', sans-serif;
    color: black;
}

#navigation {
    background-color: rgb(255, 255, 255);
    font-size: 24px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-right: 120px;
    gap: 10px;
}

#new-project {
    background-color: white;
    border: 1px solid black;
    font-size: 24px;
    border-radius: 140px;
    min-height: 20px;
    width: 50px;
    margin-left: -10px;
}

#projects {
    display: flex;
    flex-direction: column;
    gap: 10px;
}   

#projects div {
    color: rgb(46, 46, 46);
}

#main {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    padding-left: 20px;
    font-weight: 600;

    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
}

#taskInput {
    font-size: 24px;
    text-align: left;
    padding-left: 20px;
    border-radius: 10px;
    height: 50px;
    width: 50%;
    margin-left: 20%;
    border: none;
    background-color: rgba(255, 245, 245, 0.4);
    backdrop-filter: blur(2em);
}

#taskInput:focus {
    outline: none;
    background-color: rgb(235, 235, 235, 0.9);
}

#header {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 34px;
    padding: 20px;
}

#header p {
    margin: 0;
}

#headerdate {
    align-self: last center;
    font-weight: 600;
    font-size: 24px;
}

#taskcontainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 20px;
    height: 700px;

}

#taskcontainer div {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: white;
    border-radius: 4px;
}

#taskcontainer div.done {
    background-color: rgba(255, 245, 245, 0.1);
    backdrop-filter: blur(2em);
}

#taskcontainer div p {
    margin: 0;
    margin-left: 20px;
}

button.do {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin-left: 20px;
    background-color: white;
    border: 1px solid black;
}

#widget {
    font-size: 20px;
    background-color: #f1f1f1;
    border-radius: 15px;
    width: 900px;
    height: 700px;
    position: absolute;
    top: 20vh;
    left: 30vw;
    overflow: auto;
}

#widget > div {
    padding: 10px;
}

#widget #widget-nav {
    justify-content: space-between;
    padding: 15px;
}

#widget-nav p {
    font-weight: 500;
    font-size: 24px;
}

#widget div {
    display: flex;
    gap: 10px;
}

#widget #widget-header {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
}

#widget button {
    margin-left: 10px;
}

textarea {
    height: 3ch;
    font-size: 18px;
    font-weight: 500;
    border: 0.5 solid grey;
    box-shadow: none;
    resize: none;
    overflow: none;
    outline: none;
    overflow-y: hidden;
    font-family: 'DM Sans', sans-serif;
    box-sizing: border-box;
    padding: 10px;
}

textarea.expanded {
    height: 100px;
    width: 600px;
    border-radius: 5px;
}

#description-container p {
    font-weight: 500;
}

input {
    all: unset;
    font-size: inherit;
    box-sizing: border-box;
}

#create-project input {
    height: 40px;
    border: 2px solid black;
    padding: 8px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,500&display=swap');\r\n\r\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nhtml, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: white;\r\n}\r\n\r\nP {\r\n    margin: 0\r\n}\r\n\r\n:root {\r\n    font-family: 'DM Sans', sans-serif;\r\n    color: black;\r\n}\r\n\r\n#navigation {\r\n    background-color: rgb(255, 255, 255);\r\n    font-size: 24px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    padding-right: 120px;\r\n    gap: 10px;\r\n}\r\n\r\n#new-project {\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    font-size: 24px;\r\n    border-radius: 140px;\r\n    min-height: 20px;\r\n    width: 50px;\r\n    margin-left: -10px;\r\n}\r\n\r\n#projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}   \r\n\r\n#projects div {\r\n    color: rgb(46, 46, 46);\r\n}\r\n\r\n#main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n\r\n    width: 100%;\r\n    padding-left: 20px;\r\n    font-weight: 600;\r\n\r\n    background-image: url(../img/background.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#taskInput {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    padding-left: 20px;\r\n    border-radius: 10px;\r\n    height: 50px;\r\n    width: 50%;\r\n    margin-left: 20%;\r\n    border: none;\r\n    background-color: rgba(255, 245, 245, 0.4);\r\n    backdrop-filter: blur(2em);\r\n}\r\n\r\n#taskInput:focus {\r\n    outline: none;\r\n    background-color: rgb(235, 235, 235, 0.9);\r\n}\r\n\r\n#header {\r\n    width: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    font-size: 34px;\r\n    padding: 20px;\r\n}\r\n\r\n#header p {\r\n    margin: 0;\r\n}\r\n\r\n#headerdate {\r\n    align-self: last center;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n}\r\n\r\n#taskcontainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin: 20px;\r\n    height: 700px;\r\n\r\n}\r\n\r\n#taskcontainer div {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 50px;\r\n    background-color: white;\r\n    border-radius: 4px;\r\n}\r\n\r\n#taskcontainer div.done {\r\n    background-color: rgba(255, 245, 245, 0.1);\r\n    backdrop-filter: blur(2em);\r\n}\r\n\r\n#taskcontainer div p {\r\n    margin: 0;\r\n    margin-left: 20px;\r\n}\r\n\r\nbutton.do {\r\n    border-radius: 50%;\r\n    height: 20px;\r\n    width: 20px;\r\n    margin-left: 20px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n}\r\n\r\n#widget {\r\n    font-size: 20px;\r\n    background-color: #f1f1f1;\r\n    border-radius: 15px;\r\n    width: 900px;\r\n    height: 700px;\r\n    position: absolute;\r\n    top: 20vh;\r\n    left: 30vw;\r\n    overflow: auto;\r\n}\r\n\r\n#widget > div {\r\n    padding: 10px;\r\n}\r\n\r\n#widget #widget-nav {\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n}\r\n\r\n#widget-nav p {\r\n    font-weight: 500;\r\n    font-size: 24px;\r\n}\r\n\r\n#widget div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n#widget #widget-header {\r\n    display: flex;\r\n    gap: 20px;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n}\r\n\r\n#widget button {\r\n    margin-left: 10px;\r\n}\r\n\r\ntextarea {\r\n    height: 3ch;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    border: 0.5 solid grey;\r\n    box-shadow: none;\r\n    resize: none;\r\n    overflow: none;\r\n    outline: none;\r\n    overflow-y: hidden;\r\n    font-family: 'DM Sans', sans-serif;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n}\r\n\r\ntextarea.expanded {\r\n    height: 100px;\r\n    width: 600px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#description-container p {\r\n    font-weight: 500;\r\n}\r\n\r\ninput {\r\n    all: unset;\r\n    font-size: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#create-project input {\r\n    height: 40px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/item-constructor.js":
/*!*********************************!*\
  !*** ./src/item-constructor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignTaskToProject: () => (/* binding */ assignTaskToProject),
/* harmony export */   completeUncompleteTask: () => (/* binding */ completeUncompleteTask),
/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),
/* harmony export */   setDate: () => (/* binding */ setDate),
/* harmony export */   setDescription: () => (/* binding */ setDescription),
/* harmony export */   setIntiialProjects: () => (/* binding */ setIntiialProjects),
/* harmony export */   setPriority: () => (/* binding */ setPriority),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory),
/* harmony export */   updateCurrentProject: () => (/* binding */ updateCurrentProject),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });




function taskFactory(title, description, priority, currentProject, notes) {
    const TASK = {
        title:title,
        description:description,
        complete:false,
        dueDate: new Date(),
        priority: priority,
        currentProject: currentProject,
        notes: notes,
    };
    
    return {
        [title]: TASK
    };
}

function completeUncompleteTask(task) {
    let currentProject = getCurrentProject();
    let currentTask = JSON.parse(localStorage.getItem(currentProject));
    if (task.complete === true) {
        currentTask['tasks'][task.title].complete = false;
        task.complete = false;
    } else {
        currentTask['tasks'][task.title].complete = true;
        task.complete = true;
    }
    localStorage.setItem(currentProject, JSON.stringify(currentTask));
}

function updateTask(task) {
    assignTaskToProject(task);
}

function assignTaskToProject(task) {
    let currentProject = getCurrentProject();
    let project = JSON.parse(localStorage.getItem(currentProject));
    project.tasks = task;
    localStorage.setItem(currentProject, JSON.stringify(project));
}

function setDescription(task, description) {
    task.description = description;
    updateTask(task);
} 

function setPriority (task, priority) {
    task.priority = priority;
    updateTask(task);
}

function setDate(task, date) {
    task.dueDate = date;
    updateTask(task);
}


function createNewProject(name) {
    this.name = name;
    this.tasks = {

    };
}

function updateCurrentProject(projectname) {
    localStorage.setItem('current-project', projectname);
    updateLocalProjects(projectname);
}

function setIntiialProjects() {
    let today = new createNewProject('Today');
    localStorage.setItem(today.name, JSON.stringify(today));
    let work = new createNewProject('Work');
    localStorage.setItem(work.name, JSON.stringify(work));
    let personal = new createNewProject('Personal');
    localStorage.setItem(personal.name, JSON.stringify(personal));
}

function updateLocalProjects(projectname) {
    // Create and save the object to the localStorage
    localStorage.setItem(projectname, JSON.stringify(new createNewProject(projectname)));
}

function getCurrentProject() {
    if (localStorage.getItem('current-project')) {
    let currentProject = localStorage.getItem('current-project');
    return currentProject;
    } else {
        return 'Today';
    }
}






/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDisplayDate: () => (/* binding */ getDisplayDate)
/* harmony export */ });
function getDisplayDate() {
    const DAYNAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date = new Date();
    let day = DAYNAMES[date.getDay()];
    let dayNumber = date.getDate();
    let month = MONTHS[date.getMonth()];

    return `${day} ${dayNumber} ${month}`;
}

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadToday: () => (/* binding */ loadToday),
/* harmony export */   updateTaskDisplay: () => (/* binding */ updateTaskDisplay)
/* harmony export */ });
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./src/time.js");
/* harmony import */ var _item_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-constructor.js */ "./src/item-constructor.js");
/* harmony import */ var _widget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget.js */ "./src/widget.js");




let currentProject = 'Today';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentProject);

function loadToday() {
    const CONTAINER = document.getElementById('main');
    let date = (0,_time_js__WEBPACK_IMPORTED_MODULE_0__.getDisplayDate)();
    
    const HEADER = document.createElement('p');
    const HEADERCONTAINER = document.createElement('div');
    HEADER.innerHTML = 'Today,';
    const HEADERDATE = document.createElement('p');
    HEADERDATE.id = 'headerdate';
    HEADERDATE.innerHTML = `${date}`;
    HEADERCONTAINER.appendChild(HEADER);
    HEADERCONTAINER.appendChild(HEADERDATE);
    HEADERCONTAINER.id = 'header';
    CONTAINER.appendChild(HEADERCONTAINER);

    const TASKCONTAINER = document.createElement('div');
    TASKCONTAINER.id = 'taskcontainer';
    CONTAINER.appendChild(TASKCONTAINER);

    loadTaskCreator();
    addInputListeners();
    AddProjectsEventListner();
    (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();
    loadProjects();
    updateTaskDisplay();
}

function loadTaskCreator() {
    const CONTAINER = document.getElementById('main');
    let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'taskInput';
    inputBox.name = 'taskInput';
    inputBox.value = 'Add a task'; 
    CONTAINER.appendChild(inputBox);
}

function addInputListeners  () { 
    let input = document.getElementById('taskInput');
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && document.hasFocus() && input.value !== '') {
            let task = new _item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory(input.value);
            (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.updateTask)(task);
            updateTaskDisplay();
            resetInput();
        }
    })
    input.addEventListener('focus', () => {
        input.value = '';
    })
    input.addEventListener('focusout', () => {
        resetInput();
    })
    
}

function updateTaskDisplay() {
    const TASKCONTAINER = document.getElementById('taskcontainer');
    while (TASKCONTAINER.hasChildNodes()) {
        TASKCONTAINER.removeChild(TASKCONTAINER.firstChild);
    }

    let array = [];
    let currentProjectTasks = JSON.parse(localStorage.getItem((0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)())).tasks;
    for (const task in currentProjectTasks) { 
        array.push(currentProjectTasks[task]);
    }
    array.sort((function (a, b) {
        return a.dateCreated.localeCompare(b.dateCreated);
    } ))

    for (const taskObject in array) {
        let task = document.createElement('div');
        let titleElement = document.createElement('p');


        titleElement.id = 'title-element';
        titleElement.innerHTML = array[taskObject].title;
        let button = document.createElement('button');
        button.classList.add('do');

        // Adds the event listener to the task div that calls a widget load function
        if (!task.classList.contains('taskevl')) {
            task.addEventListener('click', () => {
                let currentProject = (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();
                let taskName = titleElement.textContent;
                let taskObject = JSON.parse(localStorage.getItem(currentProject));
                // let taskObject =  JSON.parse(localStorage.getItem(titleElement.textContent));
                (0,_widget_js__WEBPACK_IMPORTED_MODULE_2__.loadWidget)(task, taskObject['tasks'][taskName]);
            })
            task.classList.add('taskevl');
        }

        if (!task.classList.contains('hasevl')) {
            button.addEventListener('click', () => {
                console.log(array[taskObject]);
                (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.completeUncompleteTask)(array[taskObject]);
                button.classList.add('hasevl');
                task.classList.remove('done');
                let widgetButton = document.getElementById('widget-button');
                if (array[taskObject].complete) {
                        widgetButton.style.backgroundColor = 'black';
                        let p = document.getElementById('widget-header').lastElementChild;
                        p.style.textDecorationLine = 'line-through';
                } else {
                        widgetButton.style.backgroundColor = 'white';
                        let p = document.getElementById('widget-header').lastElementChild;
                        p.style.textDecorationLine = 'none';
                    }
                updateTaskDisplay();
            })

        }

        task.appendChild(button);
        task.appendChild(titleElement);
        TASKCONTAINER.appendChild(task);
        
        // Adds the styling to the button and a task title, if it's completed
        if (array[taskObject].complete === true ) {
            task.classList.add('done');
            titleElement.style.textDecorationLine = 'line-through';
            button.style.backgroundColor = 'black';
        }
        
    }   
}

function resetInput () {
    let input = document.getElementById('taskInput');
    input.value = 'Add a task';
    document.activeElement.blur();
}

function AddProjectsEventListner() {
    const BUTTON = document.getElementById('new-project');
    BUTTON.addEventListener('click', () => {
        showAddProjectWidget();
    })
}

function showAddProjectWidget() {
if (!document.getElementById('add-project-input')) {
    const NAVIGATION = document.getElementById('navigation')
    const ADDPROJECTCONTAINER = document.createElement('div');
    ADDPROJECTCONTAINER.id = 'create-project';
    const INPUTCONTAINER = document.createElement('div');
    ADDPROJECTCONTAINER.appendChild(INPUTCONTAINER);
    const ADDPROJECT = document.createElement('input');
    INPUTCONTAINER.appendChild(ADDPROJECT);
    ADDPROJECT.type = 'text';
    ADDPROJECT.id = 'add-project-input';
    const INPUTLABEL = document.createElement('label');
    INPUTCONTAINER.appendChild(INPUTLABEL);
    INPUTLABEL.htmlFor = 'add-project-input';
    
    NAVIGATION.appendChild(ADDPROJECTCONTAINER);
    ADDPROJECTCONTAINER.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.updateCurrentProject)(ADDPROJECT.value);
            createNewProject(ADDPROJECT.value);
        }
    })
    } else {
        removeProjectInput();
    }

}

function removeProjectInput () {
    const ADDPROJECTCONTAINER = document.getElementById('create-project');
    ADDPROJECTCONTAINER.remove();
}

function createNewProject(title) {
    const PROJECTSCONTAINER = document.getElementById('projects');
    const PROJECTDIV = document.createElement('p');
    PROJECTDIV.textContent = title;
    PROJECTSCONTAINER.appendChild(PROJECTDIV);
    if (document.getElementById('add-project-input')) {
        removeProjectInput();
    }
}

function loadProjects() {
    const PROJECTLIST = JSON.parse(localStorage.getItem('projectList'));
    for (const project in PROJECTLIST) {
        createNewProject(PROJECTLIST[project]);
    }
}

/***/ }),

/***/ "./src/widget.js":
/*!***********************!*\
  !*** ./src/widget.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadWidget: () => (/* binding */ loadWidget)
/* harmony export */ });
/* harmony import */ var _item_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-constructor */ "./src/item-constructor.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/today.js");



function loadWidget(task, taskObject) {


    let currentProject = (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();

    if (!document.getElementById('widget')) {
        const WIDGET = document.createElement('div');
    WIDGET.id = 'widget';
    document.body.appendChild(WIDGET);

    const NAV = document.createElement('div');
    NAV.id = 'widget-nav';
    const PROJECT = document.createElement('p');

    PROJECT.textContent = currentProject;
    NAV.appendChild(PROJECT);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';

    exitButton.addEventListener('click', () => {
        (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setPriority)(taskObject, SELECT.value);
        (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setDate)(taskObject, new Date(DATEINPUT.value));
        WIDGET.remove();
        
    })
    NAV.appendChild(exitButton);

    WIDGET.appendChild(NAV);

    const HEADER = document.createElement('div');
    HEADER.id = 'widget-header';

    let title = document.createElement('p');
    title.textContent = task.querySelector('p').textContent;

    console.log(taskObject);

    if (taskObject.complete === true ) {
        title.style.textDecoration = 'line-through';
    }

    HEADER.appendChild(createTaskButton(task, taskObject));
    HEADER.appendChild(title);
    WIDGET.appendChild(HEADER);

    const DESCRIPTIONCONTAINER = document.createElement('div');
    DESCRIPTIONCONTAINER.id = 'description-container';
    const DESCRIPTIONLABEL = document.createElement('label');
    DESCRIPTIONLABEL.for = 'description';
    DESCRIPTIONLABEL.textContent = 'Description:';

    const GROWWRAP = document.createElement('div');
    GROWWRAP.id = 'grow-wrap';
    let description = createDescription(taskObject);
    GROWWRAP.appendChild(description);

    DESCRIPTIONCONTAINER.appendChild(DESCRIPTIONLABEL);
    DESCRIPTIONCONTAINER.appendChild(GROWWRAP);

    WIDGET.appendChild(DESCRIPTIONCONTAINER);

    const LIST = document.createElement('div');

    const DATECONTAINER = document.createElement('div');
    const DATELABEL = document.createElement('label');
    DATELABEL.for = 'date';
    DATELABEL.textContent = 'Date:';

    const DATEINPUT = document.createElement('input');
    DATEINPUT.type = 'date';
    DATEINPUT.id = 'date';
    DATEINPUT.name = 'due';
    DATEINPUT.min = new Date().toISOString().split("T")[0];

    DATECONTAINER.appendChild(DATELABEL);
    DATECONTAINER.appendChild(DATEINPUT);
    WIDGET.appendChild(DATECONTAINER);


    const PRIORITYCONTAINER = document.createElement('div');
    const LABEL = document.createElement('label');
    LABEL.for = 'priortiy';
    LABEL.textContent = 'Priority';
    const SELECT = document.createElement('select');
    SELECT.name = 'priorities';
    SELECT.id = 'priority';

    PRIORITYCONTAINER.appendChild(LABEL);
    PRIORITYCONTAINER.appendChild(SELECT);
    LIST.appendChild(PRIORITYCONTAINER);
    WIDGET.appendChild(LIST);

    
    let optionOne = document.createElement('option');
    optionOne.value = 1;
    optionOne.textContent = 'One';
    SELECT.appendChild(optionOne);
    
    let optionTwo = document.createElement('option');
    optionTwo.value = 2;
    optionTwo.textContent = 'Two';
    SELECT.appendChild(optionTwo);

    let optionThree = document.createElement('option');
    optionThree.value = 3;
    optionThree.textContent = 'Three';
    SELECT.appendChild(optionThree);

    let optionFour = document.createElement('option');
    optionFour.value = 4;
    optionFour.textContent = 'Four';
    SELECT.appendChild(optionFour);

    SELECT.addEventListener('keypress', function (e) { 
        if (e.key === 'Enter') {
            (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setPriority)(taskObject, SELECT.value);
        }
    })

    DATEINPUT.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setDate)(taskObject, new Date(DATEINPUT.value));
        }
    })

    if (JSON.parse(localStorage.getItem(currentProject))['tasks'][taskObject.title].priority) {
        let priority = JSON.parse(localStorage.getItem(taskObject.title)).priority;
        let select = document.querySelector('select');
        select.value = priority;
    }

    if (JSON.parse(localStorage.getItem(currentProject))['tasks'][taskObject.title].dueDate) {
        let date = JSON.parse(localStorage.getItem(currentProject))['tasks'][taskObject.title].dueDate;
        let final = date.substring(0, 10);
        DATEINPUT.value = final;
    }

    let button = WIDGET.getElementsByClassName('do')[0];
    if (taskObject.complete === true) {
        button.style.backgroundColor = 'black';
    }
    }

    
}


function createTaskButton (task, taskObject) {
    let button = document.createElement('button');
    button.id = 'widget-button';
    button.classList.add('do');
    
    button.addEventListener('click', () => {
        (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.completeUncompleteTask)(taskObject);
        if (taskObject.complete === true) {
            button.style.backgroundColor = 'black';
            let p = document.getElementById('widget-header').lastElementChild;
            p.style.textDecorationLine = 'line-through';
        } else {
            button.style.backgroundColor = 'white';
            let p = document.getElementById('widget-header').lastElementChild;
            p.style.textDecorationLine = 'none';
        }
        button.classList.add('hasevl');
        task.classList.remove('done');
        (0,_today__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();
    })
    return button;
}

function expandTextArea(textarea)  {
    textarea.classList.add('expanded');
}

function textAreaToParag(textarea, taskObject) {
    const DESCRIPTIONCONTAINER = document.getElementById('description-container');
    let p = document.createElement('p');
    p.id = 'paragraph';
    p.textContent = textarea.value;
    textarea.remove();
    DESCRIPTIONCONTAINER.appendChild(p);
    p.addEventListener('click', () => {
        let textArea = document.createElement('textarea');
        textArea.innerText = p.textContent;
        p.remove();
        let description = createDescription(taskObject);
        description.value = p.textContent;
        DESCRIPTIONCONTAINER.appendChild(description);  
    })
}

function createDescription(taskObject) {
    const DESCRIPTIONINPUT = document.createElement('textarea');
    DESCRIPTIONINPUT.id = 'description';
    DESCRIPTIONINPUT.name = 'description';
    let value = taskObject.description;
    DESCRIPTIONINPUT.value = value;

    DESCRIPTIONINPUT.addEventListener('click', () => {
        expandTextArea(DESCRIPTIONINPUT);
    })

    DESCRIPTIONINPUT.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setDescription)(taskObject, DESCRIPTIONINPUT.value);
            DESCRIPTIONINPUT.blur();
            DESCRIPTIONINPUT.classList.remove('expanded');
            textAreaToParag(DESCRIPTIONINPUT, taskObject);
        }
    })

    let scrollHeight = 100;

    DESCRIPTIONINPUT.onkeydown = function() {
        if (scrollHeight < DESCRIPTIONINPUT.scrollHeight) { 
            scrollHeight = DESCRIPTIONINPUT.scrollHeight;
            document.getElementById("description").style.height = scrollHeight + 'px';
        }
    };

    return DESCRIPTIONINPUT;
}

/***/ }),

/***/ "./img/background.jpg":
/*!****************************!*\
  !*** ./img/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6d653e7b48930a572f4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-constructor */ "./src/item-constructor.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today.js */ "./src/today.js");




if (!localStorage.getItem('Work')) {
    (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setIntiialProjects)();
}
(0,_today_js__WEBPACK_IMPORTED_MODULE_2__.loadToday)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSSxZQUFZLFlBQVksMEJBQTBCO0FBQ3BMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZ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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBd0Q7QUFDbkM7QUFDa0I7QUFDdkM7QUFDQTtBQUNBLElBQUkscUVBQWtCO0FBQ3RCO0FBQ0Esb0RBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy9pdGVtLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvd2lkZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2FuczppdGFsLG9wc3osd2dodEAwLDkuLjQwLDQwMDswLDkuLjQwLDUwMDswLDkuLjQwLDcwMDsxLDkuLjQwLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcclxuICAgdjIuMCB8IDIwMTEwMTI2XHJcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXHJcbiovXHJcblxyXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5IHtcclxuXHRsaW5lLWhlaWdodDogMTtcclxufVxyXG5vbCwgdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZSwgcSB7XHJcblx0cXVvdGVzOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSwgcTphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0Y29udGVudDogbm9uZTtcclxufVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5QIHtcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbmF2aWdhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI25ldy1wcm9qZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxufVxyXG5cclxuI3Byb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59ICAgXHJcblxyXG4jcHJvamVjdHMgZGl2IHtcclxuICAgIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGFza0lucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ1LCAyNDUsIDAuNCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcclxufVxyXG5cclxuI3Rhc2tJbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUsIDAuOSk7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jaGVhZGVyZGF0ZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBsYXN0IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbiN0YXNrY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG5cclxufVxyXG5cclxuI3Rhc2tjb250YWluZXIgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbiN0YXNrY29udGFpbmVyIGRpdi5kb25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC4xKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xyXG59XHJcblxyXG4jdGFza2NvbnRhaW5lciBkaXYgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuYnV0dG9uLmRvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jd2lkZ2V0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjB2aDtcclxuICAgIGxlZnQ6IDMwdnc7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI3dpZGdldCA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jd2lkZ2V0ICN3aWRnZXQtbmF2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbiN3aWRnZXQtbmF2IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuI3dpZGdldCBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI3dpZGdldCAjd2lkZ2V0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiN3aWRnZXQgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDNjaDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXI6IDAuNSBzb2xpZCBncmV5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxudGV4dGFyZWEuZXhwYW5kZWQge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jY3JlYXRlLXByb2plY3QgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLHlEQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2FuczppdGFsLG9wc3osd2dodEAwLDkuLjQwLDQwMDswLDkuLjQwLDUwMDswLDkuLjQwLDcwMDsxLDkuLjQwLDUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuUCB7XFxyXFxuICAgIG1hcmdpbjogMFxcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI25hdmlnYXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTIwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE0MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufSAgIFxcclxcblxcclxcbiNwcm9qZWN0cyBkaXYge1xcclxcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9iYWNrZ3JvdW5kLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tJbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjQpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tJbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyZGF0ZSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGxhc3QgY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tjb250YWluZXIgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza2NvbnRhaW5lciBkaXYuZG9uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC4xKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJlbSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrY29udGFpbmVyIGRpdiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRvIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jd2lkZ2V0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogOTAwcHg7XFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHZoO1xcclxcbiAgICBsZWZ0OiAzMHZ3O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3dpZGdldCA+IGRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgI3dpZGdldC1uYXYge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQtbmF2IHAge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2lkZ2V0ICN3aWRnZXQtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAzY2g7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYm9yZGVyOiAwLjUgc29saWQgZ3JleTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5leHBhbmRlZCB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24tY29udGFpbmVyIHAge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0IGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldERhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGN1cnJlbnRQcm9qZWN0LCBub3Rlcykge1xyXG4gICAgY29uc3QgVEFTSyA9IHtcclxuICAgICAgICB0aXRsZTp0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbixcclxuICAgICAgICBjb21wbGV0ZTpmYWxzZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcclxuICAgICAgICBjdXJyZW50UHJvamVjdDogY3VycmVudFByb2plY3QsXHJcbiAgICAgICAgbm90ZXM6IG5vdGVzLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbdGl0bGVdOiBUQVNLXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVVbmNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgbGV0IGN1cnJlbnRUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpO1xyXG4gICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICBjdXJyZW50VGFza1sndGFza3MnXVt0YXNrLnRpdGxlXS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRhc2suY29tcGxldGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudFRhc2tbJ3Rhc2tzJ11bdGFzay50aXRsZV0uY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2spIHtcclxuICAgIGFzc2lnblRhc2tUb1Byb2plY3QodGFzayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25UYXNrVG9Qcm9qZWN0KHRhc2spIHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsZXQgcHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKTtcclxuICAgIHByb2plY3QudGFza3MgPSB0YXNrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKHRhc2ssIGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB1cGRhdGVUYXNrKHRhc2spO1xyXG59IFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5ICh0YXNrLCBwcmlvcml0eSkge1xyXG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdXBkYXRlVGFzayh0YXNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGUodGFzaywgZGF0ZSkge1xyXG4gICAgdGFzay5kdWVEYXRlID0gZGF0ZTtcclxuICAgIHVwZGF0ZVRhc2sodGFzayk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0ge1xyXG5cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdChwcm9qZWN0bmFtZSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQtcHJvamVjdCcsIHByb2plY3RuYW1lKTtcclxuICAgIHVwZGF0ZUxvY2FsUHJvamVjdHMocHJvamVjdG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SW50aWlhbFByb2plY3RzKCkge1xyXG4gICAgbGV0IHRvZGF5ID0gbmV3IGNyZWF0ZU5ld1Byb2plY3QoJ1RvZGF5Jyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2RheS5uYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RheSkpO1xyXG4gICAgbGV0IHdvcmsgPSBuZXcgY3JlYXRlTmV3UHJvamVjdCgnV29yaycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0od29yay5uYW1lLCBKU09OLnN0cmluZ2lmeSh3b3JrKSk7XHJcbiAgICBsZXQgcGVyc29uYWwgPSBuZXcgY3JlYXRlTmV3UHJvamVjdCgnUGVyc29uYWwnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBlcnNvbmFsLm5hbWUsIEpTT04uc3RyaW5naWZ5KHBlcnNvbmFsKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsUHJvamVjdHMocHJvamVjdG5hbWUpIHtcclxuICAgIC8vIENyZWF0ZSBhbmQgc2F2ZSB0aGUgb2JqZWN0IHRvIHRoZSBsb2NhbFN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RuYW1lLCBKU09OLnN0cmluZ2lmeShuZXcgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0bmFtZSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50LXByb2plY3QnKSkge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQtcHJvamVjdCcpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ1RvZGF5JztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlEYXRlKCkge1xyXG4gICAgY29uc3QgREFZTkFNRVMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XHJcbiAgICBjb25zdCBNT05USFMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRheSA9IERBWU5BTUVTW2RhdGUuZ2V0RGF5KCldO1xyXG4gICAgbGV0IGRheU51bWJlciA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gTU9OVEhTW2RhdGUuZ2V0TW9udGgoKV07XHJcblxyXG4gICAgcmV0dXJuIGAke2RheX0gJHtkYXlOdW1iZXJ9ICR7bW9udGh9YDtcclxufSIsImltcG9ydCB7IGdldERpc3BsYXlEYXRlIH0gZnJvbSBcIi4vdGltZS5qc1wiO1xyXG5pbXBvcnQgeyBjb21wbGV0ZVVuY29tcGxldGVUYXNrLCBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QsIHRhc2tGYWN0b3J5LCB1cGRhdGVDdXJyZW50UHJvamVjdCwgdXBkYXRlTG9jYWxQcm9qZWN0cywgdXBkYXRlVGFzayB9IGZyb20gXCIuL2l0ZW0tY29uc3RydWN0b3IuanNcIjtcclxuaW1wb3J0IHsgbG9hZFdpZGdldCB9IGZyb20gXCIuL3dpZGdldC5qc1wiO1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJ1RvZGF5JztcclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFByb2plY3Q7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRvZGF5KCkge1xyXG4gICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCBkYXRlID0gZ2V0RGlzcGxheURhdGUoKTtcclxuICAgIFxyXG4gICAgY29uc3QgSEVBREVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgSEVBREVSQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBIRUFERVIuaW5uZXJIVE1MID0gJ1RvZGF5LCc7XHJcbiAgICBjb25zdCBIRUFERVJEQVRFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgSEVBREVSREFURS5pZCA9ICdoZWFkZXJkYXRlJztcclxuICAgIEhFQURFUkRBVEUuaW5uZXJIVE1MID0gYCR7ZGF0ZX1gO1xyXG4gICAgSEVBREVSQ09OVEFJTkVSLmFwcGVuZENoaWxkKEhFQURFUik7XHJcbiAgICBIRUFERVJDT05UQUlORVIuYXBwZW5kQ2hpbGQoSEVBREVSREFURSk7XHJcbiAgICBIRUFERVJDT05UQUlORVIuaWQgPSAnaGVhZGVyJztcclxuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChIRUFERVJDT05UQUlORVIpO1xyXG5cclxuICAgIGNvbnN0IFRBU0tDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRBU0tDT05UQUlORVIuaWQgPSAndGFza2NvbnRhaW5lcic7XHJcbiAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoVEFTS0NPTlRBSU5FUik7XHJcblxyXG4gICAgbG9hZFRhc2tDcmVhdG9yKCk7XHJcbiAgICBhZGRJbnB1dExpc3RlbmVycygpO1xyXG4gICAgQWRkUHJvamVjdHNFdmVudExpc3RuZXIoKTtcclxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsb2FkUHJvamVjdHMoKTtcclxuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRUYXNrQ3JlYXRvcigpIHtcclxuICAgIGNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRCb3gudHlwZSA9ICd0ZXh0JztcclxuICAgIGlucHV0Qm94LmlkID0gJ3Rhc2tJbnB1dCc7XHJcbiAgICBpbnB1dEJveC5uYW1lID0gJ3Rhc2tJbnB1dCc7XHJcbiAgICBpbnB1dEJveC52YWx1ZSA9ICdBZGQgYSB0YXNrJzsgXHJcbiAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbnB1dExpc3RlbmVycyAgKCkgeyBcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgZG9jdW1lbnQuaGFzRm9jdXMoKSAmJiBpbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgbGV0IHRhc2sgPSBuZXcgdGFza0ZhY3RvcnkoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB1cGRhdGVUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xyXG4gICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XHJcbiAgICBjb25zdCBUQVNLQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tjb250YWluZXInKTtcclxuICAgIHdoaWxlIChUQVNLQ09OVEFJTkVSLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIFRBU0tDT05UQUlORVIucmVtb3ZlQ2hpbGQoVEFTS0NPTlRBSU5FUi5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRDdXJyZW50UHJvamVjdCgpKSkudGFza3M7XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgaW4gY3VycmVudFByb2plY3RUYXNrcykgeyBcclxuICAgICAgICBhcnJheS5wdXNoKGN1cnJlbnRQcm9qZWN0VGFza3NbdGFza10pO1xyXG4gICAgfVxyXG4gICAgYXJyYXkuc29ydCgoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5kYXRlQ3JlYXRlZC5sb2NhbGVDb21wYXJlKGIuZGF0ZUNyZWF0ZWQpO1xyXG4gICAgfSApKVxyXG5cclxuICAgIGZvciAoY29uc3QgdGFza09iamVjdCBpbiBhcnJheSkge1xyXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcblxyXG4gICAgICAgIHRpdGxlRWxlbWVudC5pZCA9ICd0aXRsZS1lbGVtZW50JztcclxuICAgICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gYXJyYXlbdGFza09iamVjdF0udGl0bGU7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkbycpO1xyXG5cclxuICAgICAgICAvLyBBZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFzayBkaXYgdGhhdCBjYWxscyBhIHdpZGdldCBsb2FkIGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKCF0YXNrLmNsYXNzTGlzdC5jb250YWlucygndGFza2V2bCcpKSB7XHJcbiAgICAgICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gdGl0bGVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGFza09iamVjdCA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgbG9hZFdpZGdldCh0YXNrLCB0YXNrT2JqZWN0Wyd0YXNrcyddW3Rhc2tOYW1lXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFza2V2bCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0YXNrLmNsYXNzTGlzdC5jb250YWlucygnaGFzZXZsJykpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlbdGFza09iamVjdF0pO1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVVbmNvbXBsZXRlVGFzayhhcnJheVt0YXNrT2JqZWN0XSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaGFzZXZsJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcclxuICAgICAgICAgICAgICAgIGxldCB3aWRnZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0LWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W3Rhc2tPYmplY3RdLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQtaGVhZGVyJykubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5zdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQtaGVhZGVyJykubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5zdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xyXG4gICAgICAgIFRBU0tDT05UQUlORVIuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkcyB0aGUgc3R5bGluZyB0byB0aGUgYnV0dG9uIGFuZCBhIHRhc2sgdGl0bGUsIGlmIGl0J3MgY29tcGxldGVkXHJcbiAgICAgICAgaWYgKGFycmF5W3Rhc2tPYmplY3RdLmNvbXBsZXRlID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQgKCkge1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnQWRkIGEgdGFzayc7XHJcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQWRkUHJvamVjdHNFdmVudExpc3RuZXIoKSB7XHJcbiAgICBjb25zdCBCVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcclxuICAgIEJVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzaG93QWRkUHJvamVjdFdpZGdldCgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3RXaWRnZXQoKSB7XHJcbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWlucHV0JykpIHtcclxuICAgIGNvbnN0IE5BVklHQVRJT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGlvbicpXHJcbiAgICBjb25zdCBBRERQUk9KRUNUQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBBRERQUk9KRUNUQ09OVEFJTkVSLmlkID0gJ2NyZWF0ZS1wcm9qZWN0JztcclxuICAgIGNvbnN0IElOUFVUQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBBRERQUk9KRUNUQ09OVEFJTkVSLmFwcGVuZENoaWxkKElOUFVUQ09OVEFJTkVSKTtcclxuICAgIGNvbnN0IEFERFBST0pFQ1QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgSU5QVVRDT05UQUlORVIuYXBwZW5kQ2hpbGQoQUREUFJPSkVDVCk7XHJcbiAgICBBRERQUk9KRUNULnR5cGUgPSAndGV4dCc7XHJcbiAgICBBRERQUk9KRUNULmlkID0gJ2FkZC1wcm9qZWN0LWlucHV0JztcclxuICAgIGNvbnN0IElOUFVUTEFCRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgSU5QVVRDT05UQUlORVIuYXBwZW5kQ2hpbGQoSU5QVVRMQUJFTCk7XHJcbiAgICBJTlBVVExBQkVMLmh0bWxGb3IgPSAnYWRkLXByb2plY3QtaW5wdXQnO1xyXG4gICAgXHJcbiAgICBOQVZJR0FUSU9OLmFwcGVuZENoaWxkKEFERFBST0pFQ1RDT05UQUlORVIpO1xyXG4gICAgQUREUFJPSkVDVENPTlRBSU5FUi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB1cGRhdGVDdXJyZW50UHJvamVjdChBRERQUk9KRUNULnZhbHVlKTtcclxuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChBRERQUk9KRUNULnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZW1vdmVQcm9qZWN0SW5wdXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RJbnB1dCAoKSB7XHJcbiAgICBjb25zdCBBRERQUk9KRUNUQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XHJcbiAgICBBRERQUk9KRUNUQ09OVEFJTkVSLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICBjb25zdCBQUk9KRUNUU0NPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xyXG4gICAgY29uc3QgUFJPSkVDVERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIFBST0pFQ1RESVYudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIFBST0pFQ1RTQ09OVEFJTkVSLmFwcGVuZENoaWxkKFBST0pFQ1RESVYpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1pbnB1dCcpKSB7XHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdElucHV0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IFBST0pFQ1RMSVNUID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSk7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gUFJPSkVDVExJU1QpIHtcclxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KFBST0pFQ1RMSVNUW3Byb2plY3RdKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbXBsZXRlVW5jb21wbGV0ZVRhc2ssIHNldERlc2NyaXB0aW9uLCBzZXRQcmlvcml0eSwgc2V0RGF0ZSwgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9pdGVtLWNvbnN0cnVjdG9yXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vdG9kYXlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkV2lkZ2V0KHRhc2ssIHRhc2tPYmplY3QpIHtcclxuXHJcblxyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQnKSkge1xyXG4gICAgICAgIGNvbnN0IFdJREdFVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgV0lER0VULmlkID0gJ3dpZGdldCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFdJREdFVCk7XHJcblxyXG4gICAgY29uc3QgTkFWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBOQVYuaWQgPSAnd2lkZ2V0LW5hdic7XHJcbiAgICBjb25zdCBQUk9KRUNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIFBST0pFQ1QudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdDtcclxuICAgIE5BVi5hcHBlbmRDaGlsZChQUk9KRUNUKTtcclxuXHJcbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBleGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xyXG5cclxuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJpb3JpdHkodGFza09iamVjdCwgU0VMRUNULnZhbHVlKTtcclxuICAgICAgICBzZXREYXRlKHRhc2tPYmplY3QsIG5ldyBEYXRlKERBVEVJTlBVVC52YWx1ZSkpO1xyXG4gICAgICAgIFdJREdFVC5yZW1vdmUoKTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBOQVYuYXBwZW5kQ2hpbGQoZXhpdEJ1dHRvbik7XHJcblxyXG4gICAgV0lER0VULmFwcGVuZENoaWxkKE5BVik7XHJcblxyXG4gICAgY29uc3QgSEVBREVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBIRUFERVIuaWQgPSAnd2lkZ2V0LWhlYWRlcic7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrT2JqZWN0KTtcclxuXHJcbiAgICBpZiAodGFza09iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSApIHtcclxuICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgfVxyXG5cclxuICAgIEhFQURFUi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnV0dG9uKHRhc2ssIHRhc2tPYmplY3QpKTtcclxuICAgIEhFQURFUi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoSEVBREVSKTtcclxuXHJcbiAgICBjb25zdCBERVNDUklQVElPTkNPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgREVTQ1JJUFRJT05DT05UQUlORVIuaWQgPSAnZGVzY3JpcHRpb24tY29udGFpbmVyJztcclxuICAgIGNvbnN0IERFU0NSSVBUSU9OTEFCRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgREVTQ1JJUFRJT05MQUJFTC5mb3IgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgREVTQ1JJUFRJT05MQUJFTC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xyXG5cclxuICAgIGNvbnN0IEdST1dXUkFQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBHUk9XV1JBUC5pZCA9ICdncm93LXdyYXAnO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24odGFza09iamVjdCk7XHJcbiAgICBHUk9XV1JBUC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgREVTQ1JJUFRJT05DT05UQUlORVIuYXBwZW5kQ2hpbGQoREVTQ1JJUFRJT05MQUJFTCk7XHJcbiAgICBERVNDUklQVElPTkNPTlRBSU5FUi5hcHBlbmRDaGlsZChHUk9XV1JBUCk7XHJcblxyXG4gICAgV0lER0VULmFwcGVuZENoaWxkKERFU0NSSVBUSU9OQ09OVEFJTkVSKTtcclxuXHJcbiAgICBjb25zdCBMSVNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgREFURUNPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgREFURUxBQkVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIERBVEVMQUJFTC5mb3IgPSAnZGF0ZSc7XHJcbiAgICBEQVRFTEFCRUwudGV4dENvbnRlbnQgPSAnRGF0ZTonO1xyXG5cclxuICAgIGNvbnN0IERBVEVJTlBVVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBEQVRFSU5QVVQudHlwZSA9ICdkYXRlJztcclxuICAgIERBVEVJTlBVVC5pZCA9ICdkYXRlJztcclxuICAgIERBVEVJTlBVVC5uYW1lID0gJ2R1ZSc7XHJcbiAgICBEQVRFSU5QVVQubWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgICBEQVRFQ09OVEFJTkVSLmFwcGVuZENoaWxkKERBVEVMQUJFTCk7XHJcbiAgICBEQVRFQ09OVEFJTkVSLmFwcGVuZENoaWxkKERBVEVJTlBVVCk7XHJcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoREFURUNPTlRBSU5FUik7XHJcblxyXG5cclxuICAgIGNvbnN0IFBSSU9SSVRZQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBMQUJFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBMQUJFTC5mb3IgPSAncHJpb3J0aXknO1xyXG4gICAgTEFCRUwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gICAgY29uc3QgU0VMRUNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBTRUxFQ1QubmFtZSA9ICdwcmlvcml0aWVzJztcclxuICAgIFNFTEVDVC5pZCA9ICdwcmlvcml0eSc7XHJcblxyXG4gICAgUFJJT1JJVFlDT05UQUlORVIuYXBwZW5kQ2hpbGQoTEFCRUwpO1xyXG4gICAgUFJJT1JJVFlDT05UQUlORVIuYXBwZW5kQ2hpbGQoU0VMRUNUKTtcclxuICAgIExJU1QuYXBwZW5kQ2hpbGQoUFJJT1JJVFlDT05UQUlORVIpO1xyXG4gICAgV0lER0VULmFwcGVuZENoaWxkKExJU1QpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IG9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uT25lLnZhbHVlID0gMTtcclxuICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdPbmUnO1xyXG4gICAgU0VMRUNULmFwcGVuZENoaWxkKG9wdGlvbk9uZSk7XHJcbiAgICBcclxuICAgIGxldCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvblR3by52YWx1ZSA9IDI7XHJcbiAgICBvcHRpb25Ud28udGV4dENvbnRlbnQgPSAnVHdvJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25Ud28pO1xyXG5cclxuICAgIGxldCBvcHRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uVGhyZWUudmFsdWUgPSAzO1xyXG4gICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnVGhyZWUnO1xyXG4gICAgU0VMRUNULmFwcGVuZENoaWxkKG9wdGlvblRocmVlKTtcclxuXHJcbiAgICBsZXQgb3B0aW9uRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uRm91ci52YWx1ZSA9IDQ7XHJcbiAgICBvcHRpb25Gb3VyLnRleHRDb250ZW50ID0gJ0ZvdXInO1xyXG4gICAgU0VMRUNULmFwcGVuZENoaWxkKG9wdGlvbkZvdXIpO1xyXG5cclxuICAgIFNFTEVDVC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7IFxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZXRQcmlvcml0eSh0YXNrT2JqZWN0LCBTRUxFQ1QudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgREFURUlOUFVULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgc2V0RGF0ZSh0YXNrT2JqZWN0LCBuZXcgRGF0ZShEQVRFSU5QVVQudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSlbJ3Rhc2tzJ11bdGFza09iamVjdC50aXRsZV0ucHJpb3JpdHkpIHtcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2tPYmplY3QudGl0bGUpKS5wcmlvcml0eTtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgc2VsZWN0LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKVsndGFza3MnXVt0YXNrT2JqZWN0LnRpdGxlXS5kdWVEYXRlKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSlbJ3Rhc2tzJ11bdGFza09iamVjdC50aXRsZV0uZHVlRGF0ZTtcclxuICAgICAgICBsZXQgZmluYWwgPSBkYXRlLnN1YnN0cmluZygwLCAxMCk7XHJcbiAgICAgICAgREFURUlOUFVULnZhbHVlID0gZmluYWw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IFdJREdFVC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkbycpWzBdO1xyXG4gICAgaWYgKHRhc2tPYmplY3QuY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24gKHRhc2ssIHRhc2tPYmplY3QpIHtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5pZCA9ICd3aWRnZXQtYnV0dG9uJztcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkbycpO1xyXG4gICAgXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29tcGxldGVVbmNvbXBsZXRlVGFzayh0YXNrT2JqZWN0KTtcclxuICAgICAgICBpZiAodGFza09iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0LWhlYWRlcicpLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIHAuc3R5bGUudGV4dERlY29yYXRpb25MaW5lID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldC1oZWFkZXInKS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBwLnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hhc2V2bCcpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xyXG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwYW5kVGV4dEFyZWEodGV4dGFyZWEpICB7XHJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0QXJlYVRvUGFyYWcodGV4dGFyZWEsIHRhc2tPYmplY3QpIHtcclxuICAgIGNvbnN0IERFU0NSSVBUSU9OQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlkID0gJ3BhcmFncmFwaCc7XHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dGFyZWEudmFsdWU7XHJcbiAgICB0ZXh0YXJlYS5yZW1vdmUoKTtcclxuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKHApO1xyXG4gICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIHRleHRBcmVhLmlubmVyVGV4dCA9IHAudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgcC5yZW1vdmUoKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbih0YXNrT2JqZWN0KTtcclxuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHAudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgREVTQ1JJUFRJT05DT05UQUlORVIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pOyAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbih0YXNrT2JqZWN0KSB7XHJcbiAgICBjb25zdCBERVNDUklQVElPTklOUFVUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIERFU0NSSVBUSU9OSU5QVVQuaWQgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgREVTQ1JJUFRJT05JTlBVVC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGxldCB2YWx1ZSA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb247XHJcbiAgICBERVNDUklQVElPTklOUFVULnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgREVTQ1JJUFRJT05JTlBVVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBleHBhbmRUZXh0QXJlYShERVNDUklQVElPTklOUFVUKTtcclxuICAgIH0pXHJcblxyXG4gICAgREVTQ1JJUFRJT05JTlBVVC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKHRhc2tPYmplY3QsIERFU0NSSVBUSU9OSU5QVVQudmFsdWUpO1xyXG4gICAgICAgICAgICBERVNDUklQVElPTklOUFVULmJsdXIoKTtcclxuICAgICAgICAgICAgREVTQ1JJUFRJT05JTlBVVC5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICB0ZXh0QXJlYVRvUGFyYWcoREVTQ1JJUFRJT05JTlBVVCwgdGFza09iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gMTAwO1xyXG5cclxuICAgIERFU0NSSVBUSU9OSU5QVVQub25rZXlkb3duID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbEhlaWdodCA8IERFU0NSSVBUSU9OSU5QVVQuc2Nyb2xsSGVpZ2h0KSB7IFxyXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBERVNDUklQVElPTklOUFVULnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS5zdHlsZS5oZWlnaHQgPSBzY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIERFU0NSSVBUSU9OSU5QVVQ7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHNldEludGlpYWxQcm9qZWN0cyB9IGZyb20gJy4vaXRlbS1jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBsb2FkVG9kYXkgfSBmcm9tICcuL3RvZGF5LmpzJztcclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dvcmsnKSkge1xyXG4gICAgc2V0SW50aWlhbFByb2plY3RzKCk7XHJcbn1cclxubG9hZFRvZGF5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9