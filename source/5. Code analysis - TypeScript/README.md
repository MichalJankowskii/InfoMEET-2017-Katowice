# Angular 1.x + TypeScrip + Webpack

### Install & start

```sh
npm i webpack typings typescript -g
npm install
npm start
```

Then it will automatically open the app in your browser

# Tests
Located in *.spec.ts files.


To run tests

```sh
npm test
```
Others:
- use angular.mock.module("moduleName") since module is keyword in typescript
- Open adress founded in npm test output and click Debub - Karma v0.13.22 server started at http://localhost:9876/)


# Build

Build
```sh
npm install
npm run build
```
# TSLint install
```sh
npm install tslint typescript -g
```

# Features

- Build basic Angular app with webpack
- sass support
- Typescript support
- ES6 modules support
- Running tests in PhantomJS
- Wallaby.js support
- Karma support
- Optimized build package
- Minimal and straightforward setup
- Watches code and refreshes browser with latest changes automatically
- Sourcemap support in develop AND PRODUCTION!!! (don't deploy the js.map file with your application, but use it to debug your production app)

Based on: [https://github.com/brechtbilliet/angular-typescript-webpack](https://github.com/brechtbilliet/angular-typescript-webpack)