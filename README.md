# Proto

## Getting Started

### Clone repo

```bash
git clone https://github.com/0777144/proto && cd proto
```


### Start a MongoDB Server

запускаем MongoDB указывая на папку database как хранилище.
И что бы файлы были маленькими передаем параметр --smallfiles,
хотя даже в таком случае MongoDB будет хранить логи размером 200МБ
в папке ./storage/database/journal

```bash
mongod --dbpath storage/database --smallfiles
```


### Configure environment

```bash
cp .env.example .env
```


### Install dependencies

```
npm install
```

or

```bash
yarn
```


### Start a Node.js server

```bash
npm run server
```

or

```bash
yarn server
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
