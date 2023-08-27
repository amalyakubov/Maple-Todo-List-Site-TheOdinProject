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

#del-button {
    display: flex;
    position: relative;
    bottom: -58%;
    min-width: 100px;
    min-height: 25px;
    font-size: 24px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,500&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: row;\n    background-color: white;\n}\n\nP {\n    margin: 0\n}\n\n:root {\n    font-family: 'DM Sans', sans-serif;\n    color: black;\n}\n\n#navigation {\n    background-color: rgb(255, 255, 255);\n    font-size: 24px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    padding-right: 120px;\n    gap: 10px;\n}\n\n#new-project {\n    background-color: white;\n    border: 1px solid black;\n    font-size: 24px;\n    border-radius: 140px;\n    min-height: 20px;\n    width: 50px;\n    margin-left: -10px;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}   \n\n#projects div {\n    color: rgb(46, 46, 46);\n}\n\n#main {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    width: 100%;\n    padding-left: 20px;\n    font-weight: 600;\n\n    background-image: url(../img/background.jpg);\n    background-size: cover;\n    background-position: center;\n}\n\n#taskInput {\n    font-size: 24px;\n    text-align: left;\n    padding-left: 20px;\n    border-radius: 10px;\n    height: 50px;\n    width: 50%;\n    margin-left: 20%;\n    border: none;\n    background-color: rgba(255, 245, 245, 0.4);\n    backdrop-filter: blur(2em);\n}\n\n#taskInput:focus {\n    outline: none;\n    background-color: rgb(235, 235, 235, 0.9);\n}\n\n#header {\n    width: max-content;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-size: 34px;\n    padding: 20px;\n}\n\n#header p {\n    margin: 0;\n}\n\n#headerdate {\n    align-self: last center;\n    font-weight: 600;\n    font-size: 24px;\n}\n\n#taskcontainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 20px;\n    height: 700px;\n\n}\n\n#taskcontainer div {\n    display: flex;\n    align-items: center;\n    height: 50px;\n    background-color: white;\n    border-radius: 4px;\n}\n\n#taskcontainer div.done {\n    background-color: rgba(255, 245, 245, 0.1);\n    backdrop-filter: blur(2em);\n}\n\n#taskcontainer div p {\n    margin: 0;\n    margin-left: 20px;\n}\n\nbutton.do {\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    margin-left: 20px;\n    background-color: white;\n    border: 1px solid black;\n}\n\n#widget {\n    font-size: 20px;\n    background-color: #f1f1f1;\n    border-radius: 15px;\n    width: 900px;\n    height: 700px;\n    position: absolute;\n    top: 20vh;\n    left: 30vw;\n    overflow: auto;\n}\n\n#widget > div {\n    padding: 10px;\n}\n\n#widget #widget-nav {\n    justify-content: space-between;\n    padding: 15px;\n}\n\n#widget-nav p {\n    font-weight: 500;\n    font-size: 24px;\n}\n\n#widget div {\n    display: flex;\n    gap: 10px;\n}\n\n#widget #widget-header {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    font-size: 30px;\n    font-weight: 500;\n}\n\n#widget button {\n    margin-left: 10px;\n}\n\ntextarea {\n    height: 3ch;\n    font-size: 18px;\n    font-weight: 500;\n    border: 0.5 solid grey;\n    box-shadow: none;\n    resize: none;\n    overflow: none;\n    outline: none;\n    overflow-y: hidden;\n    font-family: 'DM Sans', sans-serif;\n    box-sizing: border-box;\n    padding: 10px;\n}\n\ntextarea.expanded {\n    height: 100px;\n    width: 600px;\n    border-radius: 5px;\n}\n\n#description-container p {\n    font-weight: 500;\n}\n\ninput {\n    all: unset;\n    font-size: inherit;\n    box-sizing: border-box;\n}\n\n#create-project input {\n    height: 40px;\n    border: 2px solid black;\n    padding: 8px;\n}\n\n#del-button {\n    display: flex;\n    position: relative;\n    bottom: -58%;\n    min-width: 100px;\n    min-height: 25px;\n    font-size: 24px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   setDate: () => (/* binding */ setDate),
/* harmony export */   setDescription: () => (/* binding */ setDescription),
/* harmony export */   setIntiialProjects: () => (/* binding */ setIntiialProjects),
/* harmony export */   setNewCurrentProject: () => (/* binding */ setNewCurrentProject),
/* harmony export */   setPriority: () => (/* binding */ setPriority),
/* harmony export */   setStartProject: () => (/* binding */ setStartProject),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory),
/* harmony export */   updateCurrentProject: () => (/* binding */ updateCurrentProject),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ "./src/today.js");





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
    let insideTask = task[Object.keys(task)[0]];
    let project = JSON.parse(localStorage.getItem(currentProject));
    project.tasks[insideTask.title] = insideTask;
    localStorage.setItem(currentProject, JSON.stringify(project));
}

function setDescription(task, description) {
    task[Object.keys(task)[0]].description = description;
    updateTask(task);
} 

function setPriority (task, priority) {
    task[Object.keys(task)[0]].priority = priority;
    updateTask(task);
}

function setDate(task, date) {
    task[Object.keys(task)[0]].dueDate = date;
    updateTask(task);
}

function removeTask(task) {
    let currentProjectTasks = JSON.parse(localStorage.getItem(getCurrentProject()))['tasks'];
    let taskTitle = task[Object.keys(task)[0]].title;
    console.log(currentProjectTasks[taskTitle]);
    delete currentProjectTasks[taskTitle];
    let updatedProject = JSON.parse(localStorage.getItem(getCurrentProject()));
    updatedProject['tasks'] = currentProjectTasks;
    localStorage.setItem(getCurrentProject(), JSON.stringify(updatedProject));
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

function setStartProject() {
    localStorage.setItem('current-project', 'Today');
}

function setNewCurrentProject(newProject) {
    localStorage.setItem('current-project', newProject);
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
        return a.dueDate.localeCompare(b.dueDate);
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
                let taskObject = JSON.parse(localStorage.getItem(currentProject))['tasks'];
                let artificialObject = {};
                artificialObject[taskName] = taskObject[taskName];
                 // let taskObject =  JSON.parse(localStorage.getItem(titleElement.textContent));
                (0,_widget_js__WEBPACK_IMPORTED_MODULE_2__.loadWidget)(task, artificialObject);
            })
            task.classList.add('taskevl');
        }

        if (!task.classList.contains('hasevl')) {
            button.addEventListener('click', () => {
                (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.completeUncompleteTask)(array[taskObject]);
                button.classList.add('hasevl');
                task.classList.remove('done');
                let widgetButton = document.getElementById('widget-button');
                if (document.getElementById('widget')) {
                    if (array[taskObject].complete) {
                        widgetButton.style.backgroundColor = 'black';
                        let p = document.getElementById('widget-header').lastElementChild;
                        p.style.textDecorationLine = 'line-through';
                } else {
                        widgetButton.style.backgroundColor = 'white';
                        let p = document.getElementById('widget-header').lastElementChild;
                        p.style.textDecorationLine = 'none';
                    }
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
    PROJECTDIV.addEventListener('click', ()=> {
        (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.setNewCurrentProject)(PROJECTDIV.textContent);
        switchProjects(PROJECTDIV.textContent);
    })
}

function switchProjects(newProject) {
    currentProject = newProject;
    updateTaskDisplay()
}

function loadProjects() {
    let PROJECTLIST = [];
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key !== 'current-project') {
            PROJECTLIST.push(key);
        }
    }
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
    let taskKey = Object.keys(taskObject)[0];

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
    });

    DATEINPUT.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setDate)(taskObject, new Date(DATEINPUT.value));
        }
    });

    const REMOVEBUTTON = document.createElement('button');
    REMOVEBUTTON.id = 'del-button';
    REMOVEBUTTON.textContent  = 'Delete';
    if (!REMOVEBUTTON.classList.contains('hasevl')) {
        REMOVEBUTTON.addEventListener('click', () => {
            (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.removeTask)(taskObject);
            WIDGET.remove();
            (0,_today__WEBPACK_IMPORTED_MODULE_1__.updateTaskDisplay)();
        })
    }
    REMOVEBUTTON.classList.add('hasevl');
    WIDGET.appendChild(REMOVEBUTTON);

    if (JSON.parse(localStorage.getItem(currentProject))['tasks'][taskKey].priority) {
        let priority = JSON.parse(localStorage.getItem(currentProject))['tasks'][taskKey].priority;
        let select = document.querySelector('select');
        select.value = priority;
    }


    if (JSON.parse(localStorage.getItem(currentProject))['tasks'][taskKey].dueDate) {
        let date = JSON.parse(localStorage.getItem(currentProject))['tasks'][taskKey].dueDate;
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
    console.log(taskObject);
    let value = taskObject[Object.keys(taskObject)[0]].description;
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
    (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setStartProject)();
    (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setIntiialProjects)();
}
(0,_today_js__WEBPACK_IMPORTED_MODULE_2__.loadToday)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSSxZQUFZLFlBQVksMEJBQTBCO0FBQ3BMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBeUU7QUFDcEQ7QUFDa0I7O0FBRXZDO0FBQ0EsSUFBSSxrRUFBZTtBQUNuQixJQUFJLHFFQUFrQjtBQUN0QjtBQUNBLG9EQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvaXRlbS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy90aW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3dpZGdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6aXRhbCxvcHN6LHdnaHRAMCw5Li40MCw0MDA7MCw5Li40MCw1MDA7MCw5Li40MCw3MDA7MSw5Li40MCw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblAge1xuICAgIG1hcmdpbjogMFxufVxuXG46cm9vdCB7XG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNuYXZpZ2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuI25ldy1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTQwcHg7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbiNwcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn0gICBcblxuI3Byb2plY3RzIGRpdiB7XG4gICAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcbn1cblxuI21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3Rhc2tJbnB1dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjQpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xufVxuXG4jdGFza0lucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1LCAwLjkpO1xufVxuXG4jaGVhZGVyIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI2hlYWRlciBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbiNoZWFkZXJkYXRlIHtcbiAgICBhbGlnbi1zZWxmOiBsYXN0IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuI3Rhc2tjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgaGVpZ2h0OiA3MDBweDtcblxufVxuXG4jdGFza2NvbnRhaW5lciBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jdGFza2NvbnRhaW5lciBkaXYuZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjEpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xufVxuXG4jdGFza2NvbnRhaW5lciBkaXYgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5idXR0b24uZG8ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiN3aWRnZXQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDkwMHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjB2aDtcbiAgICBsZWZ0OiAzMHZ3O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jd2lkZ2V0ID4gZGl2IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jd2lkZ2V0ICN3aWRnZXQtbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI3dpZGdldC1uYXYgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbiN3aWRnZXQgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuI3dpZGdldCAjd2lkZ2V0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI3dpZGdldCBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAzY2g7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyOiAwLjUgc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdmVyZmxvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGV4dGFyZWEuZXhwYW5kZWQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pbnB1dCB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NyZWF0ZS1wcm9qZWN0IGlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4jZGVsLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtNTglO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIseURBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOml0YWwsb3Bzeix3Z2h0QDAsOS4uNDAsNDAwOzAsOS4uNDAsNTAwOzAsOS4uNDAsNzAwOzEsOS4uNDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5QIHtcXG4gICAgbWFyZ2luOiAwXFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jbmF2aWdhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59ICAgXFxuXFxuI3Byb2plY3RzIGRpdiB7XFxuICAgIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2JhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4jdGFza0lucHV0IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ1LCAyNDUsIDAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xcbn1cXG5cXG4jdGFza0lucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUsIDAuOSk7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNoZWFkZXJkYXRlIHtcXG4gICAgYWxpZ24tc2VsZjogbGFzdCBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3Rhc2tjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcblxcbn1cXG5cXG4jdGFza2NvbnRhaW5lciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiN0YXNrY29udGFpbmVyIGRpdi5kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXG59XFxuXFxuI3Rhc2tjb250YWluZXIgZGl2IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5idXR0b24uZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiN3aWRnZXQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwdmg7XFxuICAgIGxlZnQ6IDMwdnc7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jd2lkZ2V0ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3dpZGdldCAjd2lkZ2V0LW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuI3dpZGdldC1uYXYgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3dpZGdldCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiN3aWRnZXQgI3dpZGdldC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI3dpZGdldCBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDNjaDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IDAuNSBzb2xpZCBncmV5O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbnRleHRhcmVhLmV4cGFuZGVkIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1jb250YWluZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY3JlYXRlLXByb2plY3QgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbiNkZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IC01OCU7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXREYXRlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgY3VycmVudFByb2plY3QgZnJvbSBcIi4vdG9kYXlcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjdXJyZW50UHJvamVjdCwgbm90ZXMpIHtcbiAgICBjb25zdCBUQVNLID0ge1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246ZGVzY3JpcHRpb24sXG4gICAgICAgIGNvbXBsZXRlOmZhbHNlLFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0OiBjdXJyZW50UHJvamVjdCxcbiAgICAgICAgbm90ZXM6IG5vdGVzLFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgW3RpdGxlXTogVEFTS1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZVVuY29tcGxldGVUYXNrKHRhc2spIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGxldCBjdXJyZW50VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKTtcbiAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjdXJyZW50VGFza1sndGFza3MnXVt0YXNrLnRpdGxlXS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFRhc2tbJ3Rhc2tzJ11bdGFzay50aXRsZV0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB0YXNrLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2spIHtcbiAgICBhc3NpZ25UYXNrVG9Qcm9qZWN0KHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGFza1RvUHJvamVjdCh0YXNrKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBsZXQgaW5zaWRlVGFzayA9IHRhc2tbT2JqZWN0LmtleXModGFzaylbMF1dO1xuICAgIGxldCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpO1xuICAgIHByb2plY3QudGFza3NbaW5zaWRlVGFzay50aXRsZV0gPSBpbnNpZGVUYXNrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbikge1xuICAgIHRhc2tbT2JqZWN0LmtleXModGFzaylbMF1dLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdXBkYXRlVGFzayh0YXNrKTtcbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmlvcml0eSAodGFzaywgcHJpb3JpdHkpIHtcbiAgICB0YXNrW09iamVjdC5rZXlzKHRhc2spWzBdXS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHVwZGF0ZVRhc2sodGFzayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlKHRhc2ssIGRhdGUpIHtcbiAgICB0YXNrW09iamVjdC5rZXlzKHRhc2spWzBdXS5kdWVEYXRlID0gZGF0ZTtcbiAgICB1cGRhdGVUYXNrKHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0KCkpKVsndGFza3MnXTtcbiAgICBsZXQgdGFza1RpdGxlID0gdGFza1tPYmplY3Qua2V5cyh0YXNrKVswXV0udGl0bGU7XG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3RUYXNrc1t0YXNrVGl0bGVdKTtcbiAgICBkZWxldGUgY3VycmVudFByb2plY3RUYXNrc1t0YXNrVGl0bGVdO1xuICAgIGxldCB1cGRhdGVkUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0Q3VycmVudFByb2plY3QoKSkpO1xuICAgIHVwZGF0ZWRQcm9qZWN0Wyd0YXNrcyddID0gY3VycmVudFByb2plY3RUYXNrcztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnZXRDdXJyZW50UHJvamVjdCgpLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvamVjdCkpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IHtcblxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdChwcm9qZWN0bmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50LXByb2plY3QnLCBwcm9qZWN0bmFtZSk7XG4gICAgdXBkYXRlTG9jYWxQcm9qZWN0cyhwcm9qZWN0bmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnRpaWFsUHJvamVjdHMoKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IGNyZWF0ZU5ld1Byb2plY3QoJ1RvZGF5Jyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kYXkubmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kYXkpKTtcbiAgICBsZXQgd29yayA9IG5ldyBjcmVhdGVOZXdQcm9qZWN0KCdXb3JrJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0od29yay5uYW1lLCBKU09OLnN0cmluZ2lmeSh3b3JrKSk7XG4gICAgbGV0IHBlcnNvbmFsID0gbmV3IGNyZWF0ZU5ld1Byb2plY3QoJ1BlcnNvbmFsJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGVyc29uYWwubmFtZSwgSlNPTi5zdHJpbmdpZnkocGVyc29uYWwpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxQcm9qZWN0cyhwcm9qZWN0bmFtZSkge1xuICAgIC8vIENyZWF0ZSBhbmQgc2F2ZSB0aGUgb2JqZWN0IHRvIHRoZSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0bmFtZSwgSlNPTi5zdHJpbmdpZnkobmV3IGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdG5hbWUpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGFydFByb2plY3QoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnQtcHJvamVjdCcsICdUb2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV3Q3VycmVudFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50LXByb2plY3QnLCBuZXdQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudC1wcm9qZWN0JykpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnVG9kYXknO1xuICAgIH1cbn1cblxuXG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlEYXRlKCkge1xuICAgIGNvbnN0IERBWU5BTUVTID0gWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddO1xuICAgIGNvbnN0IE1PTlRIUyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkYXkgPSBEQVlOQU1FU1tkYXRlLmdldERheSgpXTtcbiAgICBsZXQgZGF5TnVtYmVyID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gTU9OVEhTW2RhdGUuZ2V0TW9udGgoKV07XG5cbiAgICByZXR1cm4gYCR7ZGF5fSAke2RheU51bWJlcn0gJHttb250aH1gO1xufSIsImltcG9ydCB7IGdldERpc3BsYXlEYXRlIH0gZnJvbSBcIi4vdGltZS5qc1wiO1xuaW1wb3J0IHsgY29tcGxldGVVbmNvbXBsZXRlVGFzaywgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0LCBzZXROZXdDdXJyZW50UHJvamVjdCwgc2V0U3RhcnRQcm9qZWN0LCB0YXNrRmFjdG9yeSwgdXBkYXRlQ3VycmVudFByb2plY3QsIHVwZGF0ZUxvY2FsUHJvamVjdHMsIHVwZGF0ZVRhc2sgfSBmcm9tIFwiLi9pdGVtLWNvbnN0cnVjdG9yLmpzXCI7XG5pbXBvcnQgeyBsb2FkV2lkZ2V0IH0gZnJvbSBcIi4vd2lkZ2V0LmpzXCI7XG5cbmxldCBjdXJyZW50UHJvamVjdCA9ICdUb2RheSc7XG5leHBvcnQgZGVmYXVsdCBjdXJyZW50UHJvamVjdDtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2RheSgpIHtcbiAgICBjb25zdCBDT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIGxldCBkYXRlID0gZ2V0RGlzcGxheURhdGUoKTtcbiAgICBcbiAgICBjb25zdCBIRUFERVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgSEVBREVSQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgSEVBREVSLmlubmVySFRNTCA9ICdUb2RheSwnO1xuICAgIGNvbnN0IEhFQURFUkRBVEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgSEVBREVSREFURS5pZCA9ICdoZWFkZXJkYXRlJztcbiAgICBIRUFERVJEQVRFLmlubmVySFRNTCA9IGAke2RhdGV9YDtcbiAgICBIRUFERVJDT05UQUlORVIuYXBwZW5kQ2hpbGQoSEVBREVSKTtcbiAgICBIRUFERVJDT05UQUlORVIuYXBwZW5kQ2hpbGQoSEVBREVSREFURSk7XG4gICAgSEVBREVSQ09OVEFJTkVSLmlkID0gJ2hlYWRlcic7XG4gICAgQ09OVEFJTkVSLmFwcGVuZENoaWxkKEhFQURFUkNPTlRBSU5FUik7XG5cbiAgICBjb25zdCBUQVNLQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVEFTS0NPTlRBSU5FUi5pZCA9ICd0YXNrY29udGFpbmVyJztcbiAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoVEFTS0NPTlRBSU5FUik7XG5cbiAgICBsb2FkVGFza0NyZWF0b3IoKTtcbiAgICBhZGRJbnB1dExpc3RlbmVycygpO1xuICAgIEFkZFByb2plY3RzRXZlbnRMaXN0bmVyKCk7XG4gICAgZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFza0NyZWF0b3IoKSB7XG4gICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Qm94LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRCb3guaWQgPSAndGFza0lucHV0JztcbiAgICBpbnB1dEJveC5uYW1lID0gJ3Rhc2tJbnB1dCc7XG4gICAgaW5wdXRCb3gudmFsdWUgPSAnQWRkIGEgdGFzayc7IFxuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChpbnB1dEJveCk7XG59XG5cbmZ1bmN0aW9uIGFkZElucHV0TGlzdGVuZXJzICAoKSB7IFxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpICYmIGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBuZXcgdGFza0ZhY3RvcnkoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdXBkYXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgICAgICByZXNldElucHV0KCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgIHJlc2V0SW5wdXQoKTtcbiAgICB9KVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgY29uc3QgVEFTS0NPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrY29udGFpbmVyJyk7XG4gICAgd2hpbGUgKFRBU0tDT05UQUlORVIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIFRBU0tDT05UQUlORVIucmVtb3ZlQ2hpbGQoVEFTS0NPTlRBSU5FUi5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudFByb2plY3RUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0Q3VycmVudFByb2plY3QoKSkpLnRhc2tzO1xuICAgIGZvciAoY29uc3QgdGFzayBpbiBjdXJyZW50UHJvamVjdFRhc2tzKSB7IFxuICAgICAgICBhcnJheS5wdXNoKGN1cnJlbnRQcm9qZWN0VGFza3NbdGFza10pO1xuICAgIH1cbiAgICBhcnJheS5zb3J0KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5kdWVEYXRlLmxvY2FsZUNvbXBhcmUoYi5kdWVEYXRlKTtcbiAgICB9ICkpXG5cbiAgICBmb3IgKGNvbnN0IHRhc2tPYmplY3QgaW4gYXJyYXkpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXG4gICAgICAgIHRpdGxlRWxlbWVudC5pZCA9ICd0aXRsZS1lbGVtZW50JztcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IGFycmF5W3Rhc2tPYmplY3RdLnRpdGxlO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkbycpO1xuXG4gICAgICAgIC8vIEFkZHMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrIGRpdiB0aGF0IGNhbGxzIGEgd2lkZ2V0IGxvYWQgZnVuY3Rpb25cbiAgICAgICAgaWYgKCF0YXNrLmNsYXNzTGlzdC5jb250YWlucygndGFza2V2bCcpKSB7XG4gICAgICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gdGl0bGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGxldCB0YXNrT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpWyd0YXNrcyddO1xuICAgICAgICAgICAgICAgIGxldCBhcnRpZmljaWFsT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgYXJ0aWZpY2lhbE9iamVjdFt0YXNrTmFtZV0gPSB0YXNrT2JqZWN0W3Rhc2tOYW1lXTtcbiAgICAgICAgICAgICAgICAgLy8gbGV0IHRhc2tPYmplY3QgPSAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICBsb2FkV2lkZ2V0KHRhc2ssIGFydGlmaWNpYWxPYmplY3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFza2V2bCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXNrLmNsYXNzTGlzdC5jb250YWlucygnaGFzZXZsJykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZVVuY29tcGxldGVUYXNrKGFycmF5W3Rhc2tPYmplY3RdKTtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaGFzZXZsJyk7XG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbdGFza09iamVjdF0uY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0LWhlYWRlcicpLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldC1oZWFkZXInKS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5zdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICBUQVNLQ09OVEFJTkVSLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkcyB0aGUgc3R5bGluZyB0byB0aGUgYnV0dG9uIGFuZCBhIHRhc2sgdGl0bGUsIGlmIGl0J3MgY29tcGxldGVkXG4gICAgICAgIGlmIChhcnJheVt0YXNrT2JqZWN0XS5jb21wbGV0ZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSAgIFxufVxuXG5mdW5jdGlvbiByZXNldElucHV0ICgpIHtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lucHV0Jyk7XG4gICAgaW5wdXQudmFsdWUgPSAnQWRkIGEgdGFzayc7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG59XG5cbmZ1bmN0aW9uIEFkZFByb2plY3RzRXZlbnRMaXN0bmVyKCkge1xuICAgIGNvbnN0IEJVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpO1xuICAgIEJVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0FkZFByb2plY3RXaWRnZXQoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdFdpZGdldCgpIHtcbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWlucHV0JykpIHtcbiAgICBjb25zdCBOQVZJR0FUSU9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRpb24nKVxuICAgIGNvbnN0IEFERFBST0pFQ1RDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBBRERQUk9KRUNUQ09OVEFJTkVSLmlkID0gJ2NyZWF0ZS1wcm9qZWN0JztcbiAgICBjb25zdCBJTlBVVENPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEFERFBST0pFQ1RDT05UQUlORVIuYXBwZW5kQ2hpbGQoSU5QVVRDT05UQUlORVIpO1xuICAgIGNvbnN0IEFERFBST0pFQ1QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIElOUFVUQ09OVEFJTkVSLmFwcGVuZENoaWxkKEFERFBST0pFQ1QpO1xuICAgIEFERFBST0pFQ1QudHlwZSA9ICd0ZXh0JztcbiAgICBBRERQUk9KRUNULmlkID0gJ2FkZC1wcm9qZWN0LWlucHV0JztcbiAgICBjb25zdCBJTlBVVExBQkVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBJTlBVVENPTlRBSU5FUi5hcHBlbmRDaGlsZChJTlBVVExBQkVMKTtcbiAgICBJTlBVVExBQkVMLmh0bWxGb3IgPSAnYWRkLXByb2plY3QtaW5wdXQnO1xuICAgIFxuICAgIE5BVklHQVRJT04uYXBwZW5kQ2hpbGQoQUREUFJPSkVDVENPTlRBSU5FUik7XG4gICAgQUREUFJPSkVDVENPTlRBSU5FUi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KEFERFBST0pFQ1QudmFsdWUpO1xuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChBRERQUk9KRUNULnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdElucHV0KCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RJbnB1dCAoKSB7XG4gICAgY29uc3QgQUREUFJPSkVDVENPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgIEFERFBST0pFQ1RDT05UQUlORVIucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUpIHtcbiAgICBjb25zdCBQUk9KRUNUU0NPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgIGNvbnN0IFBST0pFQ1RESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgUFJPSkVDVERJVi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIFBST0pFQ1RTQ09OVEFJTkVSLmFwcGVuZENoaWxkKFBST0pFQ1RESVYpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtaW5wdXQnKSkge1xuICAgICAgICByZW1vdmVQcm9qZWN0SW5wdXQoKTtcbiAgICB9XG4gICAgUFJPSkVDVERJVi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBzZXROZXdDdXJyZW50UHJvamVjdChQUk9KRUNURElWLnRleHRDb250ZW50KTtcbiAgICAgICAgc3dpdGNoUHJvamVjdHMoUFJPSkVDVERJVi50ZXh0Q29udGVudCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdHMobmV3UHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpXG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBsZXQgUFJPSkVDVExJU1QgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gJ2N1cnJlbnQtcHJvamVjdCcpIHtcbiAgICAgICAgICAgIFBST0pFQ1RMSVNULnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gUFJPSkVDVExJU1QpIHtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdChQUk9KRUNUTElTVFtwcm9qZWN0XSk7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbXBsZXRlVW5jb21wbGV0ZVRhc2ssIHNldERlc2NyaXB0aW9uLCBzZXRQcmlvcml0eSwgc2V0RGF0ZSwgZ2V0Q3VycmVudFByb2plY3QsIHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9pdGVtLWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL3RvZGF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkV2lkZ2V0KHRhc2ssIHRhc2tPYmplY3QpIHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgbGV0IHRhc2tLZXkgPSBPYmplY3Qua2V5cyh0YXNrT2JqZWN0KVswXTtcblxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldCcpKSB7XG4gICAgICAgIGNvbnN0IFdJREdFVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFdJREdFVC5pZCA9ICd3aWRnZXQnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoV0lER0VUKTtcblxuICAgIGNvbnN0IE5BViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIE5BVi5pZCA9ICd3aWRnZXQtbmF2JztcbiAgICBjb25zdCBQUk9KRUNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgUFJPSkVDVC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0O1xuICAgIE5BVi5hcHBlbmRDaGlsZChQUk9KRUNUKTtcblxuICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xuXG4gICAgZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2V0UHJpb3JpdHkodGFza09iamVjdCwgU0VMRUNULnZhbHVlKTtcbiAgICAgICAgc2V0RGF0ZSh0YXNrT2JqZWN0LCBuZXcgRGF0ZShEQVRFSU5QVVQudmFsdWUpKTtcbiAgICAgICAgV0lER0VULnJlbW92ZSgpO1xuICAgICAgICBcbiAgICB9KVxuICAgIE5BVi5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcblxuICAgIFdJREdFVC5hcHBlbmRDaGlsZChOQVYpO1xuXG4gICAgY29uc3QgSEVBREVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgSEVBREVSLmlkID0gJ3dpZGdldC1oZWFkZXInO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQ7XG5cbiAgICBpZiAodGFza09iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB9XG5cbiAgICBIRUFERVIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbih0YXNrLCB0YXNrT2JqZWN0KSk7XG4gICAgSEVBREVSLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoSEVBREVSKTtcblxuICAgIGNvbnN0IERFU0NSSVBUSU9OQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgREVTQ1JJUFRJT05DT05UQUlORVIuaWQgPSAnZGVzY3JpcHRpb24tY29udGFpbmVyJztcbiAgICBjb25zdCBERVNDUklQVElPTkxBQkVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBERVNDUklQVElPTkxBQkVMLmZvciA9ICdkZXNjcmlwdGlvbic7XG4gICAgREVTQ1JJUFRJT05MQUJFTC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuXG4gICAgY29uc3QgR1JPV1dSQVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBHUk9XV1JBUC5pZCA9ICdncm93LXdyYXAnO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tPYmplY3QpO1xuICAgIEdST1dXUkFQLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKERFU0NSSVBUSU9OTEFCRUwpO1xuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKEdST1dXUkFQKTtcblxuICAgIFdJREdFVC5hcHBlbmRDaGlsZChERVNDUklQVElPTkNPTlRBSU5FUik7XG5cbiAgICBjb25zdCBMSVNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBEQVRFQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgREFURUxBQkVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBEQVRFTEFCRUwuZm9yID0gJ2RhdGUnO1xuICAgIERBVEVMQUJFTC50ZXh0Q29udGVudCA9ICdEYXRlOic7XG5cbiAgICBjb25zdCBEQVRFSU5QVVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIERBVEVJTlBVVC50eXBlID0gJ2RhdGUnO1xuICAgIERBVEVJTlBVVC5pZCA9ICdkYXRlJztcbiAgICBEQVRFSU5QVVQubmFtZSA9ICdkdWUnO1xuICAgIERBVEVJTlBVVC5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gICAgREFURUNPTlRBSU5FUi5hcHBlbmRDaGlsZChEQVRFTEFCRUwpO1xuICAgIERBVEVDT05UQUlORVIuYXBwZW5kQ2hpbGQoREFURUlOUFVUKTtcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoREFURUNPTlRBSU5FUik7XG5cblxuICAgIGNvbnN0IFBSSU9SSVRZQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgTEFCRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIExBQkVMLmZvciA9ICdwcmlvcnRpeSc7XG4gICAgTEFCRUwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIGNvbnN0IFNFTEVDVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIFNFTEVDVC5uYW1lID0gJ3ByaW9yaXRpZXMnO1xuICAgIFNFTEVDVC5pZCA9ICdwcmlvcml0eSc7XG5cbiAgICBQUklPUklUWUNPTlRBSU5FUi5hcHBlbmRDaGlsZChMQUJFTCk7XG4gICAgUFJJT1JJVFlDT05UQUlORVIuYXBwZW5kQ2hpbGQoU0VMRUNUKTtcbiAgICBMSVNULmFwcGVuZENoaWxkKFBSSU9SSVRZQ09OVEFJTkVSKTtcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoTElTVCk7XG5cbiAgICBcbiAgICBsZXQgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uT25lLnZhbHVlID0gMTtcbiAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnT25lJztcbiAgICBTRUxFQ1QuYXBwZW5kQ2hpbGQob3B0aW9uT25lKTtcbiAgICBcbiAgICBsZXQgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVHdvLnZhbHVlID0gMjtcbiAgICBvcHRpb25Ud28udGV4dENvbnRlbnQgPSAnVHdvJztcbiAgICBTRUxFQ1QuYXBwZW5kQ2hpbGQob3B0aW9uVHdvKTtcblxuICAgIGxldCBvcHRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblRocmVlLnZhbHVlID0gMztcbiAgICBvcHRpb25UaHJlZS50ZXh0Q29udGVudCA9ICdUaHJlZSc7XG4gICAgU0VMRUNULmFwcGVuZENoaWxkKG9wdGlvblRocmVlKTtcblxuICAgIGxldCBvcHRpb25Gb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uRm91ci52YWx1ZSA9IDQ7XG4gICAgb3B0aW9uRm91ci50ZXh0Q29udGVudCA9ICdGb3VyJztcbiAgICBTRUxFQ1QuYXBwZW5kQ2hpbGQob3B0aW9uRm91cik7XG5cbiAgICBTRUxFQ1QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBzZXRQcmlvcml0eSh0YXNrT2JqZWN0LCBTRUxFQ1QudmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBEQVRFSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHNldERhdGUodGFza09iamVjdCwgbmV3IERhdGUoREFURUlOUFVULnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IFJFTU9WRUJVVFRPTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFJFTU9WRUJVVFRPTi5pZCA9ICdkZWwtYnV0dG9uJztcbiAgICBSRU1PVkVCVVRUT04udGV4dENvbnRlbnQgID0gJ0RlbGV0ZSc7XG4gICAgaWYgKCFSRU1PVkVCVVRUT04uY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXNldmwnKSkge1xuICAgICAgICBSRU1PVkVCVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVUYXNrKHRhc2tPYmplY3QpO1xuICAgICAgICAgICAgV0lER0VULnJlbW92ZSgpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgUkVNT1ZFQlVUVE9OLmNsYXNzTGlzdC5hZGQoJ2hhc2V2bCcpO1xuICAgIFdJREdFVC5hcHBlbmRDaGlsZChSRU1PVkVCVVRUT04pO1xuXG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKVsndGFza3MnXVt0YXNrS2V5XS5wcmlvcml0eSkge1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSlbJ3Rhc2tzJ11bdGFza0tleV0ucHJpb3JpdHk7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgfVxuXG5cbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpWyd0YXNrcyddW3Rhc2tLZXldLmR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSlbJ3Rhc2tzJ11bdGFza0tleV0uZHVlRGF0ZTtcbiAgICAgICAgbGV0IGZpbmFsID0gZGF0ZS5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgICBEQVRFSU5QVVQudmFsdWUgPSBmaW5hbDtcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uID0gV0lER0VULmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RvJylbMF07XG4gICAgaWYgKHRhc2tPYmplY3QuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgfVxuICAgIH1cblxuICAgIFxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24gKHRhc2ssIHRhc2tPYmplY3QpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlkID0gJ3dpZGdldC1idXR0b24nO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkbycpO1xuICAgIFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29tcGxldGVVbmNvbXBsZXRlVGFzayh0YXNrT2JqZWN0KTtcbiAgICAgICAgaWYgKHRhc2tPYmplY3QuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0LWhlYWRlcicpLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBwLnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQtaGVhZGVyJykubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHAuc3R5bGUudGV4dERlY29yYXRpb25MaW5lID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoYXNldmwnKTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgfSlcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUZXh0QXJlYSh0ZXh0YXJlYSkgIHtcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xufVxuXG5mdW5jdGlvbiB0ZXh0QXJlYVRvUGFyYWcodGV4dGFyZWEsIHRhc2tPYmplY3QpIHtcbiAgICBjb25zdCBERVNDUklQVElPTkNPTlRBSU5FUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlkID0gJ3BhcmFncmFwaCc7XG4gICAgcC50ZXh0Q29udGVudCA9IHRleHRhcmVhLnZhbHVlO1xuICAgIHRleHRhcmVhLnJlbW92ZSgpO1xuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKHApO1xuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHRBcmVhLmlubmVyVGV4dCA9IHAudGV4dENvbnRlbnQ7XG4gICAgICAgIHAucmVtb3ZlKCk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tPYmplY3QpO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHAudGV4dENvbnRlbnQ7XG4gICAgICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTsgIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tPYmplY3QpIHtcbiAgICBjb25zdCBERVNDUklQVElPTklOUFVUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBERVNDUklQVElPTklOUFVULmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBERVNDUklQVElPTklOUFVULm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgIGNvbnNvbGUubG9nKHRhc2tPYmplY3QpO1xuICAgIGxldCB2YWx1ZSA9IHRhc2tPYmplY3RbT2JqZWN0LmtleXModGFza09iamVjdClbMF1dLmRlc2NyaXB0aW9uO1xuICAgIERFU0NSSVBUSU9OSU5QVVQudmFsdWUgPSB2YWx1ZTtcblxuICAgIERFU0NSSVBUSU9OSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4cGFuZFRleHRBcmVhKERFU0NSSVBUSU9OSU5QVVQpO1xuICAgIH0pXG5cbiAgICBERVNDUklQVElPTklOUFVULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbih0YXNrT2JqZWN0LCBERVNDUklQVElPTklOUFVULnZhbHVlKTtcbiAgICAgICAgICAgIERFU0NSSVBUSU9OSU5QVVQuYmx1cigpO1xuICAgICAgICAgICAgREVTQ1JJUFRJT05JTlBVVC5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgdGV4dEFyZWFUb1BhcmFnKERFU0NSSVBUSU9OSU5QVVQsIHRhc2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBzY3JvbGxIZWlnaHQgPSAxMDA7XG5cbiAgICBERVNDUklQVElPTklOUFVULm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2Nyb2xsSGVpZ2h0IDwgREVTQ1JJUFRJT05JTlBVVC5zY3JvbGxIZWlnaHQpIHsgXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBERVNDUklQVElPTklOUFVULnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikuc3R5bGUuaGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gREVTQ1JJUFRJT05JTlBVVDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHNldEludGlpYWxQcm9qZWN0cywgc2V0U3RhcnRQcm9qZWN0IH0gZnJvbSAnLi9pdGVtLWNvbnN0cnVjdG9yJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZFRvZGF5IH0gZnJvbSAnLi90b2RheS5qcyc7XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dvcmsnKSkge1xuICAgIHNldFN0YXJ0UHJvamVjdCgpO1xuICAgIHNldEludGlpYWxQcm9qZWN0cygpO1xufVxubG9hZFRvZGF5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9