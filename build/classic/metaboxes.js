this["cf"] = this["cf"] || {}; this["cf"]["metaboxes"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/metaboxes/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n  return arr2;\n}\nmodule.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\nmodule.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\nmodule.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\nmodule.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\nmodule.exports = _classCallCheck, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\nmodule.exports = _createClass, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _extends.apply(this, arguments);\n}\nmodule.exports = _extends, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _getPrototypeOf(o);\n}\nmodule.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\nmodule.exports = _inherits, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\nmodule.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nmodule.exports = _iterableToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n  if (_i == null) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _s, _e;\n  try {\n    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n  return _arr;\n}\nmodule.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nmodule.exports = _nonIterableRest, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nmodule.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return assertThisInitialized(self);\n}\nmodule.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  return _setPrototypeOf(o, p);\n}\nmodule.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\nmodule.exports = _slicedToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\nmodule.exports = _toConsumableArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\nmodule.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/callbag-create/index.cjs.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-create/index.cjs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst create = prod => (start, sink) => {\n  if (start !== 0) return;\n  if (typeof prod !== 'function') {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let end = false;\n  let clean;\n  sink(0, (t) => {\n    if (!end) {\n      end = t === 2;\n      if (end && typeof clean === 'function') clean();\n    }\n  });\n  if (end) return;\n  clean = prod((v) => {\n    if (!end) sink(1, v);\n  }, (e) => {\n    if (!end && e !== undefined) {\n      end = true;\n      sink(2, e);\n    }\n  }, () => {\n    if (!end) {\n      end = true;\n      sink(2);\n    }\n  });\n};\n\nmodule.exports = create;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-create/index.cjs.js?");

/***/ }),

/***/ "./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar is = function is(previous, current) {\n  return previous === current;\n};\n\nfunction distinctUntilChanged(compare) {\n  if (compare === void 0) {\n    compare = is;\n  }\n\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var inited = false;\n      var prev;\n      var talkback;\n      source(0, function (type, data) {\n        if (type === 0) {\n          talkback = data;\n        }\n\n        if (type !== 1) {\n          sink(type, data);\n          return;\n        }\n\n        if (inited && compare(prev, data)) {\n          talkback(1);\n          return;\n        }\n\n        inited = true;\n        prev = data;\n        sink(1, data);\n      });\n    };\n  };\n}\n\nmodule.exports = distinctUntilChanged;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js?");

/***/ }),

/***/ "./node_modules/callbag-of/dist/callbag-of.cjs.dev.js":
/*!************************************************************!*\
  !*** ./node_modules/callbag-of/dist/callbag-of.cjs.dev.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\nfunction of() {\n  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {\n    values[_key] = arguments[_key];\n  }\n\n  return function (start, sink) {\n    if (start !== 0) return;\n    var copy = values.slice();\n    var disposed = false;\n    sink(0, function (type) {\n      if (type !== 2) return;\n      disposed = true;\n      copy.length = 0;\n    });\n\n    while (copy.length !== 0) {\n      sink(1, copy.shift());\n    }\n\n    if (disposed) return;\n    sink(2);\n  };\n}\n\nexports.default = of;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-of/dist/callbag-of.cjs.dev.js?");

/***/ }),

/***/ "./node_modules/callbag-of/dist/callbag-of.cjs.js":
/*!********************************************************!*\
  !*** ./node_modules/callbag-of/dist/callbag-of.cjs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./callbag-of.cjs.dev.js */ \"./node_modules/callbag-of/dist/callbag-of.cjs.dev.js\");\n}\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-of/dist/callbag-of.cjs.js?");

/***/ }),

/***/ "./node_modules/callbag-start-with/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/callbag-start-with/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst startWith = (...xs) => inputSource => (start, outputSink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  let inputTalkback;\n  let trackPull = false;\n  let lastPull;\n\n  outputSink(0, (ot, od) => {\n    if (trackPull && ot === 1) {\n      lastPull = [1, od];\n    }\n\n    if (ot === 2) {\n      disposed = true;\n      xs.length = 0;\n    }\n\n    if (!inputTalkback) return;\n    inputTalkback(ot, od);\n  });\n\n  while (xs.length !== 0) {\n    if (xs.length === 1) {\n      trackPull = true;\n    }\n    outputSink(1, xs.shift());\n  }\n\n  if (disposed) return;\n\n  inputSource(0, (it, id) => {\n    if (it === 0) {\n      inputTalkback = id;\n      trackPull = false;\n\n      if (lastPull) {\n        inputTalkback(...lastPull);\n        lastPull = null;\n      }\n      return;\n    }\n    outputSink(it, id);\n  });\n};\n\nmodule.exports = startWith;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-start-with/index.cjs.js?");

/***/ }),

/***/ "./node_modules/callbag-take-until/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/callbag-take-until/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst UNIQUE = {};\n\nconst takeUntil = notifier => source => (start, sink) => {\n  if (start !== 0) return;\n  let sourceTalkback;\n  let notifierTalkback;\n  let inited = false;\n  let done = UNIQUE;\n\n  source(0, (type, data) => {\n    if (type === 0) {\n      sourceTalkback = data;\n\n      notifier(0, (t, d) => {\n        if (t === 0) {\n          notifierTalkback = d;\n          notifierTalkback(1);\n          return;\n        }\n        if (t === 1) {\n          done = void 0;\n          notifierTalkback(2);\n          sourceTalkback(2);\n          if (inited) sink(2);\n          return;\n        }\n        if (t === 2) {\n          notifierTalkback = null;\n          if (d != null) {\n            done = d;\n            sourceTalkback(2);\n            if (inited) sink(t, d);\n          }\n        }\n      });\n\n      inited = true;\n\n      sink(0, (t, d) => {\n        if (done !== UNIQUE) return;\n        if (t === 2 && notifierTalkback) notifierTalkback(2);\n        sourceTalkback(t, d);\n      });\n\n      if (done !== UNIQUE) sink(2, done);\n      return;\n    }\n\n    if (type === 2 && notifierTalkback) notifierTalkback(2);\n    sink(type, data);\n  });\n};\n\nmodule.exports = takeUntil;\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./node_modules/callbag-take-until/index.cjs.js?");

/***/ }),

/***/ "./packages/metaboxes/components/container/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/components/container/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\"));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar _element = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/components/container/style.scss\");\nvar _field = _interopRequireDefault(__webpack_require__(/*! ../field */ \"./packages/metaboxes/components/field/index.js\"));\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2[\"default\"])(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nvar Container = /*#__PURE__*/function (_Component) {\n  (0, _inherits2[\"default\"])(Container, _Component);\n  var _super = _createSuper(Container);\n  function Container() {\n    var _this;\n    (0, _classCallCheck2[\"default\"])(this, Container);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"state\", {\n      currentTab: null\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"renderField\", function (field) {\n      var FieldEdit = (0, _core.getFieldType)(field.type, 'metabox');\n      if (!FieldEdit) {\n        return null;\n      }\n      return __webpack_provided_wp_dot_element.createElement(_field[\"default\"], {\n        key: field.id,\n        id: field.id\n      }, __webpack_provided_wp_dot_element.createElement(FieldEdit, {\n        id: field.id,\n        containerId: _this.props.id\n      }));\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleTabClick\", function (tab) {\n      _this.setState({\n        currentTab: tab\n      });\n    });\n    return _this;\n  }\n  (0, _createClass2[\"default\"])(Container, [{\n    key: \"componentDidMount\",\n    value:\n    /**\n     * Lifecycle hook.\n     *\n     * @return {void}\n     */\n    function componentDidMount() {\n      var container = this.props.container;\n      if (this.isTabbed(container)) {\n        this.setState({\n          currentTab: Object.keys(container.settings.tabs)[0]\n        });\n      }\n    }\n\n    /**\n     * Returns whether the container uses tabs.\n     *\n     * @param  {Object} container\n     * @return {boolean}\n     */\n  }, {\n    key: \"isTabbed\",\n    value: function isTabbed(container) {\n      return (0, _lodash.isPlainObject)(container.settings.tabs);\n    }\n\n    /**\n     * Renders the given field.\n     *\n     * @param  {Object} field\n     * @return {Object}\n     */\n  }, {\n    key: \"render\",\n    value:\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    function render() {\n      var _this2 = this;\n      var currentTab = this.state.currentTab;\n      var container = this.props.container;\n      var hasTabs = this.isTabbed(container);\n      var classes = (0, _classnames[\"default\"])(['cf-container', \"cf-container-\".concat(container.id), \"cf-container-\".concat((0, _lodash.kebabCase)(container.type))].concat((0, _toConsumableArray2[\"default\"])(container.classes), [(0, _defineProperty2[\"default\"])({\n        'cf-container--plain': !hasTabs\n      }, \"cf-container--tabbed cf-container--\".concat(container.layout), hasTabs)]));\n      return __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: classes\n      }, __webpack_provided_wp_dot_element.createElement(\"input\", {\n        type: \"hidden\",\n        name: container.nonce.name,\n        value: container.nonce.value\n      }), hasTabs && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: \"cf-container__tabs cf-container__tabs--\".concat(container.layout)\n      }, __webpack_provided_wp_dot_element.createElement(\"ul\", {\n        className: \"cf-container__tabs-list\"\n      }, (0, _lodash.map)(container.settings.tabs, function (fieldNames, tabName) {\n        // eslint-disable-next-line no-shadow\n        var classes = (0, _classnames[\"default\"])('cf-container__tabs-item', {\n          'cf-container__tabs-item--current': tabName === currentTab\n        });\n        return __webpack_provided_wp_dot_element.createElement(\"li\", {\n          key: tabName,\n          className: classes,\n          tabIndex: -1,\n          role: \"tab\",\n          \"aria-selected\": currentTab === tabName\n        }, __webpack_provided_wp_dot_element.createElement(\"button\", {\n          type: \"button\",\n          onClick: function onClick() {\n            return _this2.handleTabClick(tabName);\n          },\n          dangerouslySetInnerHTML: {\n            __html: tabName\n          }\n        }));\n      }))), hasTabs && (0, _lodash.map)(container.settings.tabs, function (fieldNames, tabName) {\n        return __webpack_provided_wp_dot_element.createElement(\"div\", {\n          className: \"cf-container__fields\",\n          key: tabName,\n          hidden: tabName !== currentTab\n        }, (0, _lodash.map)(fieldNames, function (fieldName) {\n          var field = (0, _lodash.find)(container.fields, ['name', fieldName]);\n          return _this2.renderField(field);\n        }));\n      }), !hasTabs && __webpack_provided_wp_dot_element.createElement(\"div\", {\n        className: \"cf-container__fields\"\n      }, (0, _lodash.map)(container.fields, this.renderField)));\n    }\n  }]);\n  return Container;\n}(_element.Component);\nvar _default = Container;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/container/index.js?");

/***/ }),

/***/ "./packages/metaboxes/components/container/style.scss":
/*!************************************************************!*\
  !*** ./packages/metaboxes/components/container/style.scss ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/container/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/components/field/index.js":
/*!******************************************************!*\
  !*** ./packages/metaboxes/components/field/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/components/field/style.scss\");\nvar _withField = _interopRequireDefault(__webpack_require__(/*! ../../hocs/with-field */ \"./packages/metaboxes/hocs/with-field/index.js\"));\n/**\n * External dependencies.\n */\n/**\n * Carbon Fields dependencies.\n */\n/**\n * Internal dependencies.\n */\nvar _default = (0, _compose.compose)(_withField[\"default\"], (0, _core.withFilters)('carbon-fields.field-wrapper.metabox'))(_core.Field);\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/field/index.js?");

/***/ }),

/***/ "./packages/metaboxes/components/field/style.scss":
/*!********************************************************!*\
  !*** ./packages/metaboxes/components/field/style.scss ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/components/field/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/containers/hooks.js":
/*!************************************************!*\
  !*** ./packages/metaboxes/containers/hooks.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\nvar _withContainer = _interopRequireDefault(__webpack_require__(/*! ../hocs/with-container */ \"./packages/metaboxes/hocs/with-container/index.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Extends the containers with necessary hooks.\n */\n(0, _hooks.addFilter)('carbon-fields.register-container-type', 'carbon-fields/metaboxes', function (type, context, component) {\n  return (0, _compose.compose)(_withContainer[\"default\"], (0, _core.withFilters)(\"carbon-fields.\".concat(type, \".\").concat(context)))(component);\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/hooks.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/index.js":
/*!************************************************!*\
  !*** ./packages/metaboxes/containers/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initializeContainers;\nexports.renderContainer = renderContainer;\nvar _element = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n__webpack_require__(/*! ./hooks */ \"./packages/metaboxes/containers/hooks.js\");\n__webpack_require__(/*! ./widget */ \"./packages/metaboxes/containers/widget/index.js\");\n__webpack_require__(/*! ./term-meta */ \"./packages/metaboxes/containers/term-meta/index.js\");\n__webpack_require__(/*! ./theme-options */ \"./packages/metaboxes/containers/theme-options/index.js\");\n__webpack_require__(/*! ./user-meta */ \"./packages/metaboxes/containers/user-meta/index.js\");\nvar _container = _interopRequireDefault(__webpack_require__(/*! ../components/container */ \"./packages/metaboxes/components/container/index.js\"));\nvar _registry = __webpack_require__(/*! ./registry */ \"./packages/metaboxes/containers/registry.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Registers the containers.\n */\n['post_meta', 'term_meta', 'user_meta', 'comment_meta', 'network', 'theme_options', 'nav_menu_item', 'widget'].forEach(function (type) {\n  return (0, _registry.registerContainerType)(type, _container[\"default\"]);\n});\n\n/**\n * Renders the given container.\n *\n * @param  {Object} container\n * @param  {string} context\n * @return {void}\n */\nfunction renderContainer(container, context) {\n  var node = document.querySelector(\".container-\".concat(container.id));\n  var Component = (0, _registry.getContainerType)(container.type, context);\n  if (node) {\n    (0, _element.render)(__webpack_provided_wp_dot_element.createElement(Component, {\n      id: container.id\n    }), node, function () {\n      node.dataset.mounted = true;\n    });\n  } else {\n    // eslint-disable-next-line no-console\n    console.error((0, _i18n.sprintf)((0, _i18n.__)('Could not find DOM element for container \"%1$s\".', 'carbon-fields-ui'), container.id));\n  }\n}\n\n/**\n * Initializes the containers.\n *\n * @param  {string} context\n * @return {void}\n */\nfunction initializeContainers(context) {\n  var containers = (0, _data.select)('carbon-fields/metaboxes').getContainers();\n  (0, _lodash.forEach)(containers, function (container) {\n    renderContainer(container, context);\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/registry.js":
/*!***************************************************!*\
  !*** ./packages/metaboxes/containers/registry.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.registerContainerType = exports.getContainerType = void 0;\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\nvar _createRegistry = (0, _core.createRegistry)('container', ['classic', 'gutenberg']),\n  registerContainerType = _createRegistry.registerContainerType,\n  getContainerType = _createRegistry.getContainerType;\nexports.getContainerType = getContainerType;\nexports.registerContainerType = registerContainerType;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/registry.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/term-meta/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/containers/term-meta/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ \"lodash\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _refractCallbag = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _fromEventPattern = _interopRequireDefault(__webpack_require__(/*! ../../utils/from-event-pattern */ \"./packages/metaboxes/utils/from-event-pattern.js\"));\nvar _helpers = __webpack_require__(/*! ../../store/helpers */ \"./packages/metaboxes/store/helpers.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\nfunction aperture() {\n  return (0, _callbagBasics.pipe)((0, _fromEventPattern[\"default\"])(function (handler) {\n    return window.jQuery(document).on('ajaxSuccess', handler);\n  }, function (handler) {\n    return window.jQuery(document).off('ajaxSuccess', handler);\n  }, function (e, xhr, options, data) {\n    return {\n      options: options,\n      data: data\n    };\n  }), (0, _callbagBasics.filter)(function (_ref) {\n    var options = _ref.options,\n      data = _ref.data;\n    return options.data && options.data.indexOf('carbon_fields_container') > -1 && options.data.indexOf('add-tag') > -1 && !data.documentElement.querySelector('wp_error');\n  }));\n}\n\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @return {Function}\n */\nfunction handler(props) {\n  return function () {\n    // Collects identifiers of current fields so we can remove them later.\n    var oldFieldIds = _lodash[\"default\"].map(props.container.fields, 'id');\n\n    // Get a fresh copy of the container and fields.\n    var _normalizePreloadedSt = (0, _helpers.normalizePreloadedState)(_lodash[\"default\"].get(window.cf, 'preloaded.containers', [])),\n      containers = _normalizePreloadedSt.containers,\n      fields = _normalizePreloadedSt.fields;\n    var container = _lodash[\"default\"].find(containers, ['id', props.id]);\n    var containerFields = _lodash[\"default\"].filter(fields, ['container_id', props.id]);\n\n    // Replace the container and add the new fields.\n    var _dispatch = (0, _data.dispatch)('carbon-fields/metaboxes'),\n      updateState = _dispatch.updateState,\n      removeFields = _dispatch.removeFields;\n    updateState(_lodash[\"default\"].keyBy([container], 'id'), _lodash[\"default\"].keyBy(containerFields, 'id'));\n    removeFields(oldFieldIds);\n  };\n}\n(0, _hooks.addFilter)('carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', (0, _refractCallbag.withEffects)(aperture, {\n  handler: handler\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/term-meta/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/theme-options/index.js":
/*!**************************************************************!*\
  !*** ./packages/metaboxes/containers/theme-options/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _refractCallbag = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/containers/theme-options/style.scss\");\n/**\n * External dependencies.\n */\n\n// import fromEvent from \"callbag-from-event\";\n\n/**\n * Internal dependencies.\n */\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\nfunction aperture() {\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(window, \"scroll\"), (0, _callbagBasics.map)(function () {\n    return window.jQuery(window).scrollTop();\n  }));\n}\n\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @return {Function}\n */\nfunction handler() {\n  return function (windowTopOffset) {\n    var $container = window.jQuery(\".carbon-box:first\");\n    var $panel = window.jQuery(\"#postbox-container-1\");\n    var $bar = window.jQuery(\"#wpadminbar\");\n    var offset = $bar.height() + 10;\n    var threshold = $container.offset().top - offset;\n\n    // In some situations the threshold is negative number because\n    // the container element isn't rendered yet.\n    if (threshold > 0) {\n      $panel.toggleClass(\"fixed\", windowTopOffset >= threshold).css(\"top\", offset);\n    }\n  };\n}\n(0, _hooks.addFilter)(\"carbon-fields.theme_options.classic\", \"carbon-fields/metaboxes\", (0, _refractCallbag.withEffects)(aperture, {\n  handler: handler\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/theme-options/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/theme-options/style.scss":
/*!****************************************************************!*\
  !*** ./packages/metaboxes/containers/theme-options/style.scss ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/theme-options/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/containers/user-meta/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/containers/user-meta/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/containers/user-meta/style.scss\");\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/user-meta/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/user-meta/style.scss":
/*!************************************************************!*\
  !*** ./packages/metaboxes/containers/user-meta/style.scss ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/user-meta/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/containers/widget/index.js":
/*!*******************************************************!*\
  !*** ./packages/metaboxes/containers/widget/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _refractCallbag = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/containers/widget/style.scss\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\nfunction aperture() {\n  return (0, _core.fromSelector)((0, _data.select)('carbon-fields/metaboxes').isFieldUpdated);\n}\n\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @return {Function}\n */\nfunction handler(props) {\n  return function (_ref) {\n    var action = _ref.action;\n    if (!action) {\n      return;\n    }\n    var container = props.container;\n    var payload = action.payload;\n    if (container.fields.map(function (field) {\n      return field.id;\n    }).indexOf(payload.fieldId) >= 0) {\n      var $carbonContainer = window.jQuery(\".container-\".concat(container.id));\n      $carbonContainer.closest('.widget-inside').trigger('change');\n    }\n  };\n}\n(0, _hooks.addFilter)('carbon-fields.widget.classic', 'carbon-fields/metaboxes', (0, _refractCallbag.withEffects)(aperture, {\n  handler: handler\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/widget/index.js?");

/***/ }),

/***/ "./packages/metaboxes/containers/widget/style.scss":
/*!*********************************************************!*\
  !*** ./packages/metaboxes/containers/widget/style.scss ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/containers/widget/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/association/index.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/fields/association/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\nvar _stripCompactInputPrefix = _interopRequireDefault(__webpack_require__(/*! ../../utils/strip-compact-input-prefix */ \"./packages/metaboxes/utils/strip-compact-input-prefix.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Returns a field with the given name.\n *\n * @param  {Object[]} fields\n * @param  {string}   name\n * @return {?Object}\n */\nfunction findFieldByName(fields, name) {\n  return (0, _lodash.find)(fields, function (field) {\n    return field.name === name;\n  });\n}\n(0, _hooks.addFilter)('carbon-fields.association.metabox', 'carbon-fields/metaboxes', (0, _core.withProps)(function (props) {\n  return {\n    hierarchyResolver: function hierarchyResolver() {\n      // Get all fields.\n      var container = (0, _data.select)('carbon-fields/metaboxes').getContainerById(props.containerId);\n      var fields = (0, _data.select)('carbon-fields/metaboxes').getFieldsByContainerId(props.containerId);\n\n      // Get a clean version of field's name.\n      var fieldName = (0, _stripCompactInputPrefix[\"default\"])(props.name);\n\n      // Get the path.\n      var path = fieldName.split(/\\[|\\]/g);\n\n      // Remove chunks that are empty.\n      path = path.filter(function (chunk) {\n        return chunk !== '';\n      });\n      if (container.type === 'widget') {\n        return props.field.base_name;\n      }\n\n      // Get the root field.\n      var rootFieldName = path.shift();\n      var rootField = findFieldByName(fields, rootFieldName);\n\n      // Get the hierarchy.\n      var accessor = fields.indexOf(rootField);\n      var hierarchy = rootField.base_name;\n\n      // Visit every branch in the tree so we can get the full hierarchy.\n      while (path.length > 0) {\n        var chunk = path.shift();\n        var isGroup = !isNaN(chunk);\n        var isSameField = chunk === props.field.base_name;\n        var isNestedComplex = !isGroup && !isSameField;\n        if (isGroup) {\n          accessor = \"\".concat(accessor, \".value.\").concat(chunk, \".name\");\n          hierarchy = \"\".concat(hierarchy, \"[\").concat(chunk, \"]:\").concat((0, _lodash.get)(fields, accessor), \"/\");\n        }\n        if (isNestedComplex) {\n          var fieldReferences = (0, _lodash.get)(fields, accessor.replace(/\\.name$/, '.fields'));\n          var fieldReference = findFieldByName(fieldReferences, chunk);\n          var field = (0, _lodash.find)(fields, ['id', fieldReference.id]);\n          accessor = fields.indexOf(field);\n          hierarchy = \"\".concat(hierarchy).concat(field.base_name);\n        }\n        if (isSameField) {\n          hierarchy = \"\".concat(hierarchy).concat(chunk);\n        }\n      }\n      return hierarchy;\n    }\n  };\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/association/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/complex/index.js":
/*!****************************************************!*\
  !*** ./packages/metaboxes/fields/complex/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _immer = _interopRequireDefault(__webpack_require__(/*! immer */ \"immer\"));\nvar _element = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/complex/style.scss\");\nvar _field = _interopRequireDefault(__webpack_require__(/*! ../../components/field */ \"./packages/metaboxes/components/field/index.js\"));\nvar _flattenField = _interopRequireDefault(__webpack_require__(/*! ../../utils/flatten-field */ \"./packages/metaboxes/utils/flatten-field.js\"));\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2[\"default\"])(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nvar ComplexField = /*#__PURE__*/function (_Component) {\n  (0, _inherits2[\"default\"])(ComplexField, _Component);\n  var _super = _createSuper(ComplexField);\n  function ComplexField() {\n    var _this;\n    (0, _classCallCheck2[\"default\"])(this, ComplexField);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleAddGroup\", function (group, callback) {\n      var _this$props = _this.props,\n        id = _this$props.id,\n        field = _this$props.field,\n        value = _this$props.value,\n        addFields = _this$props.addFields,\n        onChange = _this$props.onChange;\n\n      // Create a copy of the group to prevent\n      // incidentally modifications.\n      group = (0, _lodash.cloneDeep)(group);\n\n      // Get a flat list of all fields for this group.\n      var fields = [];\n      group.id = (0, _core.uniqueId)();\n      group.container_id = field.container_id;\n      group.fields = group.fields.map(function (groupField) {\n        return (0, _flattenField[\"default\"])(groupField, field.container_id, fields);\n      });\n\n      // Make sure that the group is expanded even\n      // `set_collapsed(true)` is used.\n      group.collapsed = false;\n\n      // Push the group to the field.\n      addFields(fields);\n      onChange(id, value.concat(group));\n      callback(group);\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleCloneGroup\", function (group, callback) {\n      var _this$props2 = _this.props,\n        id = _this$props2.id,\n        value = _this$props2.value,\n        cloneFields = _this$props2.cloneFields,\n        onChange = _this$props2.onChange;\n      var originFieldIds = group.fields.map(function (groupField) {\n        return groupField.id;\n      });\n      var cloneFieldIds = originFieldIds.map(function () {\n        return (0, _core.uniqueId)();\n      });\n      var clonedGroup = (0, _lodash.cloneDeep)(group);\n      clonedGroup.id = (0, _core.uniqueId)();\n      clonedGroup.fields.forEach(function (groupField, index) {\n        groupField.id = cloneFieldIds[index];\n      });\n      cloneFields(originFieldIds, cloneFieldIds);\n      onChange(id, (0, _immer[\"default\"])(value, function (draft) {\n        draft.splice(value.indexOf(group) + 1, 0, clonedGroup);\n      }));\n      callback(clonedGroup);\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleRemoveGroup\", function (group) {\n      var _this$props3 = _this.props,\n        id = _this$props3.id,\n        value = _this$props3.value,\n        onChange = _this$props3.onChange;\n      onChange(id, (0, _lodash.without)(value, group), group.fields.map(function (groupField) {\n        return groupField.id;\n      }));\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleToggleGroup\", function (groupId) {\n      var _this$props4 = _this.props,\n        field = _this$props4.field,\n        value = _this$props4.value,\n        onChange = _this$props4.onChange;\n      onChange(field.id, (0, _immer[\"default\"])(value, function (draft) {\n        var group = (0, _lodash.find)(draft, ['id', groupId]);\n        group.collapsed = !group.collapsed;\n      }));\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleToggleAllGroups\", function (collapsed) {\n      var _this$props5 = _this.props,\n        field = _this$props5.field,\n        value = _this$props5.value,\n        onChange = _this$props5.onChange;\n      onChange(field.id, (0, _immer[\"default\"])(value, function (draft) {\n        draft.forEach(function (group) {\n          group.collapsed = collapsed;\n        });\n      }));\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleGroupSetup\", function (group, props) {\n      return (0, _lodash.assign)({}, props, {\n        id: group.id,\n        name: group.name,\n        prefix: \"\".concat(_this.props.name, \"[\").concat(props.index, \"]\"),\n        fields: group.fields,\n        collapsed: group.collapsed,\n        context: 'metabox'\n      });\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleGroupFieldSetup\", function (field, props, groupProps) {\n      return [_field[\"default\"], (0, _lodash.assign)({}, props, {\n        key: field.id,\n        id: field.id,\n        containerId: _this.props.containerId,\n        name: \"\".concat(groupProps.prefix, \"[\").concat(field.name, \"]\")\n      })];\n    });\n    return _this;\n  }\n  (0, _createClass2[\"default\"])(ComplexField, [{\n    key: \"render\",\n    value:\n    /**\n     * Renders the component.\n     *\n     * @return {Object}\n     */\n    function render() {\n      var handleGroupSetup = this.handleGroupSetup,\n        handleGroupFieldSetup = this.handleGroupFieldSetup,\n        handleAddGroup = this.handleAddGroup,\n        handleCloneGroup = this.handleCloneGroup,\n        handleRemoveGroup = this.handleRemoveGroup,\n        handleToggleGroup = this.handleToggleGroup,\n        handleToggleAllGroups = this.handleToggleAllGroups;\n      var _this$props6 = this.props,\n        value = _this$props6.value,\n        children = _this$props6.children;\n      var allGroupsAreCollapsed = value.every(function (_ref) {\n        var collapsed = _ref.collapsed;\n        return collapsed;\n      });\n      return children({\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        handleGroupSetup: handleGroupSetup,\n        handleGroupFieldSetup: handleGroupFieldSetup,\n        handleAddGroup: handleAddGroup,\n        handleCloneGroup: handleCloneGroup,\n        handleRemoveGroup: handleRemoveGroup,\n        handleToggleGroup: handleToggleGroup,\n        handleToggleAllGroups: handleToggleAllGroups\n      });\n    }\n  }]);\n  return ComplexField;\n}(_element.Component);\nvar applyWithSelect = (0, _data.withSelect)(function (select, props) {\n  var _select = select('carbon-fields/metaboxes'),\n    getComplexGroupValues = _select.getComplexGroupValues;\n  var groupValues = props.value.map(function (group) {\n    var fieldIds = group.fields.map(function (field) {\n      return field.id;\n    });\n    return [group.name, getComplexGroupValues(fieldIds)];\n  });\n  return {\n    groupValues: groupValues\n  };\n});\nvar applyWithDispatch = (0, _data.withDispatch)(function (dispatch) {\n  var _dispatch = dispatch('carbon-fields/metaboxes'),\n    addFields = _dispatch.addFields,\n    cloneFields = _dispatch.cloneFields;\n  return {\n    addFields: addFields,\n    cloneFields: cloneFields\n  };\n});\n(0, _hooks.addFilter)('carbon-fields.complex.metabox', 'carbon-fields/metaboxes', function (OriginalComplexField) {\n  return (0, _compose.compose)(applyWithSelect, applyWithDispatch)(function (props) {\n    var id = props.id,\n      field = props.field,\n      name = props.name,\n      value = props.value,\n      groupValues = props.groupValues;\n    return __webpack_provided_wp_dot_element.createElement(ComplexField, props, function (_ref2) {\n      var allGroupsAreCollapsed = _ref2.allGroupsAreCollapsed,\n        handleGroupSetup = _ref2.handleGroupSetup,\n        handleGroupFieldSetup = _ref2.handleGroupFieldSetup,\n        handleAddGroup = _ref2.handleAddGroup,\n        handleCloneGroup = _ref2.handleCloneGroup,\n        handleRemoveGroup = _ref2.handleRemoveGroup,\n        handleToggleGroup = _ref2.handleToggleGroup,\n        handleToggleAllGroups = _ref2.handleToggleAllGroups;\n      return __webpack_provided_wp_dot_element.createElement(OriginalComplexField, {\n        groupIdKey: \"id\",\n        groupFilterKey: \"name\",\n        id: id,\n        field: field,\n        name: name,\n        value: value,\n        groupValues: groupValues,\n        allGroupsAreCollapsed: allGroupsAreCollapsed,\n        onGroupSetup: handleGroupSetup,\n        onGroupFieldSetup: handleGroupFieldSetup,\n        onAddGroup: handleAddGroup,\n        onCloneGroup: handleCloneGroup,\n        onRemoveGroup: handleRemoveGroup,\n        onToggleGroup: handleToggleGroup,\n        onToggleAllGroups: handleToggleAllGroups,\n        onChange: props.onChange\n      });\n    });\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/complex/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/complex/style.scss":
/*!******************************************************!*\
  !*** ./packages/metaboxes/fields/complex/style.scss ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/complex/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/datetime/index.js":
/*!*****************************************************!*\
  !*** ./packages/metaboxes/fields/datetime/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/**\n * External dependencies.\n */\n\n(0, _hooks.addFilter)('carbon-fields.date_time.metabox', 'carbon-fields/metaboxes', function (OriginalDatetimeField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalDatetimeField, (0, _extends2[\"default\"])({\n      buttonText: (0, _i18n.__)('Select Date', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/datetime/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/file/index.js":
/*!*************************************************!*\
  !*** ./packages/metaboxes/fields/file/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/**\n * External dependencies.\n */\n\n(0, _hooks.addFilter)('carbon-fields.file.metabox', 'carbon-fields/metaboxes', function (OriginalFileField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalFileField, (0, _extends2[\"default\"])({\n      buttonLabel: (0, _i18n.__)('Select File', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: (0, _i18n.__)('Use File', 'carbon-fields-ui'),\n      mediaLibraryTitle: (0, _i18n.__)('Select File', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/file/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/image/index.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/fields/image/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/**\n * External dependencies.\n */\n\n(0, _hooks.addFilter)('carbon-fields.image.metabox', 'carbon-fields/metaboxes', function (OriginalImageField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalImageField, (0, _extends2[\"default\"])({\n      buttonLabel: (0, _i18n.__)('Select Image', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: (0, _i18n.__)('Use Image', 'carbon-fields-ui'),\n      mediaLibraryTitle: (0, _i18n.__)('Select Image', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/image/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/index.js":
/*!********************************************!*\
  !*** ./packages/metaboxes/fields/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\nvar _withField = _interopRequireDefault(__webpack_require__(/*! ../hocs/with-field */ \"./packages/metaboxes/hocs/with-field/index.js\"));\nvar _withConditionalLogic = _interopRequireDefault(__webpack_require__(/*! ../hocs/with-conditional-logic */ \"./packages/metaboxes/hocs/with-conditional-logic/index.js\"));\nvar _isGutenberg = _interopRequireDefault(__webpack_require__(/*! ../utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\"));\n__webpack_require__(/*! ./association */ \"./packages/metaboxes/fields/association/index.js\");\n__webpack_require__(/*! ./complex */ \"./packages/metaboxes/fields/complex/index.js\");\n__webpack_require__(/*! ./datetime */ \"./packages/metaboxes/fields/datetime/index.js\");\n__webpack_require__(/*! ./file */ \"./packages/metaboxes/fields/file/index.js\");\n__webpack_require__(/*! ./image */ \"./packages/metaboxes/fields/image/index.js\");\n__webpack_require__(/*! ./multiselect */ \"./packages/metaboxes/fields/multiselect/index.js\");\n__webpack_require__(/*! ./media-gallery */ \"./packages/metaboxes/fields/media-gallery/index.js\");\n__webpack_require__(/*! ./radio */ \"./packages/metaboxes/fields/radio/index.js\");\n__webpack_require__(/*! ./sidebar */ \"./packages/metaboxes/fields/sidebar/index.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Connects every field to the store.\n */\n(0, _hooks.addFilter)('carbon-fields.field-edit.metabox', 'carbon-fields/metaboxes', (0, _compose.compose)(_withField[\"default\"], _withConditionalLogic[\"default\"], (0, _data.withDispatch)(function (dispatch) {\n  if ((0, _isGutenberg[\"default\"])()) {\n    var _dispatch = dispatch('core/editor'),\n      lockPostSaving = _dispatch.lockPostSaving,\n      unlockPostSaving = _dispatch.unlockPostSaving;\n    return {\n      lockSaving: lockPostSaving,\n      unlockSaving: unlockPostSaving\n    };\n  }\n  var _dispatch2 = dispatch('carbon-fields/metaboxes'),\n    lockSaving = _dispatch2.lockSaving,\n    unlockSaving = _dispatch2.unlockSaving;\n  return {\n    lockSaving: lockSaving,\n    unlockSaving: unlockSaving\n  };\n}), _core.withValidation));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/media-gallery/index.js":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/fields/media-gallery/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/media-gallery/style.scss\");\n/**\n * External dependencies.\n */\n\n/**\n * The internal dependencies.\n */\n\n(0, _hooks.addFilter)('carbon-fields.media_gallery.metabox', 'carbon-fields/metaboxes', function (OriginalMediaGalleryField) {\n  return function (props) {\n    return __webpack_provided_wp_dot_element.createElement(OriginalMediaGalleryField, (0, _extends2[\"default\"])({\n      buttonLabel: (0, _i18n.__)('Select Attachments', 'carbon-fields-ui'),\n      mediaLibraryButtonLabel: (0, _i18n.__)('Use Attachments', 'carbon-fields-ui'),\n      mediaLibraryTitle: (0, _i18n.__)('Select Attachments', 'carbon-fields-ui')\n    }, props));\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/media-gallery/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/media-gallery/style.scss":
/*!************************************************************!*\
  !*** ./packages/metaboxes/fields/media-gallery/style.scss ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/media-gallery/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/multiselect/index.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/fields/multiselect/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/multiselect/style.scss\");\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/multiselect/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/multiselect/style.scss":
/*!**********************************************************!*\
  !*** ./packages/metaboxes/fields/multiselect/style.scss ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/multiselect/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/radio/index.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/fields/radio/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.scss */ \"./packages/metaboxes/fields/radio/style.scss\");\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/radio/index.js?");

/***/ }),

/***/ "./packages/metaboxes/fields/radio/style.scss":
/*!****************************************************!*\
  !*** ./packages/metaboxes/fields/radio/style.scss ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/radio/style.scss?");

/***/ }),

/***/ "./packages/metaboxes/fields/sidebar/index.js":
/*!****************************************************!*\
  !*** ./packages/metaboxes/fields/sidebar/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/**\n * External dependencies.\n */\n\n(0, _hooks.addFilter)('carbon-fields.sidebar.metabox', 'carbon-fields/metaboxes', (0, _data.withDispatch)(function (dispatch) {\n  var _dispatch = dispatch('carbon-fields/metaboxes'),\n    receiveSidebar = _dispatch.receiveSidebar;\n  return {\n    onAdded: receiveSidebar\n  };\n}));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/fields/sidebar/index.js?");

/***/ }),

/***/ "./packages/metaboxes/hocs/with-conditional-logic/index.js":
/*!*****************************************************************!*\
  !*** ./packages/metaboxes/hocs/with-conditional-logic/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\nvar _callbagOf = _interopRequireDefault(__webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.cjs.js\"));\nvar _callbagTakeUntil = _interopRequireDefault(__webpack_require__(/*! callbag-take-until */ \"./node_modules/callbag-take-until/index.cjs.js\"));\nvar _callbagDistinctUntilChanged = _interopRequireDefault(__webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js\"));\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Returns all root fields from the given holder\n * while excluding some of them.\n *\n * @param  {Object}   fieldsHolder\n * @param  {Object}   allFields\n * @param  {string[]} excludedIds\n * @return {Object[]}\n */\nfunction getFieldsFromFieldsHolder(fieldsHolder, allFields) {\n  var excludedIds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  if (typeof fieldsHolder === 'undefined') {\n    return [];\n  }\n  return (0, _lodash.pick)(allFields, (0, _lodash.difference)((0, _lodash.map)(fieldsHolder.fields, 'id'), excludedIds));\n}\n\n/**\n * Adds the `parent.` parent prefix to field's name.\n *\n * @param  {Object[]} fields\n * @param  {number}   depth\n * @return {Array[]}\n */\nfunction mapParentPrefix(fields) {\n  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return (0, _lodash.map)(fields, function (field) {\n    return [field.id, \"\".concat((0, _lodash.repeat)('parent.', depth)).concat(field.base_name)];\n  });\n}\n\n/**\n * The function used to track dependencies required\n * by conditional logic.\n *\n * @param  {Object} props\n * @param  {Object} component\n * @return {Object}\n */\nfunction input(props, component) {\n  var _select = (0, _data.select)('carbon-fields/metaboxes'),\n    getFieldsByContainerId = _select.getFieldsByContainerId;\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.merge)((0, _callbagOf[\"default\"])(getFieldsByContainerId(props.containerId)), (0, _core.fromSelector)(getFieldsByContainerId, props.containerId)), (0, _callbagTakeUntil[\"default\"])(component.unmount), (0, _callbagDistinctUntilChanged[\"default\"])(_lodash.isEqual));\n}\n\n/**\n * The function that provides the data that needs to be\n * evaluated by conditional logic.\n *\n * @param  {Object} props\n * @param  {Object} fields\n * @return {Object}\n */\nfunction output(props, fields) {\n  fields = (0, _lodash.keyBy)(fields, 'id');\n  var container = (0, _data.select)('carbon-fields/metaboxes').getContainerById(props.containerId);\n  var isTopLevelField = (0, _lodash.some)(container.fields, ['id', props.id]);\n  var siblingFields = [];\n  if (isTopLevelField) {\n    siblingFields = getFieldsFromFieldsHolder(container, fields, [props.id]);\n    siblingFields = mapParentPrefix(siblingFields);\n  } else {\n    var fieldName = props.name.replace(new RegExp(\"^\".concat(window.cf.config.compactInputKey, \"\\\\[(.+?)\\\\]\")), '$1');\n\n    // Get the root field.\n    var rootField = (0, _lodash.find)(fields, function (field) {\n      return field.container_id === props.containerId && (0, _lodash.startsWith)(fieldName, field.name);\n    });\n\n    // Get the hierarchy.\n    var path = fieldName.split(/\\[|\\]/g);\n\n    // Remove the chunk with name of root field\n    // because we already have it.\n    path.shift();\n\n    // Remove any chunks that don't have a value.\n    path = path.filter(function (chunk) {\n      return chunk !== '';\n    });\n\n    // Remove the chunk with name of field\n    // because we don't needed it.\n    path.pop();\n\n    // Keep reference to the depth\n    // so we can add the `parent.` prefix.\n    var depth = path.reduce(function (accumulator, chunk) {\n      return isNaN(chunk) ? accumulator + 1 : accumulator;\n    }, 0);\n\n    // Collect fields that are siblings of root field.\n    siblingFields = getFieldsFromFieldsHolder(container, fields, [rootField.id]);\n    siblingFields = mapParentPrefix(siblingFields, depth + 1);\n\n    // Keep reference to the full path of the field.\n    var pathPrefix = \"\".concat(rootField.id, \".value\");\n    while (path.length > 0) {\n      var chunk = path.shift();\n      var isGroup = !isNaN(chunk);\n      var isNestedComplex = !isGroup;\n      if (isGroup) {\n        pathPrefix = \"\".concat(pathPrefix, \"[\").concat(chunk, \"]\");\n        var group = (0, _lodash.get)(fields, pathPrefix);\n        var groupFields = getFieldsFromFieldsHolder(group, fields, [props.id]);\n        siblingFields = siblingFields.concat(mapParentPrefix(groupFields, depth));\n        pathPrefix = \"\".concat(pathPrefix, \".fields\");\n      }\n      if (isNestedComplex) {\n        var groupField = (0, _lodash.find)((0, _lodash.get)(fields, pathPrefix), ['name', chunk]);\n        pathPrefix = \"\".concat(groupField.id, \".value\");\n        depth--;\n      }\n    }\n  }\n  siblingFields = siblingFields.map(function (_ref) {\n    var _ref2 = (0, _slicedToArray2[\"default\"])(_ref, 2),\n      id = _ref2[0],\n      name = _ref2[1];\n    return [name, (0, _lodash.get)(fields, \"\".concat(id, \".value\"))];\n  });\n  return (0, _lodash.fromPairs)(siblingFields);\n}\nvar _default = (0, _core.withConditionalLogic)(input, output);\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/hocs/with-conditional-logic/index.js?");

/***/ }),

/***/ "./packages/metaboxes/hocs/with-container/index.js":
/*!*********************************************************!*\
  !*** ./packages/metaboxes/hocs/with-container/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/**\n * External dependencies.\n */\n/**\n * Creates a high-order component which adds connection\n * to the store.\n *\n * @param  {Function} Component\n * @return {Function}\n */\nvar _default = (0, _compose.createHigherOrderComponent)(function (Component) {\n  var applyWithSelect = (0, _data.withSelect)(function (select, _ref) {\n    var id = _ref.id;\n    var container = select('carbon-fields/metaboxes').getContainerById(id);\n    return {\n      container: container\n    };\n  });\n  return applyWithSelect(Component);\n}, 'withContainer');\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/hocs/with-container/index.js?");

/***/ }),

/***/ "./packages/metaboxes/hocs/with-field/index.js":
/*!*****************************************************!*\
  !*** ./packages/metaboxes/hocs/with-field/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/**\n * External dependencies.\n */\n/**\n * Creates a high-order component which adds connection\n * to the store.\n *\n * @param  {Function} Component\n * @return {Function}\n */\nvar _default = (0, _compose.createHigherOrderComponent)(function (Component) {\n  var applyWithSelect = (0, _data.withSelect)(function (select, props) {\n    var _window$cf$config = window.cf.config,\n      compactInput = _window$cf$config.compactInput,\n      compactInputKey = _window$cf$config.compactInputKey;\n    var field = select('carbon-fields/metaboxes').getFieldById(props.id);\n    var value = field && field.value;\n    var name = props.name || field.name;\n\n    /**\n     * Wrap top-level field names in compact input key.\n     *\n     * The fields in widgets don't need this prefix because\n     * their input is already compacted by the `widget` namespace.\n     */\n    if (compactInput && !props.name && name.indexOf('widget-carbon_fields') === -1) {\n      name = \"\".concat(compactInputKey, \"[\").concat(name, \"]\");\n    }\n    return {\n      field: field,\n      name: name,\n      value: value\n    };\n  });\n  var applyWithDispatch = (0, _data.withDispatch)(function (dispatch) {\n    var _dispatch = dispatch('carbon-fields/metaboxes'),\n      updateFieldValue = _dispatch.updateFieldValue;\n    return {\n      onChange: updateFieldValue\n    };\n  });\n  return (0, _compose.compose)(applyWithSelect, applyWithDispatch)(Component);\n}, 'withField');\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/hocs/with-field/index.js?");

/***/ }),

/***/ "./packages/metaboxes/index.js":
/*!*************************************!*\
  !*** ./packages/metaboxes/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"getContainerType\", {\n  enumerable: true,\n  get: function get() {\n    return _registry.getContainerType;\n  }\n});\nObject.defineProperty(exports, \"registerContainerType\", {\n  enumerable: true,\n  get: function get() {\n    return _registry.registerContainerType;\n  }\n});\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n__webpack_require__(/*! ./store */ \"./packages/metaboxes/store/index.js\");\n__webpack_require__(/*! ./fields */ \"./packages/metaboxes/fields/index.js\");\nvar _monitors = _interopRequireDefault(__webpack_require__(/*! ./monitors */ \"./packages/metaboxes/monitors/index.js\"));\nvar _containers = _interopRequireDefault(__webpack_require__(/*! ./containers */ \"./packages/metaboxes/containers/index.js\"));\nvar _isGutenberg = _interopRequireDefault(__webpack_require__(/*! ./utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\"));\nvar _registry = __webpack_require__(/*! ./containers/registry */ \"./packages/metaboxes/containers/registry.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Public API.\n */\n\n/**\n * Sets the locale data for the package type\n */\n(0, _i18n.setLocaleData)(window.cf.config.locale, 'carbon-fields-ui');\n\n/**\n * Determines the rendering context.\n *\n * @type {string}\n */\nvar context = (0, _isGutenberg[\"default\"])() ? 'gutenberg' : 'classic';\n\n/**\n * Abracadabra! Poof! Containers everywhere ...\n */\n(0, _hooks.addAction)('carbon-fields.init', 'carbon-fields/metaboxes', function () {\n  (0, _containers[\"default\"])(context);\n  (0, _monitors[\"default\"])(context);\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/index.js?");

/***/ }),

/***/ "./packages/metaboxes/lib/constants.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/lib/constants.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PAGE_NOW_WIDGETS = exports.PAGE_NOW_CUSTOMIZE = exports.CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX = exports.CARBON_FIELDS_CONTAINER_ID_PREFIX = void 0;\nvar PAGE_NOW_WIDGETS = 'widgets.php';\nexports.PAGE_NOW_WIDGETS = PAGE_NOW_WIDGETS;\nvar PAGE_NOW_CUSTOMIZE = 'customize.php';\nexports.PAGE_NOW_CUSTOMIZE = PAGE_NOW_CUSTOMIZE;\nvar CARBON_FIELDS_CONTAINER_ID_PREFIX = 'carbon_fields_container_';\nexports.CARBON_FIELDS_CONTAINER_ID_PREFIX = CARBON_FIELDS_CONTAINER_ID_PREFIX;\nvar CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX = 'carbon_fields_';\nexports.CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX = CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/lib/constants.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/index.js":
/*!***************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = aperture;\nvar _immer = _interopRequireDefault(__webpack_require__(/*! immer */ \"immer\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n__webpack_require__(/*! ./post-parent */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js\");\n__webpack_require__(/*! ./post-format */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-format.js\");\n__webpack_require__(/*! ./post-template */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-template.js\");\n__webpack_require__(/*! ./post-term */ \"./packages/metaboxes/monitors/conditional-display/aperture/post-term.js\");\n__webpack_require__(/*! ./term-parent */ \"./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js\");\n__webpack_require__(/*! ./user-role */ \"./packages/metaboxes/monitors/conditional-display/aperture/user-role.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * The function that controls the stream of side effects.\n *\n * @param  {Object} props\n * @param  {string} props.context\n * @return {Object}\n */\n// eslint-disable-next-line no-unused-vars\nfunction aperture(component, _ref) {\n  var context = _ref.context;\n  var postParent$ = (0, _hooks.applyFilters)(\"carbon-fields.conditional-display-post-parent.\".concat(context));\n  var postFormat$ = (0, _hooks.applyFilters)(\"carbon-fields.conditional-display-post-format.\".concat(context));\n  var postTemplate$ = (0, _hooks.applyFilters)(\"carbon-fields.conditional-display-post-template.\".concat(context));\n  var postTerm$ = (0, _hooks.applyFilters)(\"carbon-fields.conditional-display-post-term.\".concat(context));\n  var termParent$ = (0, _hooks.applyFilters)(\"carbon-fields.conditional-display-term-parent.\".concat(context));\n  var userRole$ = (0, _hooks.applyFilters)(\"carbon-fields.conditional-display-user-role.\".concat(context));\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.merge)(postParent$, postFormat$, postTemplate$, postTerm$, termParent$, userRole$), (0, _callbagBasics.scan)(function (previous, current) {\n    return (0, _immer[\"default\"])(previous, function (draft) {\n      (0, _lodash.assign)(draft, current);\n    });\n  }));\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-format.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-format.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _callbagOf = _interopRequireDefault(__webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.cjs.js\"));\nvar _callbagStartWith = _interopRequireDefault(__webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.cjs.js\"));\nvar _callbagFromDelegatedEvent = _interopRequireDefault(__webpack_require__(/*! callbag-from-delegated-event */ \"callbag-from-delegated-event\"));\nvar _callbagDistinctUntilChanged = _interopRequireDefault(__webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * The default state.\n *\n * @type {Object}\n */\nvar INITIAL_STATE = {\n  post_format: 'standard'\n};\n\n/**\n * Extracts `post_format` from the input.\n *\n * @param  {Object} input\n * @return {Object}\n */\nfunction getPostFormatFromRadioInput(input) {\n  var value = input.value;\n\n  // Normalize the value of \"Standard\" input.\n  if (value === '0') {\n    value = 'standard';\n  }\n  return {\n    post_format: value\n  };\n}\n\n/**\n * Defines the side effects for Classic Editor.\n */\n(0, _hooks.addFilter)('carbon-fields.conditional-display-post-format.classic', 'carbon-fields/metaboxes', function () {\n  var node = document.querySelector('div#post-formats-select');\n  if (!node) {\n    return (0, _callbagOf[\"default\"])(INITIAL_STATE);\n  }\n  return (0, _callbagBasics.pipe)((0, _callbagFromDelegatedEvent[\"default\"])(node, 'input.post-format', 'change'), (0, _callbagBasics.map)(function (_ref) {\n    var target = _ref.target;\n    return getPostFormatFromRadioInput(target);\n  }), (0, _callbagStartWith[\"default\"])(getPostFormatFromRadioInput(node.querySelector('input.post-format:checked'))));\n});\n\n/**\n * Defines the side effects for Gutenberg.\n */\n(0, _hooks.addFilter)('carbon-fields.conditional-display-post-format.gutenberg', 'carbon-fields/metaboxes', function () {\n  return (0, _callbagBasics.pipe)((0, _core.fromSelector)((0, _data.select)('core/editor').getEditedPostAttribute, 'format'), (0, _callbagDistinctUntilChanged[\"default\"])(), (0, _callbagBasics.filter)(Boolean), (0, _callbagBasics.map)(function (postFormat) {\n    return {\n      post_format: postFormat\n    };\n  }), (0, _callbagStartWith[\"default\"])(INITIAL_STATE));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-format.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\nvar _callbagOf = _interopRequireDefault(__webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.cjs.js\"));\nvar _callbagStartWith = _interopRequireDefault(__webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.cjs.js\"));\nvar _callbagDistinctUntilChanged = _interopRequireDefault(__webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\nvar _getParentIdFromOption = _interopRequireDefault(__webpack_require__(/*! ../utils/get-parent-id-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js\"));\nvar _getLevelFromOption = _interopRequireDefault(__webpack_require__(/*! ../utils/get-level-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js\"));\nvar _getAncestorsFromOption = _interopRequireDefault(__webpack_require__(/*! ../utils/get-ancestors-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * The default state.\n *\n * @type {Object}\n */\nvar INITIAL_STATE = {\n  post_ancestors: [],\n  post_parent_id: 0,\n  post_level: 1\n};\n\n/**\n * Extracts the `post_ancestors`, `post_parent_id` & `post_level` from the select.\n *\n * @param  {Object} node\n * @return {Object}\n */\nfunction getParentIdAncestorsAndLevelFromSelect(node) {\n  var option = node.options[node.selectedIndex];\n  var ancestors = (0, _getAncestorsFromOption[\"default\"])(option);\n  var parentId = (0, _getParentIdFromOption[\"default\"])(option);\n  var level = (0, _getLevelFromOption[\"default\"])(option) + 1;\n  return {\n    post_ancestors: ancestors,\n    post_parent_id: parentId,\n    post_level: level\n  };\n}\n\n/**\n * Extracts `post_ancestors` from the list.\n *\n * @param  {number}   parentId\n * @param  {Object[]} posts\n * @param  {Array}    ancestors\n * @return {number[]}\n */\nfunction getAncestorsFromPostsList(parentId, posts) {\n  var ancestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var parent = (0, _lodash.find)(posts, [\"id\", parentId]);\n  if (!parent) {\n    return ancestors;\n  }\n  ancestors.unshift(parent.id);\n  if (parent.parent) {\n    return getAncestorsFromPostsList(parent.parent, posts, ancestors);\n  }\n  return ancestors;\n}\n\n/**\n * Defines the side effects for Classic Editor.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-post-parent.classic\", \"carbon-fields/metaboxes\", function () {\n  var node = document.querySelector(\"select#parent_id\");\n  if (!node) {\n    return (0, _callbagOf[\"default\"])(INITIAL_STATE);\n  }\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, \"change\"), (0, _callbagBasics.map)(function (_ref) {\n    var target = _ref.target;\n    return getParentIdAncestorsAndLevelFromSelect(target);\n  }), (0, _callbagStartWith[\"default\"])(getParentIdAncestorsAndLevelFromSelect(node)));\n});\n\n/**\n * Defines the side effects for Gutenberg.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-post-parent.gutenberg\", \"carbon-fields/metaboxes\", function () {\n  var _select = (0, _data.select)(\"core\"),\n    getPostType = _select.getPostType,\n    getEntityRecords = _select.getEntityRecords;\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.combine)((0, _core.fromSelector)((0, _data.select)(\"core/editor\").getCurrentPostId), (0, _core.fromSelector)((0, _data.select)(\"core/editor\").getEditedPostAttribute, \"type\"), (0, _core.fromSelector)((0, _data.select)(\"core/editor\").getEditedPostAttribute, \"parent\")), (0, _callbagDistinctUntilChanged[\"default\"])(_lodash.isEqual), (0, _callbagBasics.map)(function (_ref2) {\n    var _ref3 = (0, _slicedToArray2[\"default\"])(_ref2, 3),\n      postId = _ref3[0],\n      postTypeSlug = _ref3[1],\n      parentId = _ref3[2];\n    parentId = parseInt(parentId, 10);\n    if (isNaN(parentId)) {\n      return INITIAL_STATE;\n    }\n    var postType = getPostType(postTypeSlug);\n    var isHierarchical = (0, _lodash.get)(postType, [\"hierarchical\"], false);\n    if (!isHierarchical) {\n      return INITIAL_STATE;\n    }\n\n    // Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/page-attributes/parent.js\n    var items = getEntityRecords(\"postType\", postTypeSlug, {\n      per_page: -1,\n      exclude: postId,\n      parent_exclude: postId,\n      orderby: \"menu_order\",\n      order: \"asc\"\n    }) || [];\n    var ancestors = getAncestorsFromPostsList(parentId, items);\n    var level = ancestors.length + 1;\n    return {\n      post_ancestors: ancestors,\n      post_parent_id: parentId,\n      post_level: level\n    };\n  }));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-parent.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-template.js":
/*!***********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-template.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _callbagOf = _interopRequireDefault(__webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.cjs.js\"));\nvar _callbagStartWith = _interopRequireDefault(__webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.cjs.js\"));\nvar _callbagDistinctUntilChanged = _interopRequireDefault(__webpack_require__(/*! callbag-distinct-until-changed */ \"./node_modules/callbag-distinct-until-changed/dist/callbag-distinct-until-changed.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * The default state.\n *\n * @type {Object}\n */\nvar INITIAL_STATE = {\n  post_template: \"\"\n};\n\n/**\n * Extracts `post_template` from the select.\n *\n * @param  {Object} node\n * @return {Object}\n */\nfunction getPostTemplateFromSelect(node) {\n  var value = node.value;\n\n  // In Gutenberg for the \"Default\" template is used an empty string.\n  if (value === \"default\") {\n    value = \"\";\n  }\n  return {\n    post_template: value\n  };\n}\n\n/**\n * Defines the side effects for Classic Editor.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-post-template.classic\", \"carbon-fields/metaboxes\", function () {\n  var node = document.querySelector(\"select#page_template\");\n  if (!node) {\n    return (0, _callbagOf[\"default\"])(INITIAL_STATE);\n  }\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, \"change\"), (0, _callbagBasics.map)(function (_ref) {\n    var target = _ref.target;\n    return getPostTemplateFromSelect(target);\n  }), (0, _callbagStartWith[\"default\"])(getPostTemplateFromSelect(node)));\n});\n\n/**\n * Defines the side effects for Gutenberg.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-post-template.gutenberg\", \"carbon-fields/metaboxes\", function () {\n  return (0, _callbagBasics.pipe)((0, _core.fromSelector)((0, _data.select)(\"core/editor\").getEditedPostAttribute, \"template\"), (0, _callbagDistinctUntilChanged[\"default\"])(), (0, _callbagBasics.filter)(_lodash.isString), (0, _callbagBasics.map)(function (postTemplate) {\n    return {\n      post_template: postTemplate\n    };\n  }), (0, _callbagStartWith[\"default\"])(INITIAL_STATE));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-template.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/post-term.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/post-term.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\"));\nvar _immer = _interopRequireDefault(__webpack_require__(/*! immer */ \"immer\"));\nvar _callbagStartWith = _interopRequireDefault(__webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.cjs.js\"));\nvar _callbagFromDelegatedEvent = _interopRequireDefault(__webpack_require__(/*! callbag-from-delegated-event */ \"callbag-from-delegated-event\"));\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar TAGS_DELIMITER = \",\";\n\n/**\n * Applies a monkey patch to the specified method of `window.tagBox` API\n * so we can detect changes of the non-hierarchical taxonomies.\n *\n * @param  {Object} tagBox\n * @param  {string} method\n * @return {void}\n */\nfunction patchWordPressTagBoxAPI(tagBox, method) {\n  tagBox[\"original_\".concat(method)] = tagBox[method];\n  tagBox[method] = function () {\n    var event = new Event(\"change\");\n    var textarea = window.jQuery(arguments.length <= 0 ? undefined : arguments[0]).closest(\".postbox\").find(\"textarea.the-tags\").get(0);\n    var result = tagBox[\"original_\".concat(method)].apply(tagBox, arguments);\n    textarea.dispatchEvent(event);\n    return result;\n  };\n}\nif (window.tagBox) {\n  patchWordPressTagBoxAPI(window.tagBox, \"parseTags\");\n  patchWordPressTagBoxAPI(window.tagBox, \"flushTags\");\n}\n\n/**\n * Extracts the terms of a hierarchical taxonomy.\n *\n * @param  {string} taxonomy\n * @return {Object}\n */\nfunction getTermsFromChecklist(taxonomy) {\n  var inputs = document.querySelectorAll(\"#\".concat(taxonomy, \"checklist input[type=\\\"checkbox\\\"]:checked\"));\n  return (0, _toConsumableArray2[\"default\"])(inputs).reduce(function (memo, input) {\n    var value = parseInt(input.value, 10);\n    memo[taxonomy].push(value);\n    return memo;\n  }, (0, _defineProperty2[\"default\"])({}, taxonomy, []));\n}\n\n/**\n * Extracts the terms of a non-hierarchical taxonomy.\n *\n * @param  {string} taxonomy\n * @return {Object}\n */\nfunction getTermsFromText(taxonomy) {\n  var node = document.querySelector(\"#tagsdiv-\".concat(taxonomy, \" textarea.the-tags\"));\n  var terms = node.value ? node.value.split(TAGS_DELIMITER) : [];\n  return (0, _defineProperty2[\"default\"])({}, taxonomy, terms);\n}\n\n/**\n * Keeps track of the hierarchical taxonomies like `categories`.\n *\n * @return {Function}\n */\nfunction trackHierarchicalTaxonomies() {\n  var nodes = document.querySelectorAll('div[id^=\"taxonomy-\"]');\n  return (0, _toConsumableArray2[\"default\"])(nodes).map(function (node) {\n    var taxonomy = node.id.replace(\"taxonomy-\", \"\");\n    return (0, _callbagBasics.pipe)((0, _callbagFromDelegatedEvent[\"default\"])(node.querySelector(\"#\".concat(taxonomy, \"checklist\")), 'input[type=\"checkbox\"]', \"change\"), (0, _callbagBasics.scan)(function (stack, _ref2) {\n      var target = _ref2.target;\n      return (0, _immer[\"default\"])(stack, function (draft) {\n        var value = parseInt(target.value, 10);\n        if (target.checked) {\n          draft[taxonomy].push(value);\n        } else {\n          (0, _lodash.pull)(draft[taxonomy], value);\n        }\n      });\n    }, (0, _defineProperty2[\"default\"])({}, taxonomy, [])), (0, _callbagStartWith[\"default\"])(getTermsFromChecklist(taxonomy)));\n  });\n}\n\n/**\n * Keeps track of the non-hierarchical taxonomies like `tags`.\n *\n * @return {Function}\n */\nfunction trackNonHierarchicalTaxonomies() {\n  var nodes = document.querySelectorAll('div[id^=\"tagsdiv-\"]');\n  return (0, _toConsumableArray2[\"default\"])(nodes).map(function (node) {\n    var taxonomy = node.id.replace(\"tagsdiv-\", \"\");\n    return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node.querySelector(\"textarea.the-tags\"), \"change\"), (0, _callbagBasics.map)(function (_ref3) {\n      var target = _ref3.target;\n      return (0, _defineProperty2[\"default\"])({}, taxonomy, target.value ? target.value.split(TAGS_DELIMITER) : []);\n    }), (0, _callbagStartWith[\"default\"])(getTermsFromText(taxonomy)));\n  });\n}\n\n/**\n * Defines the side effects for Classic Editor.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-post-term.classic\", \"carbon-fields/metaboxes\", function () {\n  return (0, _callbagBasics.pipe)(_callbagBasics.merge.apply(void 0, (0, _toConsumableArray2[\"default\"])(trackHierarchicalTaxonomies()).concat((0, _toConsumableArray2[\"default\"])(trackNonHierarchicalTaxonomies()))), (0, _callbagBasics.scan)(function (previous, current) {\n    return {\n      post_term: _objectSpread(_objectSpread({}, previous.post_term), current)\n    };\n  }, {\n    post_term: {}\n  }));\n});\n\n/**\n * Defines the side effects for Gutenberg.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-post-term.gutenberg\", \"carbon-fields/metaboxes\", function () {\n  var _select = (0, _data.select)(\"core\"),\n    getTaxonomies = _select.getTaxonomies;\n  var _select2 = (0, _data.select)(\"core/editor\"),\n    getEditedPostAttribute = _select2.getEditedPostAttribute;\n\n  // Borrowed from https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/post-taxonomies/index.js\n  return (0, _callbagBasics.pipe)((0, _core.fromSelector)(getTaxonomies, {\n    per_page: -1\n  }), (0, _callbagBasics.filter)(Boolean), (0, _callbagBasics.map)(function (taxonomies) {\n    var pairs = taxonomies.map(function (taxonomy) {\n      return [taxonomy.slug, getEditedPostAttribute(taxonomy.rest_base) || []];\n    });\n    return {\n      post_term: (0, _lodash.fromPairs)(pairs)\n    };\n  }));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/post-term.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _callbagOf = _interopRequireDefault(__webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.cjs.js\"));\nvar _callbagStartWith = _interopRequireDefault(__webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.cjs.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _getParentIdFromOption = _interopRequireDefault(__webpack_require__(/*! ../utils/get-parent-id-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js\"));\nvar _getLevelFromOption = _interopRequireDefault(__webpack_require__(/*! ../utils/get-level-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js\"));\nvar _getAncestorsFromOption = _interopRequireDefault(__webpack_require__(/*! ../utils/get-ancestors-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * The default state.\n *\n * @type {Object}\n */\nvar INITIAL_STATE = {\n  term_ancestors: [],\n  term_parent: 0,\n  term_level: 1\n};\n\n/**\n * Extracts the `term_ancestors`, `term_parent` & `term_level` from the select.\n *\n * @param  {Object} node\n * @return {Object}\n */\nfunction getParentIdAncestorsAndLevelFromSelect(node) {\n  var option = node.options[node.selectedIndex];\n  var ancestors = (0, _getAncestorsFromOption[\"default\"])(option);\n  var parentId = (0, _getParentIdFromOption[\"default\"])(option);\n  var level = (0, _getLevelFromOption[\"default\"])(option) + 1;\n  return {\n    term_ancestors: ancestors,\n    term_parent: parentId,\n    term_level: level\n  };\n}\n\n/**\n * Defines the side effects for Classic Editor.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-term-parent.classic\", \"carbon-fields/metaboxes\", function () {\n  var node = document.querySelector(\"select#parent\");\n  if (!node) {\n    return (0, _callbagOf[\"default\"])(INITIAL_STATE);\n  }\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, \"change\"), (0, _callbagBasics.map)(function (_ref) {\n    var target = _ref.target;\n    return getParentIdAncestorsAndLevelFromSelect(target);\n  }), (0, _callbagStartWith[\"default\"])(getParentIdAncestorsAndLevelFromSelect(node)));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/term-parent.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/aperture/user-role.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/aperture/user-role.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _callbagOf = _interopRequireDefault(__webpack_require__(/*! callbag-of */ \"./node_modules/callbag-of/dist/callbag-of.cjs.js\"));\nvar _callbagStartWith = _interopRequireDefault(__webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.cjs.js\"));\nvar _hooks = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\n/**\n * External dependencies.\n */\n\n/**\n * The default state.\n *\n * @type {Object}\n */\nvar INITIAL_STATE = {\n  user_role: \"\"\n};\n\n/**\n * Extracts `user_role` from a select.\n *\n * @param  {Object} node\n * @return {Object}\n */\nfunction getRoleFromSelect(node) {\n  return {\n    user_role: node.value\n  };\n}\n\n/**\n * Defines the side effects for Classic Editor.\n */\n(0, _hooks.addFilter)(\"carbon-fields.conditional-display-user-role.classic\", \"carbon-fields/metaboxes\", function () {\n  var node = document.querySelector(\"select#role\");\n  if (!node) {\n    var fieldset = document.querySelector(\"fieldset[data-profile-role]\");\n\n    // The selectbox doesn't exist on the \"Profile\" page.\n    // So we need to read the role from the container in DOM.\n    if (fieldset) {\n      return (0, _callbagOf[\"default\"])({\n        user_role: fieldset.dataset.profileRole\n      });\n    }\n    return (0, _callbagOf[\"default\"])(INITIAL_STATE);\n  }\n  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(node, \"change\"), (0, _callbagBasics.map)(function (_ref) {\n    var target = _ref.target;\n    return getRoleFromSelect(target);\n  }), (0, _callbagStartWith[\"default\"])(getRoleFromSelect(node)));\n});\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/aperture/user-role.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js":
/*!**********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  operators: ['IN', 'NOT IN'],\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case 'IN':\n        return (0, _lodash.intersection)(a, b).length > 0;\n      case 'NOT IN':\n        return (0, _lodash.intersection)(a, b).length === 0;\n      default:\n        return false;\n    }\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js":
/*!***********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  operators: ['=', '!='],\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case '=':\n        return (0, _lodash.includes)(a, b);\n      case '!=':\n        return !(0, _lodash.includes)(a, b);\n      default:\n        return false;\n    }\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/base.js":
/*!***************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/base.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  /**\n   * The supported operators.\n   *\n   * @type {string[]}\n   */\n  operators: [],\n  /**\n   * Checks if the operator is supported.\n   *\n   * @param  {string} operator\n   * @return {boolean}\n   */\n  isOperatorSupported: function isOperatorSupported(operator) {\n    return this.operators.indexOf(operator) > -1;\n  },\n  /**\n   * Performs the comparison.\n   *\n   * @param  {mixed}  a\n   * @param  {string} operator\n   * @param  {mixed}  b\n   * @return {boolean}\n   */\n  evaluate: function evaluate() {\n    return false;\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/base.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/contain.js":
/*!******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/contain.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  operators: ['IN', 'NOT IN'],\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case 'IN':\n        return b.indexOf(a) > -1;\n      case 'NOT IN':\n        return b.indexOf(a) === -1;\n      default:\n        return false;\n    }\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/contain.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/equality.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/equality.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  operators: ['=', '!='],\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case '=':\n        return a == b;\n      case '!=':\n        return a != b;\n      default:\n        return false;\n    }\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/equality.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/comparers/scalar.js":
/*!*****************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/comparers/scalar.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/comparers/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  operators: ['>', '>=', '<', '<='],\n  /**\n   * @inheritdoc\n   */\n  evaluate: function evaluate(a, operator, b) {\n    switch (operator) {\n      case '>':\n        return a > b;\n      case '>=':\n        return a >= b;\n      case '<':\n        return a < b;\n      case '<=':\n        return a <= b;\n      default:\n        return false;\n    }\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/comparers/scalar.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/base.js":
/*!****************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/base.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _equality = _interopRequireDefault(__webpack_require__(/*! ../comparers/equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/equality.js\"));\nvar _contain = _interopRequireDefault(__webpack_require__(/*! ../comparers/contain */ \"./packages/metaboxes/monitors/conditional-display/comparers/contain.js\"));\nvar _scalar = _interopRequireDefault(__webpack_require__(/*! ../comparers/scalar */ \"./packages/metaboxes/monitors/conditional-display/comparers/scalar.js\"));\n/**\n * External dependencies.\n */\n/**\n * Internal dependencies.\n */\nvar _default = {\n  /**\n   * The supported comparers.\n   *\n   * @type {Function[]}\n   */\n  comparers: [_equality[\"default\"], _contain[\"default\"], _scalar[\"default\"]],\n  /**\n   * Checks if the condition is fulfiled.\n   *\n   * @param  {Object} definition\n   * @param  {Object} values\n   * @return {boolean}\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var compare = definition.compare,\n      value = definition.value;\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  },\n  /**\n   * Checks if any comparer is correct for `a` and `b`.\n   *\n   * @param  {mixed}  a\n   * @param  {string} operator\n   * @param  {mixed}  b\n   * @return {boolean}\n   */\n  firstComparerIsCorrect: function firstComparerIsCorrect(a, operator, b) {\n    var comparer = (0, _lodash.find)(this.comparers, function (item) {\n      return item.isOperatorSupported(operator);\n    });\n    if (!comparer) {\n      // eslint-disable-next-line no-console\n      console.error((0, _i18n.sprintf)((0, _i18n.__)('Unsupported container condition comparison operator used - \"%1$s\".', 'carbon-fields-ui'), operator));\n      return false;\n    }\n    return comparer.evaluate(a, operator, b);\n  },\n  /**\n   * Returns the value from the environment.\n   *\n   * @param  {Object} definition\n   * @param  {Object} values\n   * @return {Object}\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return values[definition.type];\n  }\n};\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/base.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/boolean.js":
/*!*******************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/boolean.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue() {\n    return true;\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/boolean.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js":
/*!****************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _anyEquality = _interopRequireDefault(__webpack_require__(/*! ../comparers/any-equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js\"));\nvar _anyContain = _interopRequireDefault(__webpack_require__(/*! ../comparers/any-contain */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  comparers: [_anyEquality[\"default\"], _anyContain[\"default\"]],\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return (0, _lodash.get)(values, 'post_ancestors', []);\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/post-template.js":
/*!*************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/post-template.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    definition = _objectSpread({}, definition);\n\n    // In Gutenberg for the \"Default\" template is used an empty string.\n    if (definition.value === 'default') {\n      definition.value = '';\n    } else if ((0, _lodash.isArray)(definition.value)) {\n      var defaultIndex = definition.value.indexOf('default');\n      if (defaultIndex !== -1) {\n        definition.value[defaultIndex] = '';\n      }\n    }\n    return _base[\"default\"].isFulfiled(definition, values);\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/post-template.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/post-term.js":
/*!*********************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/post-term.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _anyEquality = _interopRequireDefault(__webpack_require__(/*! ../comparers/any-equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  comparers: [_anyEquality[\"default\"]],\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var _this = this;\n    var compare = definition.compare,\n      value = definition.value;\n    if ((0, _lodash.isArray)(value)) {\n      var method;\n      switch (compare) {\n        case 'IN':\n          compare = '=';\n          method = 'some';\n          break;\n        case 'NOT IN':\n          compare = '!=';\n          method = 'every';\n          break;\n        default:\n          return false;\n      }\n      var results = value.map(function (descriptor) {\n        return _this.isFulfiled(_objectSpread(_objectSpread({}, definition), {}, {\n          compare: compare,\n          value: descriptor\n        }), values);\n      });\n      return results[method](Boolean);\n    }\n\n    // TODO: Improve value resolution in context of Gutenberg\n    value = value.taxonomy_object.hierarchical ? value.term_object.term_id : value.term_object.name;\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  },\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return (0, _lodash.get)(values, \"post_term.\".concat(definition.value.taxonomy), []);\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/post-term.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js":
/*!****************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _anyEquality = _interopRequireDefault(__webpack_require__(/*! ../comparers/any-equality */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-equality.js\"));\nvar _anyContain = _interopRequireDefault(__webpack_require__(/*! ../comparers/any-contain */ \"./packages/metaboxes/monitors/conditional-display/comparers/any-contain.js\"));\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  comparers: [_anyEquality[\"default\"], _anyContain[\"default\"]],\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var compare = definition.compare;\n    var value = definition.value;\n    if ((0, _lodash.isArray)(value)) {\n      value = value.map(function (item) {\n        return item.term_object.term_id;\n      });\n    } else if ((0, _lodash.isPlainObject)(value)) {\n      value = value.term_object.term_id;\n    }\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  },\n  /**\n   * @inheritdoc\n   */\n  getEnvironmentValue: function getEnvironmentValue(definition, values) {\n    return (0, _lodash.get)(values, 'term_ancestors', []);\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js":
/*!**************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _base = _interopRequireDefault(__webpack_require__(/*! ./base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = _objectSpread(_objectSpread({}, _base[\"default\"]), {}, {\n  /**\n   * @inheritdoc\n   */\n  isFulfiled: function isFulfiled(definition, values) {\n    var compare = definition.compare;\n    var value = definition.value;\n    if ((0, _lodash.isArray)(value)) {\n      value = value.map(function (item) {\n        return item.term_object.term_id;\n      });\n    } else if ((0, _lodash.isPlainObject)(value)) {\n      value = value.term_object.term_id;\n    }\n    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);\n  }\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/handler/index.js":
/*!**************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/handler/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = handler;\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\nvar _i18n = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _containers = __webpack_require__(/*! ../../../containers */ \"./packages/metaboxes/containers/index.js\");\nvar _base = _interopRequireDefault(__webpack_require__(/*! ../conditions/base */ \"./packages/metaboxes/monitors/conditional-display/conditions/base.js\"));\nvar _boolean2 = _interopRequireDefault(__webpack_require__(/*! ../conditions/boolean */ \"./packages/metaboxes/monitors/conditional-display/conditions/boolean.js\"));\nvar _postTerm = _interopRequireDefault(__webpack_require__(/*! ../conditions/post-term */ \"./packages/metaboxes/monitors/conditional-display/conditions/post-term.js\"));\nvar _postTemplate = _interopRequireDefault(__webpack_require__(/*! ../conditions/post-template */ \"./packages/metaboxes/monitors/conditional-display/conditions/post-template.js\"));\nvar _postAncestorId = _interopRequireDefault(__webpack_require__(/*! ../conditions/post-ancestor-id */ \"./packages/metaboxes/monitors/conditional-display/conditions/post-ancestor-id.js\"));\nvar _termParentId = _interopRequireDefault(__webpack_require__(/*! ../conditions/term-parent-id */ \"./packages/metaboxes/monitors/conditional-display/conditions/term-parent-id.js\"));\nvar _termAncestorId = _interopRequireDefault(__webpack_require__(/*! ../conditions/term-ancestor-id */ \"./packages/metaboxes/monitors/conditional-display/conditions/term-ancestor-id.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Keeps track of supported conditions.\n *\n * @type {Object}\n */\nvar conditions = {\n  \"boolean\": _boolean2[\"default\"],\n  post_term: _postTerm[\"default\"],\n  post_ancestor_id: _postAncestorId[\"default\"],\n  post_parent_id: _base[\"default\"],\n  post_level: _base[\"default\"],\n  post_format: _base[\"default\"],\n  post_template: _postTemplate[\"default\"],\n  term_level: _base[\"default\"],\n  term_parent: _termParentId[\"default\"],\n  term_ancestor: _termAncestorId[\"default\"],\n  user_role: _base[\"default\"]\n};\n\n/**\n * Walks through the definitions and evaluates the conditions.\n *\n * @param  {Object[]} definitions\n * @param  {Object}   values\n * @param  {string}   relation\n * @return {boolean}\n */\nfunction evaluate(definitions, values, relation) {\n  var results = definitions.map(function (definition) {\n    if (!definition.relation) {\n      var condition = (0, _lodash.get)(conditions, definition.type);\n      if (condition) {\n        return condition.isFulfiled(definition, values);\n      } else {\n        // eslint-disable-line no-else-return\n        // eslint-disable-next-line no-console\n        console.error((0, _i18n.sprintf)((0, _i18n.__)('Unsupported container condition - \"%1$s\".', 'carbon-fields-ui'), definition.type));\n        return false;\n      }\n    } else {\n      // eslint-disable-line no-else-return\n      return evaluate(definition.conditions, values, definition.relation);\n    }\n  });\n  switch (relation) {\n    case 'AND':\n      return results.every(Boolean);\n    case 'OR':\n      return results.some(Boolean);\n    default:\n      // eslint-disable-next-line no-console\n      console.error((0, _i18n.sprintf)((0, _i18n.__)('Unsupported container condition relation used - \"%1$s\".', 'carbon-fields-ui'), relation));\n      return false;\n  }\n}\n\n/**\n * The function that causes the side effects.\n *\n * @param  {Object} props\n * @param  {Object} props.containers\n * @param  {string} props.context\n * @return {Function}\n */\nfunction handler(_ref) {\n  var containers = _ref.containers,\n    context = _ref.context;\n  return function (effect) {\n    var results = (0, _lodash.map)(containers, function (container, id) {\n      return [id, evaluate(container.conditions.conditions, effect, container.conditions.relation)];\n    });\n    results.forEach(function (_ref2) {\n      var _ref3 = (0, _slicedToArray2[\"default\"])(_ref2, 2),\n        id = _ref3[0],\n        result = _ref3[1];\n      var postboxNode = document.getElementById(id);\n      var containerNode = document.querySelector(\".container-\".concat(id));\n      var isMounted = !!containerNode.dataset.mounted;\n      if (postboxNode) {\n        postboxNode.hidden = !result;\n      }\n      if (containerNode) {\n        if (result && !isMounted) {\n          (0, _containers.renderContainer)(containers[id], context);\n        }\n        if (!result && isMounted) {\n          delete containerNode.dataset.mounted;\n\n          // Rely on React's internals instead of `unmountComponentAtNode`\n          // due to https://github.com/facebook/react/issues/13690.\n          // TODO: Conditionally render the fields in the container, this way\n          // we can move away from mount/unmount cycles.\n          containerNode._reactRootContainer.unmount();\n        }\n      }\n    });\n  };\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/handler/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/index.js":
/*!******************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _compose = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _refractCallbag = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\nvar _aperture = _interopRequireDefault(__webpack_require__(/*! ./aperture */ \"./packages/metaboxes/monitors/conditional-display/aperture/index.js\"));\nvar _handler = _interopRequireDefault(__webpack_require__(/*! ./handler */ \"./packages/metaboxes/monitors/conditional-display/handler/index.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Performs the evaluation of conditions.\n *\n * @return {null}\n */\nfunction ConditionalDisplay() {\n  return null;\n}\nvar applyWithSelect = (0, _data.withSelect)(function (select) {\n  var containers = select('carbon-fields/metaboxes').getContainers();\n  return {\n    containers: containers\n  };\n});\nvar applyWithEffects = (0, _refractCallbag.withEffects)(_aperture[\"default\"], {\n  handler: _handler[\"default\"]\n});\nvar _default = (0, _compose.compose)(applyWithEffects, applyWithSelect)(ConditionalDisplay);\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js":
/*!********************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = getAncestorsFromOption;\nvar _getLevelFromOption = _interopRequireDefault(__webpack_require__(/*! ./get-level-from-option */ \"./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js\"));\n/**\n * Internal dependencies.\n */\n\n/**\n * Extracts the ancestors of the post/term from an option.\n *\n * @param  {Object} option\n * @return {number[]}\n */\nfunction getAncestorsFromOption(option) {\n  var ancestors = [];\n  var previousOption = option;\n  var level = (0, _getLevelFromOption[\"default\"])(option);\n  while (level > 0 && previousOption) {\n    if ((0, _getLevelFromOption[\"default\"])(previousOption) !== level) {\n      previousOption = previousOption.previousSibling;\n\n      // Skip this iteration because the option isn't an ancestor.\n      continue;\n    }\n    var id = parseInt(previousOption.value, 10);\n    if (id > 0) {\n      ancestors.unshift(id);\n    }\n    previousOption = previousOption.previousSibling;\n    level--;\n  }\n  return ancestors;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/utils/get-ancestors-from-option.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js":
/*!****************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = getLevelFromOption;\n/**\n * Extracts the level from an option.\n *\n * @param  {Object} option\n * @return {number}\n */\nfunction getLevelFromOption(option) {\n  var level = 0;\n  if (option.className) {\n    var matches = option.className.match(/^level-(\\d+)/);\n    if (matches) {\n      level = parseInt(matches[1], 10) + 1;\n    }\n  }\n  return level;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/utils/get-level-from-option.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js":
/*!********************************************************************************************!*\
  !*** ./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = getParentIdFromOption;\n/**\n * Extracts the id of the post/term parent from an option.\n *\n * @param  {Object} option\n * @return {number}\n */\nfunction getParentIdFromOption(option) {\n  var value = parseInt(option.value, 10);\n  return !isNaN(value) && value >= 0 ? value : 0;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/conditional-display/utils/get-parent-id-from-option.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/index.js":
/*!**********************************************!*\
  !*** ./packages/metaboxes/monitors/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initializeMonitors;\nvar _element = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\nvar _saveLock = _interopRequireDefault(__webpack_require__(/*! ./save-lock */ \"./packages/metaboxes/monitors/save-lock/index.js\"));\nvar _conditionalDisplay = _interopRequireDefault(__webpack_require__(/*! ./conditional-display */ \"./packages/metaboxes/monitors/conditional-display/index.js\"));\nvar _widgetHandler = _interopRequireDefault(__webpack_require__(/*! ./widget-handler */ \"./packages/metaboxes/monitors/widget-handler/index.js\"));\nvar _revisionsFlag = _interopRequireDefault(__webpack_require__(/*! ./revisions-flag */ \"./packages/metaboxes/monitors/revisions-flag/index.js\"));\nvar _isGutenberg = _interopRequireDefault(__webpack_require__(/*! ../utils/is-gutenberg */ \"./packages/metaboxes/utils/is-gutenberg.js\"));\nvar _constants = __webpack_require__(/*! ../lib/constants */ \"./packages/metaboxes/lib/constants.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Initializes the monitors.\n *\n * @param  {string} context\n * @return {void}\n */\nfunction initializeMonitors(context) {\n  var pagenow = window.cf.config.pagenow;\n  (0, _element.render)(__webpack_provided_wp_dot_element.createElement(_element.Fragment, null, !(0, _isGutenberg[\"default\"])() && __webpack_provided_wp_dot_element.createElement(_saveLock[\"default\"], null), (pagenow === _constants.PAGE_NOW_WIDGETS || pagenow === _constants.PAGE_NOW_CUSTOMIZE) && __webpack_provided_wp_dot_element.createElement(_widgetHandler[\"default\"], null), __webpack_provided_wp_dot_element.createElement(_conditionalDisplay[\"default\"], {\n    context: context\n  })), document.createElement('div'));\n  var postStuffNode = document.querySelector('#poststuff');\n  if (postStuffNode) {\n    (0, _element.render)(__webpack_provided_wp_dot_element.createElement(_revisionsFlag[\"default\"], null), postStuffNode.appendChild(document.createElement('div')));\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/revisions-flag/index.js":
/*!*************************************************************!*\
  !*** ./packages/metaboxes/monitors/revisions-flag/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_wp_dot_element) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/**\n * External dependencies.\n */\n\n/**\n * Renders the input used to notify the backend about the changes.\n *\n * @param  {Object}  props\n * @param  {boolean} props.isDirty\n * @return {mixed}\n */\nfunction RevisionsFlag(props) {\n  return __webpack_provided_wp_dot_element.createElement(\"input\", {\n    type: \"hidden\",\n    name: window.cf.config.revisionsInputKey,\n    disabled: !props.isDirty,\n    value: \"1\"\n  });\n}\nvar _default = (0, _data.withSelect)(function (select) {\n  return {\n    isDirty: select('carbon-fields/metaboxes').isDirty()\n  };\n})(RevisionsFlag);\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\")))\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/revisions-flag/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/save-lock/index.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/monitors/save-lock/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _refractCallbag = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Toggles the ability to save the page.\n *\n * @return {null}\n */\nfunction SaveLock() {\n  return null;\n}\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\nfunction aperture() {\n  return (0, _core.fromSelector)((0, _data.select)('carbon-fields/metaboxes').isSavingLocked);\n}\n\n/**\n * The function that causes the side effects.\n *\n * @return {Function}\n */\nfunction handler() {\n  return function (isLocked) {\n    var nodes = document.querySelectorAll(\"\\n\\t\\t\\t#publishing-action input#publish,\\n\\t\\t\\t#publishing-action input#save,\\n\\t\\t\\t#addtag input#submit,\\n\\t\\t\\t#edittag input[type=\\\"submit\\\"],\\n\\t\\t\\t#your-profile input#submit\\n\\t\\t\");\n    nodes.forEach(function (node) {\n      node.disabled = isLocked;\n    });\n  };\n}\nvar _default = (0, _refractCallbag.withEffects)(aperture, {\n  handler: handler\n})(SaveLock);\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/save-lock/index.js?");

/***/ }),

/***/ "./packages/metaboxes/monitors/widget-handler/index.js":
/*!*************************************************************!*\
  !*** ./packages/metaboxes/monitors/widget-handler/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _element = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _refractCallbag = __webpack_require__(/*! refract-callbag */ \"refract-callbag\");\nvar _callbagBasics = __webpack_require__(/*! callbag-basics */ \"callbag-basics\");\nvar _urldecode = _interopRequireDefault(__webpack_require__(/*! ../../utils/urldecode */ \"./packages/metaboxes/utils/urldecode.js\"));\nvar _flattenField = _interopRequireDefault(__webpack_require__(/*! ../../utils/flatten-field */ \"./packages/metaboxes/utils/flatten-field.js\"));\nvar _fromEventPattern = _interopRequireDefault(__webpack_require__(/*! ../../utils/from-event-pattern */ \"./packages/metaboxes/utils/from-event-pattern.js\"));\nvar _containers = __webpack_require__(/*! ../../containers */ \"./packages/metaboxes/containers/index.js\");\nvar _constants = __webpack_require__(/*! ../../lib/constants */ \"./packages/metaboxes/lib/constants.js\");\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Performs the re-initialization of widgets.\n *\n * @return {null}\n */\nfunction WidgetHandler() {\n  return null;\n}\n\n/**\n * Returns whether the widget is created by Carbon Fields.\n *\n * @param  {string} identifier\n * @return {boolean}\n */\nfunction isCarbonFieldsWidget(identifier) {\n  return identifier.indexOf(_constants.CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX) > -1;\n}\n\n/**\n * The function that controls the stream of side effects.\n *\n * @return {Object}\n */\nfunction aperture() {\n  return (0, _callbagBasics.merge)((0, _callbagBasics.pipe)((0, _fromEventPattern[\"default\"])(function (handler) {\n    return window.jQuery(document).on('widget-added widget-updated', handler);\n  }, function (handler) {\n    return window.jQuery(document).off('widget-added widget-updated', handler);\n  }, function (event, $widget) {\n    return {\n      event: event,\n      $widget: $widget\n    };\n  }), (0, _callbagBasics.filter)(function (_ref) {\n    var $widget = _ref.$widget;\n    return isCarbonFieldsWidget($widget[0].id);\n  }), (0, _callbagBasics.map)(function (payload) {\n    return {\n      type: 'WIDGET_CREATED_OR_UPDATED',\n      payload: payload\n    };\n  })), (0, _callbagBasics.pipe)((0, _fromEventPattern[\"default\"])(function (handler) {\n    return window.jQuery(document).on('ajaxSend', handler);\n  }, function (handler) {\n    return window.jQuery(document).off('ajaxSend', handler);\n  }, function (event, xhr, options, data) {\n    return {\n      event: event,\n      xhr: xhr,\n      options: options,\n      data: data\n    };\n  }), (0, _callbagBasics.filter)(function (_ref2) {\n    var options = _ref2.options;\n    return (0, _lodash.startsWith)(options.data, _constants.CARBON_FIELDS_CONTAINER_ID_PREFIX);\n  }), (0, _callbagBasics.map)(function (payload) {\n    return {\n      type: 'WIDGET_BEIGN_UPDATED_OR_DELETED',\n      payload: payload\n    };\n  })));\n}\n\n/**\n * The function that causes the side effects.\n *\n * @return {Function}\n */\nfunction handler() {\n  return function (effect) {\n    var _select = (0, _data.select)('carbon-fields/metaboxes'),\n      getContainerById = _select.getContainerById;\n    var _dispatch = (0, _data.dispatch)('carbon-fields/metaboxes'),\n      addContainer = _dispatch.addContainer,\n      removeContainer = _dispatch.removeContainer,\n      addFields = _dispatch.addFields,\n      removeFields = _dispatch.removeFields;\n    switch (effect.type) {\n      case 'WIDGET_CREATED_OR_UPDATED':\n        {\n          var _effect$payload = effect.payload,\n            event = _effect$payload.event,\n            $widget = _effect$payload.$widget;\n          var container = (0, _lodash.flow)(_urldecode[\"default\"], JSON.parse)($widget.find('[data-json]').data('json'));\n          var fields = [];\n          container.fields = container.fields.map(function (field) {\n            return (0, _flattenField[\"default\"])(field, container, fields);\n          });\n          addFields(fields);\n          addContainer(container);\n          (0, _containers.renderContainer)(container, 'classic');\n\n          // WARNING: This piece of code manipulates the core behavior of WordPress Widgets.\n          // Some day this code will stop to work and we'll need to find another workaround.\n          //\n          // * Disable the submit { handler } since it breaks our validation logic.\n          // * Disable live preview mode because we can't detect when the widget is updated/synced.\n          // * Show the \"Apply\" button because it's hidden by the live mode.\n          if (window.cf.config.pagenow === _constants.PAGE_NOW_CUSTOMIZE && event.type === 'widget-added') {\n            var widgetId = $widget.find('[name=\"widget-id\"]').val();\n            $widget.find('[name=\"savewidget\"]').show().end().find('.widget-content:first').off('keydown', 'input').off('change input propertychange', ':input');\n            var instance = wp.customize.Widgets.getWidgetFormControlForWidget(widgetId);\n\n            // Change the flag for 'live mode' so we can receive proper `widget-updated` events.\n            instance.liveUpdateMode = false;\n          }\n          break;\n        }\n      case 'WIDGET_BEIGN_UPDATED_OR_DELETED':\n        {\n          var _effect$payload$optio = effect.payload.options.data.match(/widget-id=(.+?)&/),\n            _effect$payload$optio2 = (0, _slicedToArray2[\"default\"])(_effect$payload$optio, 2),\n            _widgetId = _effect$payload$optio2[1];\n          var containerId = \"\".concat(_constants.CARBON_FIELDS_CONTAINER_ID_PREFIX).concat(_widgetId);\n\n          // Get the container from the store.\n          var _container = getContainerById(containerId);\n\n          // Remove the current instance from DOM.\n          (0, _element.unmountComponentAtNode)(document.querySelector(\".container-\".concat(containerId)));\n\n          // Get the fields that belongs to the container.\n          var fieldsIds = _.map(_container.fields, 'id');\n\n          // Remove everything from the store.\n          removeContainer(containerId);\n          removeFields(fieldsIds);\n          break;\n        }\n    }\n  };\n}\nvar _default = (0, _refractCallbag.withEffects)(aperture, {\n  handler: handler\n})(WidgetHandler);\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/monitors/widget-handler/index.js?");

/***/ }),

/***/ "./packages/metaboxes/store/actions.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/store/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addContainer = addContainer;\nexports.addFields = addFields;\nexports.cloneFields = cloneFields;\nexports.lockSaving = lockSaving;\nexports.receiveSidebar = receiveSidebar;\nexports.removeContainer = removeContainer;\nexports.removeFields = removeFields;\nexports.setupState = setupState;\nexports.unlockSaving = unlockSaving;\nexports.updateFieldValue = updateFieldValue;\nexports.updateState = updateState;\n/**\n * Returns an action object used to setup the state when first opening an editor.\n *\n * @param  {Object[]} containers\n * @param  {Object}   fields\n * @return {Object}\n */\nfunction setupState(containers, fields) {\n  return {\n    type: 'SETUP_STATE',\n    payload: {\n      containers: containers,\n      fields: fields\n    }\n  };\n}\n\n/**\n * Returns an action object used to update the state.\n *\n * @param  {Object[]} containers\n * @param  {Object}   fields\n * @return {Object}\n */\nfunction updateState(containers, fields) {\n  return {\n    type: 'UPDATE_STATE',\n    payload: {\n      containers: containers,\n      fields: fields\n    }\n  };\n}\n\n/**\n * Returns an action object used to update the field's value.\n *\n * @param  {string}   fieldId\n * @param  {mixed}    value\n * @param  {string[]} fieldsToRemove It's used by the complex fields to remove the nested\n *                                 fields within a single action.\n * @return {Object}\n */\nfunction updateFieldValue(fieldId, value) {\n  var fieldsToRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  return {\n    type: 'UPDATE_FIELD_VALUE',\n    payload: {\n      fieldId: fieldId,\n      value: value,\n      fieldsToRemove: fieldsToRemove\n    }\n  };\n}\n\n/**\n * Returns an action object used to add the fields.\n *\n * @param  {Object[]} fields\n * @return {Object}\n */\nfunction addFields(fields) {\n  return {\n    type: 'ADD_FIELDS',\n    payload: {\n      fields: fields\n    }\n  };\n}\n\n/**\n * Returns an action object used to clone the fields.\n *\n * @param  {string[]} originFieldIds\n * @param  {string[]} cloneFieldIds\n * @return {Object}\n */\nfunction cloneFields(originFieldIds, cloneFieldIds) {\n  return {\n    type: 'CLONE_FIELDS',\n    payload: {\n      originFieldIds: originFieldIds,\n      cloneFieldIds: cloneFieldIds\n    }\n  };\n}\n\n/**\n * Returns an action object used to remove the fields.\n *\n * @param  {string[]} fieldIds\n * @return {Object}\n */\nfunction removeFields(fieldIds) {\n  return {\n    type: 'REMOVE_FIELDS',\n    payload: {\n      fieldIds: fieldIds\n    }\n  };\n}\n\n/**\n * Returns an action object used to add a container to all containers.\n *\n * @param  {Object} container\n * @return {Object}\n */\nfunction addContainer(container) {\n  return {\n    type: 'ADD_CONTAINER',\n    payload: container\n  };\n}\n\n/**\n * Returns an action object used to remove a container from all containers.\n *\n * @param  {Object} container\n * @return {Object}\n */\nfunction removeContainer(container) {\n  return {\n    type: 'REMOVE_CONTAINER',\n    payload: container\n  };\n}\n\n/**\n * Returns an action object used to add the created sidebar to all fields.\n *\n * @param  {Object} sidebar\n * @return {Object}\n */\nfunction receiveSidebar(sidebar) {\n  return {\n    type: 'RECEIVE_SIDEBAR',\n    payload: sidebar\n  };\n}\n\n/**\n * Returns an action object used to signal that saving is locked.\n *\n * @param  {string} lockName\n * @return {Object}\n */\nfunction lockSaving(lockName) {\n  return {\n    type: 'LOCK_SAVING',\n    payload: {\n      lockName: lockName\n    }\n  };\n}\n\n/**\n * Returns an action object used to signal that saving is unlocked.\n *\n * @param  {string} lockName\n * @return {Object}\n */\nfunction unlockSaving(lockName) {\n  return {\n    type: 'UNLOCK_SAVING',\n    payload: {\n      lockName: lockName\n    }\n  };\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/actions.js?");

/***/ }),

/***/ "./packages/metaboxes/store/helpers.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/store/helpers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.normalizePreloadedState = normalizePreloadedState;\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _flattenField = _interopRequireDefault(__webpack_require__(/*! ../utils/flatten-field */ \"./packages/metaboxes/utils/flatten-field.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Transform the shape of the given state to be more Redux friendly.\n *\n * @param  {Object} state\n * @return {Object}\n */\nfunction normalizePreloadedState(state) {\n  var fields = [];\n  var containers = state.filter(function (_ref) {\n    var id = _ref.id;\n    return !(0, _lodash.endsWith)(id, '__i__');\n  }).map(function (container) {\n    return (0, _lodash.assign)({}, container, {\n      fields: container.fields.map(function (field) {\n        return (0, _flattenField[\"default\"])(field, container.id, fields);\n      })\n    });\n  });\n  return {\n    containers: containers,\n    fields: fields\n  };\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/helpers.js?");

/***/ }),

/***/ "./packages/metaboxes/store/index.js":
/*!*******************************************!*\
  !*** ./packages/metaboxes/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ \"./packages/metaboxes/store/reducer.js\"));\nvar actions = _interopRequireWildcard(__webpack_require__(/*! ./actions */ \"./packages/metaboxes/store/actions.js\"));\nvar selectors = _interopRequireWildcard(__webpack_require__(/*! ./selectors */ \"./packages/metaboxes/store/selectors.js\"));\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./packages/metaboxes/store/helpers.js\");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n/**\n * External dependencies.\n */\n\n/**\n * Internal dependencies.\n */\n\n/**\n * Register the store.\n */\n(0, _data.registerStore)('carbon-fields/metaboxes', {\n  reducer: _reducer[\"default\"],\n  actions: actions,\n  selectors: selectors\n});\n\n/**\n * Hydrate the store's state.\n */\nvar _normalizePreloadedSt = (0, _helpers.normalizePreloadedState)((0, _lodash.get)(window.cf, 'preloaded.containers', [])),\n  containers = _normalizePreloadedSt.containers,\n  fields = _normalizePreloadedSt.fields;\n(0, _data.dispatch)('carbon-fields/metaboxes').setupState((0, _lodash.keyBy)(containers, 'id'), (0, _lodash.keyBy)(fields, 'id'));\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/index.js?");

/***/ }),

/***/ "./packages/metaboxes/store/reducer.js":
/*!*********************************************!*\
  !*** ./packages/metaboxes/store/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.containers = containers;\nexports[\"default\"] = void 0;\nexports.fields = fields;\nexports.isDirty = isDirty;\nexports.isFieldUpdated = isFieldUpdated;\nexports.savingLock = savingLock;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _immer = _interopRequireDefault(__webpack_require__(/*! immer */ \"immer\"));\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\n * The reducer that keeps track of the containers.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\nfunction containers() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'SETUP_STATE':\n      return action.payload.containers;\n    case 'UPDATE_STATE':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        (0, _lodash.values)(action.payload.containers).forEach(function (container) {\n          draft[container.id] = container;\n        });\n      });\n    case 'ADD_CONTAINER':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        draft[action.payload.id] = action.payload;\n      });\n    case 'REMOVE_CONTAINER':\n      return (0, _lodash.omit)(state, action.payload);\n    default:\n      return state;\n  }\n}\n\n/**\n * Clones a field.\n *\n * @param  {string}   originId\n * @param  {string}   cloneId\n * @param  {Object}   fields\n * @param  {Object[]} accumulator\n * @return {Object[]}\n */\nfunction cloneField(originId, cloneId, fields, accumulator) {\n  var field = (0, _lodash.cloneDeep)(fields[originId]);\n  field.id = cloneId;\n  if (field.type === 'complex') {\n    field.value.forEach(function (group) {\n      group.id = (0, _core.uniqueId)();\n      accumulator = group.fields.reduce(function (groupAccumulator, groupField) {\n        var originGroupFieldId = groupField.id;\n        var cloneGroupFieldId = (0, _core.uniqueId)();\n        groupField.id = cloneGroupFieldId;\n        return cloneField(originGroupFieldId, cloneGroupFieldId, fields, groupAccumulator);\n      }, accumulator);\n    });\n  }\n  return accumulator.concat(field);\n}\n\n/**\n * Returns a list of field ids by a given root id.\n *\n * @param  {string}   fieldId\n * @param  {Object}   fields\n * @param  {string[]} accumulator\n * @return {string[]}\n */\nfunction getFieldIdsByRootId(fieldId, fields, accumulator) {\n  var field = fields[fieldId];\n  if (field.type === 'complex') {\n    field.value.forEach(function (group) {\n      accumulator = group.fields.reduce(function (groupAccumulator, groupField) {\n        return getFieldIdsByRootId(groupField.id, fields, groupAccumulator);\n      }, accumulator);\n    });\n  }\n  return accumulator.concat(fieldId);\n}\n\n/**\n * The reducer that keeps track of the fields.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\nfunction fields() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'SETUP_STATE':\n      return action.payload.fields;\n    case 'UPDATE_STATE':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        (0, _lodash.values)(action.payload.fields).forEach(function (field) {\n          draft[field.id] = field;\n        });\n      });\n    case 'UPDATE_FIELD_VALUE':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        var _action$payload = action.payload,\n          fieldId = _action$payload.fieldId,\n          value = _action$payload.value,\n          fieldsToRemove = _action$payload.fieldsToRemove;\n        draft[fieldId].value = value;\n        var fieldIdsToRemove = fieldsToRemove.reduce(function (accumulator, fieldIdToRemove) {\n          return getFieldIdsByRootId(fieldIdToRemove, state, accumulator);\n        }, []);\n        fieldIdsToRemove.forEach(function (fieldIdToRemove) {\n          (0, _lodash.unset)(draft, fieldIdToRemove);\n        });\n      });\n    case 'ADD_FIELDS':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        action.payload.fields.forEach(function (field) {\n          draft[field.id] = field;\n        });\n      });\n    case 'CLONE_FIELDS':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        var _action$payload2 = action.payload,\n          originFieldIds = _action$payload2.originFieldIds,\n          cloneFieldIds = _action$payload2.cloneFieldIds;\n        var clonedFields = originFieldIds.reduce(function (accumulator, originFieldId, index) {\n          return cloneField(originFieldId, cloneFieldIds[index], draft, accumulator);\n        }, []);\n        (0, _lodash.assign)(draft, (0, _lodash.keyBy)(clonedFields, 'id'));\n      });\n    case 'REMOVE_FIELDS':\n      var fieldIds = action.payload.fieldIds.reduce(function (accumulator, fieldId) {\n        return getFieldIdsByRootId(fieldId, state, accumulator);\n      }, []);\n      return (0, _lodash.omit)(state, fieldIds);\n    case 'RECEIVE_SIDEBAR':\n      return (0, _immer[\"default\"])(state, function (draft) {\n        (0, _lodash.forEach)(draft, function (field) {\n          if (field.type === 'sidebar') {\n            field.options.unshift(action.payload);\n          }\n        });\n      });\n    default:\n      return state;\n  }\n}\n\n/**\n * The reducer that keeps track of the save locks.\n *\n * @param  {Object} state\n * @param  {Object} action\n * @return {Object}\n */\nfunction savingLock() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'LOCK_SAVING':\n      return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2[\"default\"])({}, action.payload.lockName, true));\n    case 'UNLOCK_SAVING':\n      return (0, _lodash.omit)(state, [action.payload.lockName]);\n    default:\n      return state;\n  }\n}\n\n/**\n * The reducer that keeps track if there is dirty fields.\n *\n * @param  {boolean} state\n * @param  {Object}  action\n * @return {Object}\n */\nfunction isDirty() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'UPDATE_FIELD_VALUE':\n      return true;\n    default:\n      return state;\n  }\n}\n\n/**\n * The reducer that keeps track if an update is being made.\n *\n * @param  {boolean} state\n * @param  {Object}  action\n * @return {Object}\n */\nfunction isFieldUpdated(state, action) {\n  switch (action.type) {\n    case 'UPDATE_FIELD_VALUE':\n      return {\n        action: action\n      };\n    default:\n      return false;\n  }\n}\nvar _default = (0, _data.combineReducers)({\n  containers: containers,\n  fields: fields,\n  savingLock: savingLock,\n  isDirty: isDirty,\n  isFieldUpdated: isFieldUpdated\n});\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/reducer.js?");

/***/ }),

/***/ "./packages/metaboxes/store/selectors.js":
/*!***********************************************!*\
  !*** ./packages/metaboxes/store/selectors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getComplexGroupValues = getComplexGroupValues;\nexports.getContainerById = getContainerById;\nexports.getContainers = getContainers;\nexports.getFieldById = getFieldById;\nexports.getFields = getFields;\nexports.getFieldsByContainerId = getFieldsByContainerId;\nexports.isDirty = isDirty;\nexports.isFieldUpdated = isFieldUpdated;\nexports.isSavingLocked = isSavingLocked;\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n/**\n * External dependencies.\n */\n\n/**\n * Returns the containers.\n *\n * @param  {Object} state\n * @return {Object[]}\n */\nfunction getContainers(state) {\n  return state.containers;\n}\n\n/**\n * Returns a container by an id.\n *\n * @param  {Object} state\n * @param  {string} containerId\n * @return {?Object}\n */\nfunction getContainerById(state, containerId) {\n  return state.containers[containerId];\n}\n\n/**\n * Returns the fields.\n *\n * @param  {Object} state\n * @return {Object}\n */\nfunction getFields(state) {\n  return state.fields;\n}\n\n/**\n * Returns the fields that belong to the specified container.\n *\n * @param  {Object} state\n * @param  {string} containerId\n * @return {Object[]}\n */\nfunction getFieldsByContainerId(state, containerId) {\n  return (0, _lodash.filter)(state.fields, ['container_id', containerId]);\n}\n\n/**\n * Returns a field by an id.\n *\n * @param  {Object} state\n * @param  {string} fieldId\n * @return {?Object}\n */\nfunction getFieldById(state, fieldId) {\n  return state.fields[fieldId];\n}\n\n/**\n * Returns whether saving is locked.\n *\n * @param  {Object} state\n * @return {boolean}\n */\nfunction isSavingLocked(state) {\n  return Object.keys(state.savingLock).length > 0;\n}\n\n/**\n * Returns whether the metaboxes fields contain unsaved changed.\n *\n * @param  {Object} state\n * @return {boolean}\n */\nfunction isDirty(state) {\n  return state.isDirty;\n}\n\n/**\n * Returns whether the metaboxes fields contain unsaved changed.\n *\n * @param  {Object} state\n * @return {boolean}\n */\nfunction isFieldUpdated(state) {\n  return state.isFieldUpdated;\n}\n\n/**\n * Returns a map of field values for a given group.\n *\n * @param  {Object}   state\n * @param  {string[]} fieldIds\n * @return {Object}\n */\nfunction getComplexGroupValues(state, fieldIds) {\n  var fields = (0, _lodash.pick)(getFields(state), fieldIds);\n  fields = (0, _lodash.mapKeys)(fields, function (field) {\n    return field.base_name.replace(/\\-/g, '_');\n  });\n  fields = (0, _lodash.mapValues)(fields, function (field) {\n    return field.value;\n  });\n  return fields;\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/store/selectors.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/flatten-field.js":
/*!***************************************************!*\
  !*** ./packages/metaboxes/utils/flatten-field.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = flattenField;\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\nvar _core = __webpack_require__(/*! @carbon-fields/core */ \"@carbon-fields/core\");\n/**\n * External dependencies.\n */\n\n/**\n * Carbon Fields dependencies.\n */\n\n/**\n * Flattens a field.\n *\n * @param  {Object}   field\n * @param  {string}   containerId\n * @param  {Object[]} accumulator\n * @return {Object}\n */\nfunction flattenField(field, containerId, accumulator) {\n  field = (0, _lodash.cloneDeep)(field);\n\n  // Replace the id of the field.\n  field.id = (0, _core.uniqueId)();\n\n  // Keep reference to the container.\n  field.container_id = containerId;\n\n  // The complex fields represent a nested structure of fields.\n  // So we need to flat them as well.\n  if (field.type === 'complex') {\n    field.value.forEach(function (group) {\n      group.id = (0, _core.uniqueId)();\n      group.container_id = containerId;\n      group.fields = group.fields.map(function (groupField) {\n        return flattenField(groupField, containerId, accumulator);\n      });\n    });\n  }\n  accumulator.push(field);\n  return (0, _lodash.pick)(field, ['id', 'type', 'name', 'base_name']);\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/flatten-field.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/from-event-pattern.js":
/*!********************************************************!*\
  !*** ./packages/metaboxes/utils/from-event-pattern.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = fromEventPattern;\nvar _callbagCreate = _interopRequireDefault(__webpack_require__(/*! callbag-create */ \"./node_modules/callbag-create/index.cjs.js\"));\n/**\n * External dependencies.\n */\n\n/**\n * Callbag source factory from `addHandler` and `removeHandler` pair.\n *\n * @see https://github.com/Andarist/callbag-from-event-pattern\n * @param  {Function} addHandler\n * @param  {Function} removeHandler\n * @param  {Function} argsTransformer\n * @return {Function}\n */\nfunction fromEventPattern(addHandler, removeHandler) {\n  var argsTransformer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    return args;\n  };\n  return (0, _callbagCreate[\"default\"])(function (sink) {\n    var handler = function handler() {\n      return sink(1, argsTransformer.apply(void 0, arguments));\n    };\n    addHandler(handler);\n    return function () {\n      return removeHandler(handler);\n    };\n  });\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/from-event-pattern.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/is-gutenberg.js":
/*!**************************************************!*\
  !*** ./packages/metaboxes/utils/is-gutenberg.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = isGutenberg;\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n/**\n * External dependencies.\n */\n\n/**\n * Returns true if Gutenberg is presented.\n *\n * @return {boolean}\n */\nfunction isGutenberg() {\n  return !(0, _lodash.isUndefined)(window._wpLoadBlockEditor);\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/is-gutenberg.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/strip-compact-input-prefix.js":
/*!****************************************************************!*\
  !*** ./packages/metaboxes/utils/strip-compact-input-prefix.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = stripCompactInputPrefix;\n/**\n * Removes the prefix used to compact the input of Carbon Fields.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction stripCompactInputPrefix(str) {\n  var _window$cf$config = window.cf.config,\n    compactInput = _window$cf$config.compactInput,\n    compactInputKey = _window$cf$config.compactInputKey;\n  if (!compactInput || str.indexOf(compactInputKey) !== 0) {\n    return str;\n  }\n  return str.replace(new RegExp(\"^\".concat(compactInputKey, \"\\\\[(.+?)\\\\]\")), '$1');\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/strip-compact-input-prefix.js?");

/***/ }),

/***/ "./packages/metaboxes/utils/urldecode.js":
/*!***********************************************!*\
  !*** ./packages/metaboxes/utils/urldecode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = urldecode;\n/**\n * Source: https://github.com/kvz/locutus/blob/master/src/php/url/urldecode.js\n *\n * @param  {string} str\n * @return {string}\n */\nfunction urldecode(str) {\n  return decodeURIComponent((str + '').replace(/%(?![\\da-f]{2})/gi, function () {\n    // PHP tolerates poorly formed escape sequences\n    return '%25';\n  }).replace(/\\+/g, '%20'));\n}\n\n//# sourceURL=webpack://cf.%5Bname%5D/./packages/metaboxes/utils/urldecode.js?");

/***/ }),

/***/ "@carbon-fields/core":
/*!******************************!*\
  !*** external ["cf","core"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"core\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22core%22%5D?");

/***/ }),

/***/ "@wordpress/compose":
/*!*****************************************************!*\
  !*** external ["cf","vendor","@wordpress/compose"] ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/compose\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/compose%22%5D?");

/***/ }),

/***/ "@wordpress/data":
/*!**************************************************!*\
  !*** external ["cf","vendor","@wordpress/data"] ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/data\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/data%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*****************************************************!*\
  !*** external ["cf","vendor","@wordpress/element"] ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/element\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/element%22%5D?");

/***/ }),

/***/ "@wordpress/hooks":
/*!***************************************************!*\
  !*** external ["cf","vendor","@wordpress/hooks"] ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/hooks\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/hooks%22%5D?");

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************************************!*\
  !*** external ["cf","vendor","@wordpress/i18n"] ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"@wordpress/i18n\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22@wordpress/i18n%22%5D?");

/***/ }),

/***/ "callbag-basics":
/*!*************************************************!*\
  !*** external ["cf","vendor","callbag-basics"] ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"callbag-basics\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22callbag-basics%22%5D?");

/***/ }),

/***/ "callbag-from-delegated-event":
/*!***************************************************************!*\
  !*** external ["cf","vendor","callbag-from-delegated-event"] ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"callbag-from-delegated-event\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22callbag-from-delegated-event%22%5D?");

/***/ }),

/***/ "classnames":
/*!*********************************************!*\
  !*** external ["cf","vendor","classnames"] ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"classnames\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22classnames%22%5D?");

/***/ }),

/***/ "immer":
/*!****************************************!*\
  !*** external ["cf","vendor","immer"] ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"immer\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22immer%22%5D?");

/***/ }),

/***/ "lodash":
/*!*****************************************!*\
  !*** external ["cf","vendor","lodash"] ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"lodash\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22lodash%22%5D?");

/***/ }),

/***/ "refract-callbag":
/*!**************************************************!*\
  !*** external ["cf","vendor","refract-callbag"] ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"cf\"][\"vendor\"][\"refract-callbag\"]; }());\n\n//# sourceURL=webpack://cf.%5Bname%5D/external_%5B%22cf%22,%22vendor%22,%22refract-callbag%22%5D?");

/***/ })

/******/ });