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

