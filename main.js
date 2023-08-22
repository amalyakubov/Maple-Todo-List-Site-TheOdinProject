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
    console.log(currentTask);
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
                (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.completeUncompleteTask)(currentProjectTasks);
                button.classList.add('hasevl');
                task.classList.remove('done');
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

    console.log(taskObject);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSSxZQUFZLFlBQVksMEJBQTBCO0FBQ3BMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZ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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0F3RDtBQUNuQztBQUNrQjtBQUN2QztBQUNBO0FBQ0EsSUFBSSxxRUFBa0I7QUFDdEI7QUFDQSxvREFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL2l0ZW0tY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvdGltZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOml0YWwsb3Bzeix3Z2h0QDAsOS4uNDAsNDAwOzAsOS4uNDAsNTAwOzAsOS4uNDAsNzAwOzEsOS4uNDAsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblAge1xyXG4gICAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNuYXZpZ2F0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4jbmV3LXByb2plY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0MHB4O1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4jcHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn0gICBcclxuXHJcbiNwcm9qZWN0cyBkaXYge1xyXG4gICAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcclxufVxyXG5cclxuI21haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0YXNrSW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC40KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xyXG59XHJcblxyXG4jdGFza0lucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSwgMC45KTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNoZWFkZXIgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNoZWFkZXJkYXRlIHtcclxuICAgIGFsaWduLXNlbGY6IGxhc3QgY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuI3Rhc2tjb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcblxyXG59XHJcblxyXG4jdGFza2NvbnRhaW5lciBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuI3Rhc2tjb250YWluZXIgZGl2LmRvbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjEpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJlbSk7XHJcbn1cclxuXHJcbiN0YXNrY29udGFpbmVyIGRpdiBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24uZG8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiN3aWRnZXQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHZoO1xyXG4gICAgbGVmdDogMzB2dztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jd2lkZ2V0ID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiN3aWRnZXQgI3dpZGdldC1uYXYge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuI3dpZGdldC1uYXYgcCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4jd2lkZ2V0IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4jd2lkZ2V0ICN3aWRnZXQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI3dpZGdldCBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGhlaWdodDogM2NoO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlcjogMC41IHNvbGlkIGdyZXk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYS5leHBhbmRlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24tY29udGFpbmVyIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYWxsOiB1bnNldDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiNjcmVhdGUtcHJvamVjdCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIseURBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOml0YWwsb3Bzeix3Z2h0QDAsOS4uNDAsNDAwOzAsOS4uNDAsNTAwOzAsOS4uNDAsNzAwOzEsOS4uNDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5QIHtcXHJcXG4gICAgbWFyZ2luOiAwXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2aWdhdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTQwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59ICAgXFxyXFxuXFxyXFxuI3Byb2plY3RzIGRpdiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2JhY2tncm91bmQuanBnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0lucHV0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ1LCAyNDUsIDAuNCk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0lucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXJkYXRlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogbGFzdCBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jdGFza2NvbnRhaW5lciBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrY29udGFpbmVyIGRpdi5kb25lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjEpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tjb250YWluZXIgZGl2IHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZG8ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA5MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIwdmg7XFxyXFxuICAgIGxlZnQ6IDMwdnc7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jd2lkZ2V0ID4gZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3dpZGdldCAjd2lkZ2V0LW5hdiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3dpZGdldC1uYXYgcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3dpZGdldCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgI3dpZGdldC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3dpZGdldCBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBoZWlnaHQ6IDNjaDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBib3JkZXI6IDAuNSBzb2xpZCBncmV5O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLmV4cGFuZGVkIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbi1jb250YWluZXIgcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QgaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFza0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY3VycmVudFByb2plY3QsIG5vdGVzKSB7XHJcbiAgICBjb25zdCBUQVNLID0ge1xyXG4gICAgICAgIHRpdGxlOnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbXBsZXRlOmZhbHNlLFxyXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0OiBjdXJyZW50UHJvamVjdCxcclxuICAgICAgICBub3Rlczogbm90ZXMsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFt0aXRsZV06IFRBU0tcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZVVuY29tcGxldGVUYXNrKHRhc2spIHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsZXQgY3VycmVudFRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XHJcbiAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrWyd0YXNrcyddW3Rhc2sudGl0bGVdLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGFzay5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50VGFza1sndGFza3MnXVt0YXNrLnRpdGxlXS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgdGFzay5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2spKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFzaykge1xyXG4gICAgYXNzaWduVGFza1RvUHJvamVjdCh0YXNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblRhc2tUb1Byb2plY3QodGFzaykge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgIGxldCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpO1xyXG4gICAgcHJvamVjdC50YXNrcyA9IHRhc2s7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24odGFzaywgZGVzY3JpcHRpb24pIHtcclxuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHVwZGF0ZVRhc2sodGFzayk7XHJcbn0gXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJpb3JpdHkgKHRhc2ssIHByaW9yaXR5KSB7XHJcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB1cGRhdGVUYXNrKHRhc2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0ZSh0YXNrLCBkYXRlKSB7XHJcbiAgICB0YXNrLmR1ZURhdGUgPSBkYXRlO1xyXG4gICAgdXBkYXRlVGFzayh0YXNrKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza3MgPSB7XHJcblxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHByb2plY3RuYW1lKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudC1wcm9qZWN0JywgcHJvamVjdG5hbWUpO1xyXG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cyhwcm9qZWN0bmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnRpaWFsUHJvamVjdHMoKSB7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgY3JlYXRlTmV3UHJvamVjdCgnVG9kYXknKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZGF5Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZGF5KSk7XHJcbiAgICBsZXQgd29yayA9IG5ldyBjcmVhdGVOZXdQcm9qZWN0KCdXb3JrJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh3b3JrLm5hbWUsIEpTT04uc3RyaW5naWZ5KHdvcmspKTtcclxuICAgIGxldCBwZXJzb25hbCA9IG5ldyBjcmVhdGVOZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGVyc29uYWwubmFtZSwgSlNPTi5zdHJpbmdpZnkocGVyc29uYWwpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTG9jYWxQcm9qZWN0cyhwcm9qZWN0bmFtZSkge1xyXG4gICAgLy8gQ3JlYXRlIGFuZCBzYXZlIHRoZSBvYmplY3QgdG8gdGhlIGxvY2FsU3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdG5hbWUsIEpTT04uc3RyaW5naWZ5KG5ldyBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RuYW1lKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnQtcHJvamVjdCcpKSB7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudC1wcm9qZWN0Jyk7XHJcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnVG9kYXknO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheURhdGUoKSB7XHJcbiAgICBjb25zdCBEQVlOQU1FUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcclxuICAgIGNvbnN0IE1PTlRIUyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF5ID0gREFZTkFNRVNbZGF0ZS5nZXREYXkoKV07XHJcbiAgICBsZXQgZGF5TnVtYmVyID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBsZXQgbW9udGggPSBNT05USFNbZGF0ZS5nZXRNb250aCgpXTtcclxuXHJcbiAgICByZXR1cm4gYCR7ZGF5fSAke2RheU51bWJlcn0gJHttb250aH1gO1xyXG59IiwiaW1wb3J0IHsgZ2V0RGlzcGxheURhdGUgfSBmcm9tIFwiLi90aW1lLmpzXCI7XHJcbmltcG9ydCB7IGNvbXBsZXRlVW5jb21wbGV0ZVRhc2ssIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCwgdGFza0ZhY3RvcnksIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LCB1cGRhdGVMb2NhbFByb2plY3RzLCB1cGRhdGVUYXNrIH0gZnJvbSBcIi4vaXRlbS1jb25zdHJ1Y3Rvci5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2lkZ2V0IH0gZnJvbSBcIi4vd2lkZ2V0LmpzXCI7XHJcblxyXG5sZXQgY3VycmVudFByb2plY3QgPSAnVG9kYXknO1xyXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50UHJvamVjdDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkVG9kYXkoKSB7XHJcbiAgICBjb25zdCBDT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbGV0IGRhdGUgPSBnZXREaXNwbGF5RGF0ZSgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBIRUFERVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBIRUFERVJDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIEhFQURFUi5pbm5lckhUTUwgPSAnVG9kYXksJztcclxuICAgIGNvbnN0IEhFQURFUkRBVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBIRUFERVJEQVRFLmlkID0gJ2hlYWRlcmRhdGUnO1xyXG4gICAgSEVBREVSREFURS5pbm5lckhUTUwgPSBgJHtkYXRlfWA7XHJcbiAgICBIRUFERVJDT05UQUlORVIuYXBwZW5kQ2hpbGQoSEVBREVSKTtcclxuICAgIEhFQURFUkNPTlRBSU5FUi5hcHBlbmRDaGlsZChIRUFERVJEQVRFKTtcclxuICAgIEhFQURFUkNPTlRBSU5FUi5pZCA9ICdoZWFkZXInO1xyXG4gICAgQ09OVEFJTkVSLmFwcGVuZENoaWxkKEhFQURFUkNPTlRBSU5FUik7XHJcblxyXG4gICAgY29uc3QgVEFTS0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVEFTS0NPTlRBSU5FUi5pZCA9ICd0YXNrY29udGFpbmVyJztcclxuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChUQVNLQ09OVEFJTkVSKTtcclxuXHJcbiAgICBsb2FkVGFza0NyZWF0b3IoKTtcclxuICAgIGFkZElucHV0TGlzdGVuZXJzKCk7XHJcbiAgICBBZGRQcm9qZWN0c0V2ZW50TGlzdG5lcigpO1xyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgIGxvYWRQcm9qZWN0cygpO1xyXG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tDcmVhdG9yKCkge1xyXG4gICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dEJveC50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXRCb3guaWQgPSAndGFza0lucHV0JztcclxuICAgIGlucHV0Qm94Lm5hbWUgPSAndGFza0lucHV0JztcclxuICAgIGlucHV0Qm94LnZhbHVlID0gJ0FkZCBhIHRhc2snOyBcclxuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChpbnB1dEJveCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZElucHV0TGlzdGVuZXJzICAoKSB7IFxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpICYmIGlucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IG5ldyB0YXNrRmFjdG9yeShpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcclxuICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrRGlzcGxheSgpIHtcclxuICAgIGNvbnN0IFRBU0tDT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza2NvbnRhaW5lcicpO1xyXG4gICAgd2hpbGUgKFRBU0tDT05UQUlORVIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgVEFTS0NPTlRBSU5FUi5yZW1vdmVDaGlsZChUQVNLQ09OVEFJTkVSLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0KCkpKS50YXNrcztcclxuICAgIGZvciAoY29uc3QgdGFzayBpbiBjdXJyZW50UHJvamVjdFRhc2tzKSB7IFxyXG4gICAgICAgIGFycmF5LnB1c2goY3VycmVudFByb2plY3RUYXNrc1t0YXNrXSk7XHJcbiAgICB9XHJcbiAgICBhcnJheS5zb3J0KChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmRhdGVDcmVhdGVkLmxvY2FsZUNvbXBhcmUoYi5kYXRlQ3JlYXRlZCk7XHJcbiAgICB9ICkpXHJcblxyXG4gICAgZm9yIChjb25zdCB0YXNrT2JqZWN0IGluIGFycmF5KSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuXHJcbiAgICAgICAgdGl0bGVFbGVtZW50LmlkID0gJ3RpdGxlLWVsZW1lbnQnO1xyXG4gICAgICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBhcnJheVt0YXNrT2JqZWN0XS50aXRsZTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RvJyk7XHJcblxyXG4gICAgICAgIC8vIEFkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrIGRpdiB0aGF0IGNhbGxzIGEgd2lkZ2V0IGxvYWQgZnVuY3Rpb25cclxuICAgICAgICBpZiAoIXRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrZXZsJykpIHtcclxuICAgICAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza05hbWUgPSB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCB0YXNrT2JqZWN0ID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGVFbGVtZW50LnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBsb2FkV2lkZ2V0KHRhc2ssIHRhc2tPYmplY3RbJ3Rhc2tzJ11bdGFza05hbWVdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrZXZsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXNldmwnKSkge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZVVuY29tcGxldGVUYXNrKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hhc2V2bCcpO1xyXG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgVEFTS0NPTlRBSU5FUi5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGRzIHRoZSBzdHlsaW5nIHRvIHRoZSBidXR0b24gYW5kIGEgdGFzayB0aXRsZSwgaWYgaXQncyBjb21wbGV0ZWRcclxuICAgICAgICBpZiAoYXJyYXlbdGFza09iamVjdF0uY29tcGxldGUgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb25MaW5lID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRJbnB1dCAoKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lucHV0Jyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICdBZGQgYSB0YXNrJztcclxuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRQcm9qZWN0c0V2ZW50TGlzdG5lcigpIHtcclxuICAgIGNvbnN0IEJVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xyXG4gICAgQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNob3dBZGRQcm9qZWN0V2lkZ2V0KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdFdpZGdldCgpIHtcclxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtaW5wdXQnKSkge1xyXG4gICAgY29uc3QgTkFWSUdBVElPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0aW9uJylcclxuICAgIGNvbnN0IEFERFBST0pFQ1RDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIEFERFBST0pFQ1RDT05UQUlORVIuaWQgPSAnY3JlYXRlLXByb2plY3QnO1xyXG4gICAgY29uc3QgSU5QVVRDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIEFERFBST0pFQ1RDT05UQUlORVIuYXBwZW5kQ2hpbGQoSU5QVVRDT05UQUlORVIpO1xyXG4gICAgY29uc3QgQUREUFJPSkVDVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBJTlBVVENPTlRBSU5FUi5hcHBlbmRDaGlsZChBRERQUk9KRUNUKTtcclxuICAgIEFERFBST0pFQ1QudHlwZSA9ICd0ZXh0JztcclxuICAgIEFERFBST0pFQ1QuaWQgPSAnYWRkLXByb2plY3QtaW5wdXQnO1xyXG4gICAgY29uc3QgSU5QVVRMQUJFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBJTlBVVENPTlRBSU5FUi5hcHBlbmRDaGlsZChJTlBVVExBQkVMKTtcclxuICAgIElOUFVUTEFCRUwuaHRtbEZvciA9ICdhZGQtcHJvamVjdC1pbnB1dCc7XHJcbiAgICBcclxuICAgIE5BVklHQVRJT04uYXBwZW5kQ2hpbGQoQUREUFJPSkVDVENPTlRBSU5FUik7XHJcbiAgICBBRERQUk9KRUNUQ09OVEFJTkVSLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KEFERFBST0pFQ1QudmFsdWUpO1xyXG4gICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KEFERFBST0pFQ1QudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbW92ZVByb2plY3RJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdElucHV0ICgpIHtcclxuICAgIGNvbnN0IEFERFBST0pFQ1RDT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKTtcclxuICAgIEFERFBST0pFQ1RDT05UQUlORVIucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUpIHtcclxuICAgIGNvbnN0IFBST0pFQ1RTQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XHJcbiAgICBjb25zdCBQUk9KRUNURElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgUFJPSkVDVERJVi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgUFJPSkVDVFNDT05UQUlORVIuYXBwZW5kQ2hpbGQoUFJPSkVDVERJVik7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWlucHV0JykpIHtcclxuICAgICAgICByZW1vdmVQcm9qZWN0SW5wdXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xyXG4gICAgY29uc3QgUFJPSkVDVExJU1QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBQUk9KRUNUTElTVCkge1xyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoUFJPSkVDVExJU1RbcHJvamVjdF0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY29tcGxldGVVbmNvbXBsZXRlVGFzaywgc2V0RGVzY3JpcHRpb24sIHNldFByaW9yaXR5LCBzZXREYXRlLCBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL2l0ZW0tY29uc3RydWN0b3JcIjtcclxuaW1wb3J0IHsgdXBkYXRlVGFza0Rpc3BsYXkgfSBmcm9tIFwiLi90b2RheVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXaWRnZXQodGFzaywgdGFza09iamVjdCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRhc2tPYmplY3QpO1xyXG5cclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0JykpIHtcclxuICAgICAgICBjb25zdCBXSURHRVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFdJREdFVC5pZCA9ICd3aWRnZXQnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChXSURHRVQpO1xyXG5cclxuICAgIGNvbnN0IE5BViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgTkFWLmlkID0gJ3dpZGdldC1uYXYnO1xyXG4gICAgY29uc3QgUFJPSkVDVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBQUk9KRUNULnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3Q7XHJcbiAgICBOQVYuYXBwZW5kQ2hpbGQoUFJPSkVDVCk7XHJcblxyXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZXhpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFeGl0JztcclxuXHJcbiAgICBleGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNldFByaW9yaXR5KHRhc2tPYmplY3QsIFNFTEVDVC52YWx1ZSk7XHJcbiAgICAgICAgc2V0RGF0ZSh0YXNrT2JqZWN0LCBuZXcgRGF0ZShEQVRFSU5QVVQudmFsdWUpKTtcclxuICAgICAgICBXSURHRVQucmVtb3ZlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgTkFWLmFwcGVuZENoaWxkKGV4aXRCdXR0b24pO1xyXG5cclxuICAgIFdJREdFVC5hcHBlbmRDaGlsZChOQVYpO1xyXG5cclxuICAgIGNvbnN0IEhFQURFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgSEVBREVSLmlkID0gJ3dpZGdldC1oZWFkZXInO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgY29uc29sZS5sb2codGFza09iamVjdCk7XHJcblxyXG4gICAgaWYgKHRhc2tPYmplY3QuY29tcGxldGUgPT09IHRydWUgKSB7XHJcbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgIH1cclxuXHJcbiAgICBIRUFERVIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbih0YXNrLCB0YXNrT2JqZWN0KSk7XHJcbiAgICBIRUFERVIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgV0lER0VULmFwcGVuZENoaWxkKEhFQURFUik7XHJcblxyXG4gICAgY29uc3QgREVTQ1JJUFRJT05DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmlkID0gJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBERVNDUklQVElPTkxBQkVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIERFU0NSSVBUSU9OTEFCRUwuZm9yID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIERFU0NSSVBUSU9OTEFCRUwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcclxuXHJcbiAgICBjb25zdCBHUk9XV1JBUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgR1JPV1dSQVAuaWQgPSAnZ3Jvdy13cmFwJztcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tPYmplY3QpO1xyXG4gICAgR1JPV1dSQVAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKERFU0NSSVBUSU9OTEFCRUwpO1xyXG4gICAgREVTQ1JJUFRJT05DT05UQUlORVIuYXBwZW5kQ2hpbGQoR1JPV1dSQVApO1xyXG5cclxuICAgIFdJREdFVC5hcHBlbmRDaGlsZChERVNDUklQVElPTkNPTlRBSU5FUik7XHJcblxyXG4gICAgY29uc3QgTElTVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IERBVEVDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IERBVEVMQUJFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBEQVRFTEFCRUwuZm9yID0gJ2RhdGUnO1xyXG4gICAgREFURUxBQkVMLnRleHRDb250ZW50ID0gJ0RhdGU6JztcclxuXHJcbiAgICBjb25zdCBEQVRFSU5QVVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgREFURUlOUFVULnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBEQVRFSU5QVVQuaWQgPSAnZGF0ZSc7XHJcbiAgICBEQVRFSU5QVVQubmFtZSA9ICdkdWUnO1xyXG4gICAgREFURUlOUFVULm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gICAgREFURUNPTlRBSU5FUi5hcHBlbmRDaGlsZChEQVRFTEFCRUwpO1xyXG4gICAgREFURUNPTlRBSU5FUi5hcHBlbmRDaGlsZChEQVRFSU5QVVQpO1xyXG4gICAgV0lER0VULmFwcGVuZENoaWxkKERBVEVDT05UQUlORVIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBQUklPUklUWUNPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgTEFCRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgTEFCRUwuZm9yID0gJ3ByaW9ydGl5JztcclxuICAgIExBQkVMLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICAgIGNvbnN0IFNFTEVDVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgU0VMRUNULm5hbWUgPSAncHJpb3JpdGllcyc7XHJcbiAgICBTRUxFQ1QuaWQgPSAncHJpb3JpdHknO1xyXG5cclxuICAgIFBSSU9SSVRZQ09OVEFJTkVSLmFwcGVuZENoaWxkKExBQkVMKTtcclxuICAgIFBSSU9SSVRZQ09OVEFJTkVSLmFwcGVuZENoaWxkKFNFTEVDVCk7XHJcbiAgICBMSVNULmFwcGVuZENoaWxkKFBSSU9SSVRZQ09OVEFJTkVSKTtcclxuICAgIFdJREdFVC5hcHBlbmRDaGlsZChMSVNUKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBvcHRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbk9uZS52YWx1ZSA9IDE7XHJcbiAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnT25lJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25PbmUpO1xyXG4gICAgXHJcbiAgICBsZXQgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb25Ud28udmFsdWUgPSAyO1xyXG4gICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ1R3byc7XHJcbiAgICBTRUxFQ1QuYXBwZW5kQ2hpbGQob3B0aW9uVHdvKTtcclxuXHJcbiAgICBsZXQgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvblRocmVlLnZhbHVlID0gMztcclxuICAgIG9wdGlvblRocmVlLnRleHRDb250ZW50ID0gJ1RocmVlJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25UaHJlZSk7XHJcblxyXG4gICAgbGV0IG9wdGlvbkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbkZvdXIudmFsdWUgPSA0O1xyXG4gICAgb3B0aW9uRm91ci50ZXh0Q29udGVudCA9ICdGb3VyJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25Gb3VyKTtcclxuXHJcbiAgICBTRUxFQ1QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkgeyBcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgc2V0UHJpb3JpdHkodGFza09iamVjdCwgU0VMRUNULnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIERBVEVJTlBVVC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNldERhdGUodGFza09iamVjdCwgbmV3IERhdGUoREFURUlOUFVULnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpWyd0YXNrcyddW3Rhc2tPYmplY3QudGl0bGVdLnByaW9yaXR5KSB7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrT2JqZWN0LnRpdGxlKSkucHJpb3JpdHk7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgIHNlbGVjdC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSlbJ3Rhc2tzJ11bdGFza09iamVjdC50aXRsZV0uZHVlRGF0ZSkge1xyXG4gICAgICAgIGxldCBkYXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpWyd0YXNrcyddW3Rhc2tPYmplY3QudGl0bGVdLmR1ZURhdGU7XHJcbiAgICAgICAgbGV0IGZpbmFsID0gZGF0ZS5zdWJzdHJpbmcoMCwgMTApO1xyXG4gICAgICAgIERBVEVJTlBVVC52YWx1ZSA9IGZpbmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBidXR0b24gPSBXSURHRVQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG8nKVswXTtcclxuICAgIGlmICh0YXNrT2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQnV0dG9uICh0YXNrLCB0YXNrT2JqZWN0KSB7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZG8nKTtcclxuICAgIFxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbXBsZXRlVW5jb21wbGV0ZVRhc2sodGFza09iamVjdCk7XHJcbiAgICAgICAgaWYgKHRhc2tPYmplY3QuY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldC1oZWFkZXInKS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBwLnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQtaGVhZGVyJykubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgcC5zdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoYXNldmwnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcclxuICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4cGFuZFRleHRBcmVhKHRleHRhcmVhKSAge1xyXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGV4dEFyZWFUb1BhcmFnKHRleHRhcmVhLCB0YXNrT2JqZWN0KSB7XHJcbiAgICBjb25zdCBERVNDUklQVElPTkNPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pZCA9ICdwYXJhZ3JhcGgnO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHRhcmVhLnZhbHVlO1xyXG4gICAgdGV4dGFyZWEucmVtb3ZlKCk7XHJcbiAgICBERVNDUklQVElPTkNPTlRBSU5FUi5hcHBlbmRDaGlsZChwKTtcclxuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICB0ZXh0QXJlYS5pbm5lclRleHQgPSBwLnRleHRDb250ZW50O1xyXG4gICAgICAgIHAucmVtb3ZlKCk7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24odGFza09iamVjdCk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBwLnRleHRDb250ZW50O1xyXG4gICAgICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTsgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24odGFza09iamVjdCkge1xyXG4gICAgY29uc3QgREVTQ1JJUFRJT05JTlBVVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBERVNDUklQVElPTklOUFVULmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIERFU0NSSVBUSU9OSU5QVVQubmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBsZXQgdmFsdWUgPSB0YXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgREVTQ1JJUFRJT05JTlBVVC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIERFU0NSSVBUSU9OSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwYW5kVGV4dEFyZWEoREVTQ1JJUFRJT05JTlBVVCk7XHJcbiAgICB9KVxyXG5cclxuICAgIERFU0NSSVBUSU9OSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbih0YXNrT2JqZWN0LCBERVNDUklQVElPTklOUFVULnZhbHVlKTtcclxuICAgICAgICAgICAgREVTQ1JJUFRJT05JTlBVVC5ibHVyKCk7XHJcbiAgICAgICAgICAgIERFU0NSSVBUSU9OSU5QVVQuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgdGV4dEFyZWFUb1BhcmFnKERFU0NSSVBUSU9OSU5QVVQsIHRhc2tPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbGV0IHNjcm9sbEhlaWdodCA9IDEwMDtcclxuXHJcbiAgICBERVNDUklQVElPTklOUFVULm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxIZWlnaHQgPCBERVNDUklQVElPTklOUFVULnNjcm9sbEhlaWdodCkgeyBcclxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gREVTQ1JJUFRJT05JTlBVVC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikuc3R5bGUuaGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBERVNDUklQVElPTklOUFVUO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBzZXRJbnRpaWFsUHJvamVjdHMgfSBmcm9tICcuL2l0ZW0tY29uc3RydWN0b3InO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgbG9hZFRvZGF5IH0gZnJvbSAnLi90b2RheS5qcyc7XHJcblxyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXb3JrJykpIHtcclxuICAgIHNldEludGlpYWxQcm9qZWN0cygpO1xyXG59XHJcbmxvYWRUb2RheSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==