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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/send */ \"./src/modules/send.js\");\n\n\n\n\n\n // модальное окно\n\n(0,_modules_popup__WEBPACK_IMPORTED_MODULE_0__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); // Скролл\n\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)(); // Отправка данных\n\n(0,_modules_send__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://jsdiplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar popup = function popup() {\n  var btnCall = document.querySelectorAll('div.relative a')[1],\n      modalCallback = document.getElementById('callback'),\n      overlay = document.querySelector('.modal-overlay'),\n      body = document.querySelector('body'),\n      modalClose = document.querySelector('div.modal-close img');\n\n  var close = function close() {\n    modalCallback.style.display = 'none';\n    overlay.style.display = 'none';\n  };\n\n  var open = function open() {\n    modalCallback.style.display = 'block';\n    overlay.style.display = 'block';\n  };\n\n  modalClose.classList.add('popupCloseBtn');\n  btnCall.classList.add('btnOpen');\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('btnOpen')) {\n      open();\n    } else if (target.classList.contains('button-services')) {\n      open();\n    } else if (target.classList.contains('popupCloseBtn')) {\n      close();\n    }\n  });\n  overlay.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('#callback');\n\n    if (!target) {\n      close();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://jsdiplom/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var arrowTop = document.querySelector('.up'),\n      topMenu = document.querySelector('.top-menu'),\n      ul = topMenu.querySelector('ul'),\n      buttons = ul.querySelectorAll('li'),\n      questions = document.querySelectorAll('.push100'),\n      body = document.querySelector('body');\n  arrowTop.setAttribute('hidden', true);\n  topMenu.id = 'menu';\n  topMenu.classList.add('ok');\n  buttons[0].classList.add('price');\n  buttons[1].classList.add('answer');\n  buttons[2].classList.add('contacts');\n  questions[0].id = 'price';\n  questions[2].id = 'question';\n  questions[3].id = 'contacts';\n  var ourServices = document.getElementById('price');\n  var question = document.getElementById('question');\n  var ourContacts = document.getElementById('contacts');\n  ul.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.price');\n\n    if (target) {\n      ourServices.scrollIntoView({\n        block: \"start\",\n        behavior: \"smooth\"\n      });\n    } else {\n      var _target = event.target;\n      _target = _target.closest('.answer');\n\n      if (_target) {\n        question.scrollIntoView({\n          block: \"start\",\n          behavior: \"smooth\"\n        });\n      } else {\n        var _target2 = event.target;\n        _target2 = _target2.closest('.contacts');\n\n        if (_target2) {\n          ourContacts.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n        }\n      }\n    }\n  });\n  arrowTop.addEventListener('click', function () {\n    body.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset > 520) {\n      arrowTop.removeAttribute('hidden');\n    } else if (window.pageYOffset < 520) {\n      arrowTop.setAttribute('hidden', true);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://jsdiplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar send = function send() {\n  var errorMessage = 'Что то пошло не так',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся.'; //const forms = document.querySelector('body');\n\n  var call = document.getElementById('callback');\n  var inputs = document.querySelector('.rf');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 2rem;\\n    color: grey;\"; // валидация\n\n  inputs.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.form-control')) {\n      target.value = target.value.replace(/[a-zA-Z0-9]/, '');\n    } else if (target.matches('.required')) {\n      target.value = target.value.replace(/\\D/, '');\n    }\n  }, true); // отправка данных\n\n  call.addEventListener('submit', function (event) {\n    var target = event.target;\n\n    if (target.matches('.modal-callback')) {\n      formName = target.querySelector('.form-control');\n      formPhone = target.querySelector('.required');\n    }\n\n    event.preventDefault();\n    target.append(statusMessage);\n    statusMessage.textContent = loadMessage;\n    setTimeout(function () {\n      return statusMessage.remove();\n    }, 5000);\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200.');\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    target.querySelector('.form-control').value = '';\n    target.querySelector('.required').value = '';\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);\n\n//# sourceURL=webpack://jsdiplom/./src/modules/send.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var topSlider = document.querySelector('.top-slider'),\n      itemRelative = topSlider.querySelectorAll('.relative'),\n      tables = topSlider.querySelectorAll('.table');\n  var currentSlide = 0;\n  tables[0].style.visibility = 'visible';\n  tables[0].style.opacity = '1';\n  itemRelative[0].style.display = 'block';\n\n  var prevSlide = function prevSlide() {\n    tables[currentSlide].style.visibility = 'hidden';\n    tables[currentSlide].style.opacity = '0';\n    itemRelative[currentSlide].style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide() {\n    tables[currentSlide].style.visibility = 'visible';\n    tables[currentSlide].style.opacity = '1';\n    itemRelative[currentSlide].style.display = 'block';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide();\n    currentSlide++;\n\n    if (currentSlide >= tables.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide();\n  };\n\n  var startSlide = function startSlide() {\n    setInterval(autoPlaySlide, 3000);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://jsdiplom/./src/modules/slider.js?");

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