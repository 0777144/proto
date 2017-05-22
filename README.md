# Proto

## Getting Started

запускаем MongoDB указывая на папку database как хранилище.
И что бы файлы были маленькими передаем параметр --smallfiles,
хотя даже в таком случае MongoDB будет хранить логи размером 200МБ
в папке ./storage/database/journal

### Start a MongoDB Server
```bash
mongod --dbpath storage/database --smallfiles
```

### Install dependencies

```bash
git clone https://github.com/0777144/proto && cd proto
```

### Environment Configuration
```
cp .env.example .env
```

### Start a Node.js server

```
npm install
npm run server
```

or

```
yarn && yarn server
```

## Features

* [webpack 2.2.1]
* JavaScript [ES6] syntax
* [React]
* [CSS Modules] and [SASS] syntax
* [webpack clean plugin]


[webpack 2.2.1]: https://github.com/webpack/webpack/tree/v2.2.1
[ES6]: http://es6-features.org/
[React]: https://github.com/facebook/react
[CSS Modules]: https://github.com/webpack-contrib/css-loader#css-modules
[SASS]: http://sass-lang.com/guide
[webpack clean plugin]: https://github.com/johnagan/clean-webpack-plugin
