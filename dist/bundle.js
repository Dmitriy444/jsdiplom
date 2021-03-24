/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\n\n\n // модальное окно\n\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://jsdiplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar popup = function popup() {\n  var btnCall = document.querySelectorAll('div.relative a')[1],\n      modalCallback = document.getElementById('callback'),\n      overlay = document.querySelector('.modal-overlay'),\n      body = document.querySelector('body'),\n      modalClose = document.querySelector('div.modal-close img');\n  modalCallback.style.display = 'none';\n  overlay.style.display = 'none';\n  modalClose.classList.add('popupCloseBtn');\n  btnCall.classList.add('btnOpen');\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('btnOpen')) {\n      modalCallback.style.display = 'block';\n      overlay.style.display = 'block';\n    } else if (target.classList.contains('popupCloseBtn')) {\n      modalCallback.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n  overlay.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('#callback');\n\n    if (!target) {\n      modalCallback.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://jsdiplom/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  /*\r\n  const itemRelative = (document.querySelector('.top-slider')),\r\n      container = (itemRelative.querySelectorAll('.container')),\r\n      h1 = document.querySelectorAll('.big'),\r\n      //text = container.querySelector('.text'),\r\n      table = document.querySelector('.table'),\r\n      tables1 = itemRelative.querySelectorAll('.table'),\r\n      relative = itemRelative.querySelectorAll('.relative'),\r\n      images = document.querySelector('div.top-slider style');\r\n  \r\n  //console.log(itemRelative);\r\n  //console.log(container);\r\n  //console.log(h1[0]);\r\n  //console.log(table);\r\n  console.log(tables1);\r\n  console.log(relative);\r\n  //console.log(relative);\r\n  console.log(images);\r\n    itemRelative.id = 'idName';\r\n  //relative.id = 'rel';\r\n  let style1 = relative[0].style;\r\n  console.log(style1.background);\r\n     \r\n      \r\n  table.style.visibility = 'visible';\r\n  table.style.opacity = 1;\r\n  //h1[0].setAttribute('style', 'opacity = 0')\r\n  relative[0].style.overflow = 'inherit'; //скрыть\r\n  //relative[0].style.background = 'inherit';\r\n    let currentSlide = 0;\r\n  const prevSlide = () => {\r\n      //relative[currentSlide].style.overflow = 'hidden';\r\n      relative[currentSlide].style.visibility = 'hidden';\r\n      //relative[currentSlide].style.opacity = 0;\r\n          //relative[currentSlide].style.background = 'inherit';\r\n      //tables1[currentSlide].style.visibility = 'hidden';\r\n      //tables1[currentSlide].style.opacity = 0;\r\n  };\r\n  const nextSlide = () => {\r\n      //relative[currentSlide].style.overflow = 'inherit';\r\n      //relative[currentSlide].style.background = 'inherit';\r\n      relative[currentSlide].style.visibility = 'visible';\r\n      //relative[currentSlide].style.opacity = 1;\r\n    }; \r\n    const autoPlaySlide = () => {\r\n      prevSlide();\r\n      currentSlide++;\r\n      if(currentSlide >= tables1.length){\r\n          currentSlide = 0;\r\n      }\r\n      nextSlide();\r\n  };\r\n    const startSlide = () => {\r\n      setInterval(autoPlaySlide, 5000);\r\n  };\r\n  startSlide();\r\n  */\n  var topSlider = document.querySelector('.top-slider'),\n      itemRelative = topSlider.querySelectorAll('.relative'),\n      tables = topSlider.querySelectorAll('.table');\n  console.log(topSlider);\n  console.log(itemRelative);\n  console.log(tables);\n  var currentSlide = 0;\n  tables[0].style.visibility = 'visible';\n  tables[0].style.opacity = '1';\n  itemRelative[0].style.display = 'block';\n\n  var prevSlide = function prevSlide() {\n    tables[currentSlide].style.visibility = 'hidden';\n    tables[currentSlide].style.opacity = '0';\n    itemRelative[currentSlide].style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide() {\n    tables[currentSlide].style.visibility = 'visible';\n    tables[currentSlide].style.opacity = '1'; //tables[currentSlide].innerHTML = tables[0];\n\n    itemRelative[currentSlide].style.display = 'block';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide();\n    currentSlide++;\n\n    if (currentSlide >= tables.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide();\n  };\n\n  var startSlide = function startSlide() {\n    setInterval(autoPlaySlide, 3000);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://jsdiplom/./src/modules/slider.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;