# Proto

## Getting Started

Установить зависимости и запустить сервер
```
git clone https://github.com/0777144/proto && cd proto
npm install
npm run build
npm run server
```

Запустить watcher изменений для разработки
```
npm run watch
```


## Features

* [webpack 2.2.1]
* JavaScript [ES6] syntax


[webpack 2.2.1]: https://github.com/webpack/webpack/tree/v2.2.1
[ES6]: http://es6-features.org/



## Questions

На сайте [офицальной документации](about.bundle.js) сказано

```
  Babel uses very small helpers for common functions such as _extend. By default this will be added
  to every file that requires it. This duplication is sometimes unnecessary, especially when your
  application is spread out over multiple files.
```

* Когда и при каких услоавиях `babel` генерирует эти вспомогательные функции
  * https://babeljs.io/docs/plugins/transform-es2015-computed-properties/#example
    `{[val]: val}` -> `function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }({}, text + '_' + text, text)`

* Когда нужно подключать `babel-polyfill` (как я пониманию что мне нужен полифил?) смотрю [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/) для нужной мне фичи и если она не поддерживается где мне нужно, то уже тогда думаю о подключение полифила, так получается?
  * куда их подключать (создать в `webpack.config` `entry` `common`?) и там перечислить то что нужно `common: ['a', 'b', 'c']`
  * как сделать так, чтобы они не аффектили, те случаи, когда в окружение уже есть нужный мне функционал
  * можно ли как-то научить `babel` автоматически распозновать какие полифилы мне нужны




Получаем дублирование кода


(i used `diff` that highlight lines, on the case code didn't have `-` symbols)
<details>
<summary>```/******/ (function(modules) { // webpackBootstrap```</summary>
```js
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
```
</details>
```diff
  /******/ ([
  /* 0 */
  /* exports provided: welcome */
  /* exports used: welcome */
  /*!************************!*\
    !*** ./app/welcome.js ***!
    \************************/
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = welcome;
- function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function welcome(text) {
      return _defineProperty({}, text + '_' + text, text);
  }

  /***/ }),
  /* 1 */,
  /* 2 */
  /* unknown exports provided */
  /* all exports used */
  /*!*********************!*\
    !*** ./app/home.js ***!
    \*********************/
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcome__ = __webpack_require__(/*! ./welcome */ 0);
- function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



  var x = 'x';
  var y = 'y';
  console.log('welcome: ', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__welcome__["a" /* welcome */])('home'), _defineProperty({}, x + '_' + y, '???'));

  /***/ })
  /******/ ]);
  //# sourceMappingURL=home.bundle.js.map
```
