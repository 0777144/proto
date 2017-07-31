# Todo

* https://github.com/th0r/webpack-bundle-analyzer
* ~~tree-shaking~~
* SSR (isomorphic) [react-isomorphic-starterkit]
* ~~redux~~
* [fontgen](https://github.com/DragonsInn/fontgen-loader/) Разобраться с лоадером иконочных шрифтов
  * https://shellmonger.com/2016/01/22/working-with-fonts-with-webpack/
  * https://github.com/sunflowerdeath/webfonts-generator
  * Что лучше использовать? иконочный шрифт или спарйты
* Вынести в `common`: `react`, `react-dom`
* Вынести babel-polyfill в отдельный бандл и transform-runtime
* ~~HRM~~
* ~~ReactRouter~~ Router5?
* Docs
* Подумать над структурой директорий ([mern])
* еslint + eslint warrnings при сборке вебпаком
* [webpack-common-shake]
* [webpack-manifest-plugin]
* CSS in JS
  * [styled-jss]
  * [babel-plugin-styled-jss]
  * [jss]
  * [react-css-modules]
  * https://css-tricks.com/css-modules-part-3-react/
  * [recompose] [why-the-hipsters-recompose-everything]
* Попробовать [rebass] [rebass-recomposed]
* Сделать анимация поиска как на scotch.io
* `new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ru/),`
* ~~postcss scss~~
* stylelint
* check unused dependencies!!!
* оптимизация сборки https://survivejs.com/webpack/optimizing/performance/
* авторизация https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
* postcss plugin order?
* bundle favicons
  * https://medium.com/tech-angels-publications/bundle-your-favicons-with-webpack-b69d834b2f53
  * https://github.com/jantimon/favicons-webpack-plugin

[webpack 2.2.1]: https://github.com/webpack/webpack/tree/v2.2.1
[ES6]: http://es6-features.org/
[React]: https://github.com/facebook/react
[CSS Modules]: https://github.com/webpack-contrib/css-loader#css-modules
[SASS]: http://sass-lang.com/guide
[webpack clean plugin]: https://github.com/johnagan/clean-webpack-plugin
[mern]: http://mern.io/
[react-isomorphic-starterkit]: https://github.com/RickWong/react-isomorphic-starterkit
[webpack-common-shake]: https://github.com/indutny/webpack-common-shake
[styled-jss]: https://github.com/cssinjs/styled-jss
[babel-plugin-styled-jss]: https://github.com/lttb/babel-plugin-styled-jss
[jss]: https://github.com/cssinjs/jss
[react-css-modules]: https://github.com/gajus/react-css-modules
[webpack-manifest-plugin]: https://github.com/danethurber/webpack-manifest-plugin
[recompose]: https://github.com/acdlite/recompose
[why-the-hipsters-recompose-everything]: https://medium.com/javascript-inside/why-the-hipsters-recompose-everything-23ac08748198
[rebass]: https://github.com/jxnblk/rebass
[rebass-recomposed]: https://github.com/jxnblk/rebass-recomposed
