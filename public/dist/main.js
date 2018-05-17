/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Error.js":
/*!*********************************!*\
  !*** ./src/components/Error.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Error = exports.Error = \"<span class=\\\"error\\\">G\\xEDria n\\xE3o encontrada!</span>\";\n\n//# sourceURL=webpack:///./src/components/Error.js?");

/***/ }),

/***/ "./src/components/Result.js":
/*!**********************************!*\
  !*** ./src/components/Result.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Results = exports.Results = function Results(_ref) {\n  var name = _ref.name,\n      meaning = _ref.meaning,\n      description = _ref.description,\n      example = _ref.example;\n  return \"<h2 class=\\\"name\\\">\" + name + \"</h2>\\n\\n<p class=\\\"meaning\\\"><span>Meaning: </span>\" + meaning + \"</p>\\n\\n<p class=\\\"description\\\"><span>Description: </span>\" + description + \"</p>\\n\\n<p class=\\\"example\\\"><span>Example: </span>\" + example + \"</p>\";\n};\n\n//# sourceURL=webpack:///./src/components/Result.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _get = __webpack_require__(/*! ./util/get */ \"./src/util/get.js\");\n\nvar _insert = __webpack_require__(/*! ./util/insert */ \"./src/util/insert.js\");\n\nvar _Result = __webpack_require__(/*! ./components/Result */ \"./src/components/Result.js\");\n\nvar _Error = __webpack_require__(/*! ./components/Error */ \"./src/components/Error.js\");\n\nvar $results = document.querySelector('[data-js=\"results\"]');\nvar $form = document.querySelector('[data-js=\"form\"]');\nvar $input = document.querySelector('[data-js=\"input\"]');\n\nvar data = (0, _get.get)('/slang');\n\nvar clean = function clean(arr) {\n  return function (key) {\n    return arr.filter(function (obj) {\n      return obj.name === key;\n    })[0];\n  };\n};\n\nvar content = function content(info) {\n  return info ? (0, _Result.Results)(info) : _Error.Error;\n};\n\nvar handleSubmit = function handleSubmit(e) {\n  e.preventDefault();\n  var key = $input.value;\n  data.then(function (slangs) {\n    return (0, _insert.insert)($results)(content(clean(slangs)(key)));\n  });\n};\n$form.addEventListener('submit', handleSubmit);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/get.js":
/*!*************************!*\
  !*** ./src/util/get.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar get = exports.get = function get(url) {\n  return fetch(url).then(function (data) {\n    return data.json();\n  });\n};\n\n//# sourceURL=webpack:///./src/util/get.js?");

/***/ }),

/***/ "./src/util/insert.js":
/*!****************************!*\
  !*** ./src/util/insert.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar insert = exports.insert = function insert($elm) {\n  return function (data) {\n    return $elm.innerHTML = data;\n  };\n};\n\n//# sourceURL=webpack:///./src/util/insert.js?");

/***/ })

/******/ });