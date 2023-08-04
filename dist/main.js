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
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
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
    background-color: rgb(235, 235, 235);
    font-size: 24px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-right: 120px;
    gap: 10px;
}

#projects {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,WAAW;IACX,kBAAkB;IAClB,gBAAgB;;IAEhB,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,0CAA0C;IAC1C,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;IAC1C,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,500&display=swap');\r\n\r\nhtml, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: white;\r\n}\r\n\r\nP {\r\n    margin: 0\r\n}\r\n\r\n:root {\r\n    font-family: 'DM Sans', sans-serif;\r\n    color: black;\r\n}\r\n\r\n#navigation {\r\n    background-color: rgb(235, 235, 235);\r\n    font-size: 24px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    padding-right: 120px;\r\n    gap: 10px;\r\n}\r\n\r\n#projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n#projects div {\r\n    color: rgb(46, 46, 46);\r\n}\r\n\r\n#main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n\r\n    width: 100%;\r\n    padding-left: 20px;\r\n    font-weight: 600;\r\n\r\n    background-image: url(../img/background.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#taskInput {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    padding-left: 20px;\r\n    border-radius: 10px;\r\n    height: 50px;\r\n    width: 50%;\r\n    margin-left: 20%;\r\n    border: none;\r\n    background-color: rgba(255, 245, 245, 0.4);\r\n    backdrop-filter: blur(2em);\r\n}\r\n\r\n#taskInput:focus {\r\n    outline: none;\r\n    background-color: rgb(235, 235, 235, 0.9);\r\n}\r\n\r\n#header {\r\n    width: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    font-size: 34px;\r\n    padding: 20px;\r\n}\r\n\r\n#header p {\r\n    margin: 0;\r\n}\r\n\r\n#headerdate {\r\n    align-self: last center;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n}\r\n\r\n#taskcontainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin: 20px;\r\n    height: 700px;\r\n\r\n}\r\n\r\n#taskcontainer div {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 50px;\r\n    background-color: white;\r\n    border-radius: 4px;\r\n}\r\n\r\n#taskcontainer div.done {\r\n    background-color: rgba(255, 245, 245, 0.1);\r\n    backdrop-filter: blur(2em);\r\n}\r\n\r\n#taskcontainer div p {\r\n    margin: 0;\r\n    margin-left: 20px;\r\n}\r\n\r\nbutton.do {\r\n    border-radius: 50%;\r\n    height: 20px;\r\n    width: 20px;\r\n    margin-left: 20px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n}\r\n\r\n#widget {\r\n    font-size: 20px;\r\n    background-color: #f1f1f1;\r\n    border-radius: 15px;\r\n    width: 900px;\r\n    height: 700px;\r\n    position: absolute;\r\n    top: 20vh;\r\n    left: 30vw;\r\n    overflow: auto;\r\n}\r\n\r\n#widget > div {\r\n    padding: 10px;\r\n}\r\n\r\n#widget #widget-nav {\r\n    justify-content: space-between;\r\n    padding: 15px;\r\n}\r\n\r\n#widget div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n#widget #widget-header {\r\n    display: flex;\r\n    gap: 20px;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n}\r\n\r\n#widget button {\r\n    margin-left: 10px;\r\n}\r\n\r\ntextarea {\r\n    height: 3ch;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    border: 0.5 solid grey;\r\n    box-shadow: none;\r\n    resize: none;\r\n    overflow: none;\r\n    outline: none;\r\n    overflow-y: hidden;\r\n    font-family: 'DM Sans', sans-serif;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n}\r\n\r\ntextarea.expanded {\r\n    height: 100px;\r\n    width: 600px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#description-container p {\r\n    font-weight: 500;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   completeUncompleteTask: () => (/* binding */ completeUncompleteTask),
/* harmony export */   saveTask: () => (/* binding */ saveTask),
/* harmony export */   setDescription: () => (/* binding */ setDescription),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory)
/* harmony export */ });


function taskFactory(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.complete = false;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.dateCreated = new Date();
}

function completeUncompleteTask(task) {
    if (task.complete === true) {
        task.complete = false;
    } else {
        task.complete = true;
    }
    localStorage.setItem(task.title, JSON.stringify(task));
}

function setDescription(task) {
    localStorage.setItem(task.title, JSON.stringify(task));
}

function saveTask(task) {
    localStorage.setItem(task.title, JSON.stringify(task));
}

function createNewProject(name) {
    this.name = name;
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
/* harmony export */   loadToday: () => (/* binding */ loadToday),
/* harmony export */   updateTaskDisplay: () => (/* binding */ updateTaskDisplay)
/* harmony export */ });
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./src/time.js");
/* harmony import */ var _item_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-constructor.js */ "./src/item-constructor.js");
/* harmony import */ var _widget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget.js */ "./src/widget.js");





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
            (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.saveTask)(task);
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
    for (const key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        let taskObject = JSON.parse(localStorage.getItem(key));
        array.push(taskObject);
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
                let taskObject =  JSON.parse(localStorage.getItem(titleElement.textContent));
                (0,_widget_js__WEBPACK_IMPORTED_MODULE_2__.loadWidget)(task, taskObject);
            })
            task.classList.add('taskevl');
        }

        if (!task.classList.contains('hasevl')) {
            button.addEventListener('click', () => {
                let taskObject = JSON.parse(localStorage.getItem(titleElement.textContent));
                (0,_item_constructor_js__WEBPACK_IMPORTED_MODULE_1__.completeUncompleteTask)(taskObject);
                button.classList.add('hasevl');
                task.classList.remove('done');
                updateTaskDisplay();
            })

        }

        task.appendChild(button);
        task.appendChild(titleElement);
        TASKCONTAINER.appendChild(task);

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

    if (!document.getElementById('widget')) {
        const WIDGET = document.createElement('div');
    WIDGET.id = 'widget';
    document.body.appendChild(WIDGET);

    const NAV = document.createElement('div');
    NAV.id = 'widget-nav';
    const PROJECT = document.createElement('p');
    PROJECT.textContent = 'Project : X';
    NAV.appendChild(PROJECT);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';

    exitButton.addEventListener('click', () => {
        WIDGET.remove();
        
    })
    NAV.appendChild(exitButton);

    WIDGET.appendChild(NAV);

    const HEADER = document.createElement('div');
    HEADER.id = 'widget-header';

    let title = document.createElement('p');
    console.log(task);
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
    DESCRIPTIONLABEL.textContent = 'Description';

    const GROWWRAP = document.createElement('div');
    GROWWRAP.id = 'grow-wrap';
    let description = createDescription(taskObject);
    GROWWRAP.appendChild(description);

    DESCRIPTIONCONTAINER.appendChild(DESCRIPTIONLABEL);
    DESCRIPTIONCONTAINER.appendChild(GROWWRAP);

    WIDGET.appendChild(DESCRIPTIONCONTAINER);

    const LIST = document.createElement('div');

    const DATE = document.createElement('p');
    DATE.textContent = 'dummy';
    LIST.appendChild(DATE);

    const PRIORITYCONTAINER = document.createElement('div');
    const LABEL = document.createElement('label');
    LABEL.for = 'priortiy';
    LABEL.textContent = 'Priority';
    const SELECT = document.createElement('select');
    SELECT.name = 'priorities';
    SELECT.id = 'priority';
    
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
    PRIORITYCONTAINER.appendChild(SELECT);
    LIST.appendChild(PRIORITYCONTAINER);

    WIDGET.appendChild(LIST);


    let button = WIDGET.getElementsByClassName('do')[0];
    console.log(button);
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
            taskObject.description = DESCRIPTIONINPUT.value;
            DESCRIPTIONINPUT.blur();
            DESCRIPTIONINPUT.classList.remove('expanded');
            textAreaToParag(DESCRIPTIONINPUT, taskObject);
            (0,_item_constructor__WEBPACK_IMPORTED_MODULE_0__.setDescription)(taskObject);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.js */ "./src/time.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today.js */ "./src/today.js");





(0,_today_js__WEBPACK_IMPORTED_MODULE_2__.loadToday)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSSxZQUFZLFlBQVksMEJBQTBCO0FBQ3BMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxV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QUFDMUI7QUFDcUI7QUFDSDtBQUN2QztBQUNBLG9EQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3QvLi9zcmMvaXRlbS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC8uL3NyYy90aW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL3dpZGdldC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC10aGVvZGlucHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QtdGhlb2RpbnByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0LXRoZW9kaW5wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6aXRhbCxvcHN6LHdnaHRAMCw5Li40MCw0MDA7MCw5Li40MCw1MDA7MCw5Li40MCw3MDA7MSw5Li40MCw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5QIHtcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbmF2aWdhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuI3Byb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jcHJvamVjdHMgZGl2IHtcclxuICAgIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGFza0lucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ1LCAyNDUsIDAuNCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcclxufVxyXG5cclxuI3Rhc2tJbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUsIDAuOSk7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jaGVhZGVyZGF0ZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBsYXN0IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbiN0YXNrY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG5cclxufVxyXG5cclxuI3Rhc2tjb250YWluZXIgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbiN0YXNrY29udGFpbmVyIGRpdi5kb25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC4xKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pO1xyXG59XHJcblxyXG4jdGFza2NvbnRhaW5lciBkaXYgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuYnV0dG9uLmRvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jd2lkZ2V0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjB2aDtcclxuICAgIGxlZnQ6IDMwdnc7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI3dpZGdldCA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jd2lkZ2V0ICN3aWRnZXQtbmF2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbiN3aWRnZXQgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbiN3aWRnZXQgI3dpZGdldC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jd2lkZ2V0IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAzY2g7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyOiAwLjUgc29saWQgZ3JleTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhLmV4cGFuZGVkIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbi1jb250YWluZXIgcCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIseURBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6aXRhbCxvcHN6LHdnaHRAMCw5Li40MCw0MDA7MCw5Li40MCw1MDA7MCw5Li40MCw3MDA7MSw5Li40MCw1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5QIHtcXHJcXG4gICAgbWFyZ2luOiAwXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2aWdhdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyBkaXYge1xcclxcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9iYWNrZ3JvdW5kLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tJbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjQ1LCAwLjQpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tJbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyZGF0ZSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGxhc3QgY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tjb250YWluZXIgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza2NvbnRhaW5lciBkaXYuZG9uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC4xKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJlbSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrY29udGFpbmVyIGRpdiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRvIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jd2lkZ2V0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogOTAwcHg7XFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHZoO1xcclxcbiAgICBsZWZ0OiAzMHZ3O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3dpZGdldCA+IGRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgI3dpZGdldC1uYXYge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2lkZ2V0ICN3aWRnZXQtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiN3aWRnZXQgYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAzY2g7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYm9yZGVyOiAwLjUgc29saWQgZ3JleTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5leHBhbmRlZCB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24tY29udGFpbmVyIHAge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldERhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB0aGlzLmRhdGVDcmVhdGVkID0gbmV3IERhdGUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlVW5jb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzay50aXRsZSwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24odGFzaykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzay50aXRsZSwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2sodGFzaykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzay50aXRsZSwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbn0gIFxyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlEYXRlKCkge1xyXG4gICAgY29uc3QgREFZTkFNRVMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XHJcbiAgICBjb25zdCBNT05USFMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRheSA9IERBWU5BTUVTW2RhdGUuZ2V0RGF5KCldO1xyXG4gICAgbGV0IGRheU51bWJlciA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gTU9OVEhTW2RhdGUuZ2V0TW9udGgoKV07XHJcblxyXG4gICAgcmV0dXJuIGAke2RheX0gJHtkYXlOdW1iZXJ9ICR7bW9udGh9YDtcclxufSIsImltcG9ydCB7IGdldERpc3BsYXlEYXRlIH0gZnJvbSBcIi4vdGltZS5qc1wiO1xyXG5pbXBvcnQgeyBjb21wbGV0ZVVuY29tcGxldGVUYXNrLCBzYXZlVGFzaywgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9pdGVtLWNvbnN0cnVjdG9yLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRXaWRnZXQgfSBmcm9tIFwiLi93aWRnZXQuanNcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRvZGF5KCkge1xyXG4gICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCBkYXRlID0gZ2V0RGlzcGxheURhdGUoKTtcclxuICAgIFxyXG4gICAgY29uc3QgSEVBREVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgSEVBREVSQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBIRUFERVIuaW5uZXJIVE1MID0gJ1RvZGF5LCc7XHJcbiAgICBjb25zdCBIRUFERVJEQVRFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgSEVBREVSREFURS5pZCA9ICdoZWFkZXJkYXRlJztcclxuICAgIEhFQURFUkRBVEUuaW5uZXJIVE1MID0gYCR7ZGF0ZX1gO1xyXG4gICAgSEVBREVSQ09OVEFJTkVSLmFwcGVuZENoaWxkKEhFQURFUik7XHJcbiAgICBIRUFERVJDT05UQUlORVIuYXBwZW5kQ2hpbGQoSEVBREVSREFURSk7XHJcbiAgICBIRUFERVJDT05UQUlORVIuaWQgPSAnaGVhZGVyJztcclxuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChIRUFERVJDT05UQUlORVIpO1xyXG5cclxuICAgIGNvbnN0IFRBU0tDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRBU0tDT05UQUlORVIuaWQgPSAndGFza2NvbnRhaW5lcic7XHJcbiAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoVEFTS0NPTlRBSU5FUik7XHJcblxyXG4gICAgbG9hZFRhc2tDcmVhdG9yKCk7XHJcbiAgICBhZGRJbnB1dExpc3RlbmVycygpO1xyXG4gICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tDcmVhdG9yKCkge1xyXG4gICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dEJveC50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXRCb3guaWQgPSAndGFza0lucHV0JztcclxuICAgIGlucHV0Qm94Lm5hbWUgPSAndGFza0lucHV0JztcclxuICAgIGlucHV0Qm94LnZhbHVlID0gJ0FkZCBhIHRhc2snOyBcclxuICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChpbnB1dEJveCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZElucHV0TGlzdGVuZXJzICAoKSB7IFxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpICYmIGlucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IG5ldyB0YXNrRmFjdG9yeShpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHNhdmVUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xyXG4gICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XHJcbiAgICBjb25zdCBUQVNLQ09OVEFJTkVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tjb250YWluZXInKTtcclxuICAgIHdoaWxlIChUQVNLQ09OVEFJTkVSLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIFRBU0tDT05UQUlORVIucmVtb3ZlQ2hpbGQoVEFTS0NPTlRBSU5FUi5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0YXNrT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgICBhcnJheS5wdXNoKHRhc2tPYmplY3QpO1xyXG4gICAgfVxyXG4gICAgYXJyYXkuc29ydCgoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5kYXRlQ3JlYXRlZC5sb2NhbGVDb21wYXJlKGIuZGF0ZUNyZWF0ZWQpO1xyXG4gICAgfSApKVxyXG5cclxuICAgIGZvciAoY29uc3QgdGFza09iamVjdCBpbiBhcnJheSkge1xyXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcblxyXG4gICAgICAgIHRpdGxlRWxlbWVudC5pZCA9ICd0aXRsZS1lbGVtZW50JztcclxuICAgICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gYXJyYXlbdGFza09iamVjdF0udGl0bGU7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkbycpO1xyXG5cclxuICAgICAgICAvLyBBZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFzayBkaXYgdGhhdCBjYWxscyBhIHdpZGdldCBsb2FkIGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKCF0YXNrLmNsYXNzTGlzdC5jb250YWlucygndGFza2V2bCcpKSB7XHJcbiAgICAgICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iamVjdCA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgbG9hZFdpZGdldCh0YXNrLCB0YXNrT2JqZWN0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrZXZsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXNldmwnKSkge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGVFbGVtZW50LnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZVVuY29tcGxldGVUYXNrKHRhc2tPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hhc2V2bCcpO1xyXG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgVEFTS0NPTlRBSU5FUi5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICAgICAgaWYgKGFycmF5W3Rhc2tPYmplY3RdLmNvbXBsZXRlID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQgKCkge1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnQWRkIGEgdGFzayc7XHJcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcclxufSIsImltcG9ydCB7IGNvbXBsZXRlVW5jb21wbGV0ZVRhc2ssIHNldERlc2NyaXB0aW9uIH0gZnJvbSBcIi4vaXRlbS1jb25zdHJ1Y3RvclwiO1xyXG5pbXBvcnQgeyB1cGRhdGVUYXNrRGlzcGxheSB9IGZyb20gXCIuL3RvZGF5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdpZGdldCh0YXNrLCB0YXNrT2JqZWN0KSB7XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0JykpIHtcclxuICAgICAgICBjb25zdCBXSURHRVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFdJREdFVC5pZCA9ICd3aWRnZXQnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChXSURHRVQpO1xyXG5cclxuICAgIGNvbnN0IE5BViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgTkFWLmlkID0gJ3dpZGdldC1uYXYnO1xyXG4gICAgY29uc3QgUFJPSkVDVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIFBST0pFQ1QudGV4dENvbnRlbnQgPSAnUHJvamVjdCA6IFgnO1xyXG4gICAgTkFWLmFwcGVuZENoaWxkKFBST0pFQ1QpO1xyXG5cclxuICAgIGNvbnN0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGV4aXRCdXR0b24udGV4dENvbnRlbnQgPSAnRXhpdCc7XHJcblxyXG4gICAgZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBXSURHRVQucmVtb3ZlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgTkFWLmFwcGVuZENoaWxkKGV4aXRCdXR0b24pO1xyXG5cclxuICAgIFdJREdFVC5hcHBlbmRDaGlsZChOQVYpO1xyXG5cclxuICAgIGNvbnN0IEhFQURFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgSEVBREVSLmlkID0gJ3dpZGdldC1oZWFkZXInO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBpZiAodGFza09iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSApIHtcclxuICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgfVxyXG5cclxuICAgIEhFQURFUi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnV0dG9uKHRhc2ssIHRhc2tPYmplY3QpKTtcclxuICAgIEhFQURFUi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoSEVBREVSKTtcclxuXHJcbiAgICBjb25zdCBERVNDUklQVElPTkNPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgREVTQ1JJUFRJT05DT05UQUlORVIuaWQgPSAnZGVzY3JpcHRpb24tY29udGFpbmVyJztcclxuICAgIGNvbnN0IERFU0NSSVBUSU9OTEFCRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgREVTQ1JJUFRJT05MQUJFTC5mb3IgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgREVTQ1JJUFRJT05MQUJFTC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcblxyXG4gICAgY29uc3QgR1JPV1dSQVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIEdST1dXUkFQLmlkID0gJ2dyb3ctd3JhcCc7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbih0YXNrT2JqZWN0KTtcclxuICAgIEdST1dXUkFQLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBERVNDUklQVElPTkNPTlRBSU5FUi5hcHBlbmRDaGlsZChERVNDUklQVElPTkxBQkVMKTtcclxuICAgIERFU0NSSVBUSU9OQ09OVEFJTkVSLmFwcGVuZENoaWxkKEdST1dXUkFQKTtcclxuXHJcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoREVTQ1JJUFRJT05DT05UQUlORVIpO1xyXG5cclxuICAgIGNvbnN0IExJU1QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBEQVRFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgREFURS50ZXh0Q29udGVudCA9ICdkdW1teSc7XHJcbiAgICBMSVNULmFwcGVuZENoaWxkKERBVEUpO1xyXG5cclxuICAgIGNvbnN0IFBSSU9SSVRZQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBMQUJFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBMQUJFTC5mb3IgPSAncHJpb3J0aXknO1xyXG4gICAgTEFCRUwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gICAgY29uc3QgU0VMRUNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBTRUxFQ1QubmFtZSA9ICdwcmlvcml0aWVzJztcclxuICAgIFNFTEVDVC5pZCA9ICdwcmlvcml0eSc7XHJcbiAgICBcclxuICAgIGxldCBvcHRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbk9uZS52YWx1ZSA9IDE7XHJcbiAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnT25lJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25PbmUpO1xyXG4gICAgXHJcbiAgICBsZXQgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb25Ud28udmFsdWUgPSAyO1xyXG4gICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ1R3byc7XHJcbiAgICBTRUxFQ1QuYXBwZW5kQ2hpbGQob3B0aW9uVHdvKTtcclxuXHJcbiAgICBsZXQgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvblRocmVlLnZhbHVlID0gMztcclxuICAgIG9wdGlvblRocmVlLnRleHRDb250ZW50ID0gJ1RocmVlJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25UaHJlZSk7XHJcblxyXG4gICAgbGV0IG9wdGlvbkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbkZvdXIudmFsdWUgPSA0O1xyXG4gICAgb3B0aW9uRm91ci50ZXh0Q29udGVudCA9ICdGb3VyJztcclxuICAgIFNFTEVDVC5hcHBlbmRDaGlsZChvcHRpb25Gb3VyKTtcclxuICAgIFBSSU9SSVRZQ09OVEFJTkVSLmFwcGVuZENoaWxkKFNFTEVDVCk7XHJcbiAgICBMSVNULmFwcGVuZENoaWxkKFBSSU9SSVRZQ09OVEFJTkVSKTtcclxuXHJcbiAgICBXSURHRVQuYXBwZW5kQ2hpbGQoTElTVCk7XHJcblxyXG5cclxuICAgIGxldCBidXR0b24gPSBXSURHRVQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG8nKVswXTtcclxuICAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XHJcbiAgICBpZiAodGFza09iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0J1dHRvbiAodGFzaywgdGFza09iamVjdCkge1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RvJyk7XHJcbiAgICBcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb21wbGV0ZVVuY29tcGxldGVUYXNrKHRhc2tPYmplY3QpO1xyXG4gICAgICAgIGlmICh0YXNrT2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXQtaGVhZGVyJykubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgcC5zdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0LWhlYWRlcicpLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIHAuc3R5bGUudGV4dERlY29yYXRpb25MaW5lID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaGFzZXZsJyk7XHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XHJcbiAgICAgICAgdXBkYXRlVGFza0Rpc3BsYXkoKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBhbmRUZXh0QXJlYSh0ZXh0YXJlYSkgIHtcclxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHRBcmVhVG9QYXJhZyh0ZXh0YXJlYSwgdGFza09iamVjdCkge1xyXG4gICAgY29uc3QgREVTQ1JJUFRJT05DT05UQUlORVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuaWQgPSAncGFyYWdyYXBoJztcclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0YXJlYS52YWx1ZTtcclxuICAgIHRleHRhcmVhLnJlbW92ZSgpO1xyXG4gICAgREVTQ1JJUFRJT05DT05UQUlORVIuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgdGV4dEFyZWEuaW5uZXJUZXh0ID0gcC50ZXh0Q29udGVudDtcclxuICAgICAgICBwLnJlbW92ZSgpO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tPYmplY3QpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gcC50ZXh0Q29udGVudDtcclxuICAgICAgICBERVNDUklQVElPTkNPTlRBSU5FUi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7ICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tPYmplY3QpIHtcclxuICAgIGNvbnN0IERFU0NSSVBUSU9OSU5QVVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgREVTQ1JJUFRJT05JTlBVVC5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBERVNDUklQVElPTklOUFVULm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgbGV0IHZhbHVlID0gdGFza09iamVjdC5kZXNjcmlwdGlvbjtcclxuICAgIERFU0NSSVBUSU9OSU5QVVQudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBERVNDUklQVElPTklOUFVULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGV4cGFuZFRleHRBcmVhKERFU0NSSVBUSU9OSU5QVVQpO1xyXG4gICAgfSlcclxuXHJcbiAgICBERVNDUklQVElPTklOUFVULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgdGFza09iamVjdC5kZXNjcmlwdGlvbiA9IERFU0NSSVBUSU9OSU5QVVQudmFsdWU7XHJcbiAgICAgICAgICAgIERFU0NSSVBUSU9OSU5QVVQuYmx1cigpO1xyXG4gICAgICAgICAgICBERVNDUklQVElPTklOUFVULmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIHRleHRBcmVhVG9QYXJhZyhERVNDUklQVElPTklOUFVULCB0YXNrT2JqZWN0KTtcclxuICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24odGFza09iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gMTAwO1xyXG5cclxuICAgIERFU0NSSVBUSU9OSU5QVVQub25rZXlkb3duID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbEhlaWdodCA8IERFU0NSSVBUSU9OSU5QVVQuc2Nyb2xsSGVpZ2h0KSB7IFxyXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBERVNDUklQVElPTklOUFVULnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS5zdHlsZS5oZWlnaHQgPSBzY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIERFU0NSSVBUSU9OSU5QVVQ7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc1RvSG91cnMgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXREaXNwbGF5RGF0ZX0gZnJvbSAnLi90aW1lLmpzJztcclxuaW1wb3J0IHsgbG9hZFRvZGF5IH0gZnJvbSAnLi90b2RheS5qcyc7XHJcblxyXG5sb2FkVG9kYXkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=