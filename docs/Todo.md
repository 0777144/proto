# Todo

* ~~[tree-shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html)~~ Just use `import` and `export`, and when build use `webpack --optimize-minimize` option
* server rendering (isomorphic) https://github.com/RickWong/react-isomorphic-starterkit
* redux? https://github.com/erikras/react-redux-universal-hot-example
* [postcss-scss](https://github.com/postcss/postcss-scss)
* [fontgen](https://github.com/DragonsInn/fontgen-loader/) Разобраться с лоадером иконочных шрифтов
  * https://shellmonger.com/2016/01/22/working-with-fonts-with-webpack/
  * https://github.com/sunflowerdeath/webfonts-generator
  * Что лучше использовать? иконочный шрифт или спарйты
* Вынести в `common`: `react`, `react-dom`
* Вынести полифилы в один файл babel-loader?optional[]=runtime?
https://babeljs.io/docs/plugins/transform-runtime/
* NoErrorsPlugin
* bundle-loader - понять как работает и почему там используется метод `pitch`
* HRM
 * Почему и как работает
* router
* docs
* Подумать над структурой директорий ([mern])
* 


[webpack 2.2.1]: https://github.com/webpack/webpack/tree/v2.2.1
[ES6]: http://es6-features.org/
[React]: https://github.com/facebook/react
[CSS Modules]: https://github.com/webpack-contrib/css-loader#css-modules
[SASS]: http://sass-lang.com/guide
[webpack clean plugin]: https://github.com/johnagan/clean-webpack-plugin
[mern]: http://mern.io/
