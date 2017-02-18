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



## Problem/Questions

На сайте [офицальной документации](about.bundle.js) сказано

```
  Babel uses very small helpers for common functions such as _extend. By default this will be added
  to every file that requires it. This duplication is sometimes unnecessary, especially when your
  application is spread out over multiple files.
```

* **Когда и при каких услоавиях `babel` генерирует эти вспомогательные функции**
  * Например, в случае использования [`Computed property names`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer)
    [Пример из документации babel](https://babeljs.io/docs/plugins/transform-es2015-computed-properties/#example)

Для следующего кода, будет создана функция хелпер `_defineProperty`

```js
{[val]: val}
```

И в результате получится

```js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
_defineProperty({}, text + '_' + text, text);
```

* **Когда нужно подключать `babel-polyfill` (как я пойму, что мне нужен полифил?)**
  * Посмотреть [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/) для нужного мне функционала, и если таковой не поддерживается в нужном мне окружении, то уже тогда думаю о подключение полифила, так получается?
  * куда их подключать (создать в `webpack.config` `entry` `common`?) и там перечислить то, что нужно `common: ['a', 'b', 'c']`
  * как сделать так, чтобы они не аффектили, те случаи, когда в окружение уже есть нужный мне функционал
  * можно ли как-то научить `babel` автоматически распозновать какие полифилы мне нужны


## Solution/Investigation 🔦

Получаем дублирование кода

(I used `diff` that highlight lines, on the case code didn't have `-` symbols)
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


Теперь сделаем сборку с [`babel-plugin-transform-runtime`](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime).
Для этого, как сказанно в [документации](https://babeljs.io/docs/plugins/transform-runtime/#installation), нужно добавить `babel-plugin-transform-runtime` в зависимости:

```bash
npm install --save-dev babel-plugin-transform-runtime
```

И указать в `.babelrc` `"plugins": ["transform-runtime"]`. После этих манипуляций мой `.babelrc` выглядит так:

```json
{
  "presets": [
    [ "es2015", {"modules": false}]
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

Небольшое отступление... Как я понял, `babel-runtime` необязательно ставить в `dependency` (_"as a production dependency"_ - как сказано в документации), просто это семантически верно, т.к. именно код из `babel-runtime` попадает в сборку, а вообще `babel-runtime` устанавливается как зависимость для `babel-core` и для `babel-plugin-transform-runtime` соответственно. (да и вообще для всех `babel-*` пакетов (попробуйте `grep -R --include=package.json babel-runtime node_modules`)). А также `babel-runtime` имеет в `devDependency` `babel-plugin-transform-runtime`.


В результате сборки у меня получились такие diff'ы: [about-with-without.diff](builds/about-with-without.diff) и, **наиболее интересный (потому что имеено тут было дублирование кода) [home-with-without.diff](builds/home-with-without.diff)** (можно заметить, что теперь мы избежали дублирования кода, но зато, появился какой-то лишний)

Результаты сборки:
* **without transform runtime**
  ![](without-transform-runtime.png)
* **with transform runtime**
  ![](with-transform-runtime.png)



Теперь немного поэксперементируем со сборкой...

За нужное нам преобразование отвечает [`babel-plugin-transform-es2015-computed-properties`](https://babeljs.io/docs/plugins/transform-es2015-computed-properties), подключим только его и убедимся, что результат соответсвует тому, как если бы подключили `babel-preset-es2015` содержащий этот плагин. Тогда `.babelrc` будет выглядеть следующим образом

```json
{
  "plugins": [
    ["transform-es2015-computed-properties"]
  ]
}
```

Как и ожидалось в коде появилось дублирование `_defineProperty`

```js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
```

Посмотрим как еще можно от этого избавиться...

У этого плагина [`babel-plugin-transform-es2015-computed-properties`](https://babeljs.io/docs/plugins/transform-es2015-computed-properties) есть параметр `loose`, который указывает использовать упрощенный синтаксис, менее соответвующей спецификации ES6 ([можно почитать тут](http://www.2ality.com/2015/12/babel6-loose-mode.html)). Получаются следующие преобразования:

Код модуля `welcome` до преобразований

```js
export function welcome(text) {
    return {[text + '_' + text]: text};
}
```

Код модуля `welcome` **без использования** флага `loose`

```js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function welcome(text) {
    return _defineProperty({}, text + '_' + text, text);
}
```

Код модуля `welcome` **c использованием** флага `loose`

```js
function welcome(text) {
    var _ref;

    return _ref = {}, _ref[text + '_' + text] = text, _ref;
}
```

Итого, мы избавились от дублирования, код стал проще, но не значит лучше, теперь он не совсем соответсвует спецификации, и это не в нашу пользу, в теории могут какие-то сайд эффекты.

И все же, вот список плагинов поддерживающих `loose`

* [transform-es2015-classes](http://babeljs.io/docs/plugins/transform-es2015-classes)
* [transform-es2015-computed-properties](http://babeljs.io/docs/plugins/transform-es2015-computed-properties)
* [transform-es2015-for-of](http://babeljs.io/docs/plugins/transform-es2015-for-of)
* [transform-es2015-spread](http://babeljs.io/docs/plugins/transform-es2015-spread)
* [transform-es2015-destructuring](http://babeljs.io/docs/plugins/transform-es2015-destructuring)
* [transform-es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs)
* [transform-es2015-modules-systemjs](http://babeljs.io/docs/plugins/transform-es2015-modules-systemjs)
* [transform-es2015-modules-amd](http://babeljs.io/docs/plugins/transform-es2015-modules-amd)
* [transform-es2015-modules-umd](http://babeljs.io/docs/plugins/transform-es2015-modules-umd)


Кстати, при следующей конфигурации `.babelrc` в сборку так же не попадут никакие helper'ы babel, потому необходимые пребразования выполнены с флагом `loose`, а соответвенно helper'ов для них не нужно. Полезная возможность точечно указать к каким плагинам, какие параметры применять.

```json
{
  "presets": [
    [ "es2015", {"modules": false}]
  ],
  "plugins": [
    ["transform-runtime"],
    ["transform-es2015-computed-properties", {
      "loose": true
    }]
  ]
}
```

