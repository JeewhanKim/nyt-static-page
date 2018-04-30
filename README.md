# NYT Website using provided JSON

The basic structure for react with webpack and gulp boilerplate.

#### Requirements
Node ver 4.0.0+
- This code is written in ES6 including `gulpfile.js`. 

To check your node version weather supports ES6 - V8 engine:
```sh
node -p process.versions.v8
```

#### Folder Structure
- `/src/view-controller` --- React components
- `/src/view/` --- static html files
- `/src/js/` --- other JS libraries & plugins, etc
- `/dist/` --- generated folder for dev server & production

#### Basic Usage

### Installation

```sh
# NPM
npm install 
```

### Gulp

Gulp dev supports local web server. 
Gulp Prod generates static contents as well as the bundled JS/CSS file.

```sh
gulp
```

```sh
gulp prod
```