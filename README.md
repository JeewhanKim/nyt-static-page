# NYT Project: Create Static Web App using JSONP
Creates new web contents from a JSONP file. Budnle your app using `Gulp`, `Browserify`, and `gulp-scss`.

## Getting Started

### Dependencies
- This code is written in ES6 including `gulpfile.js`. Node ver 4+ is required.
- Install npm dependencies
```sh
# NPM
npm install 
```
This downloads all dependencies listed in package.json including Gulp.

### Quick Start
You can simply just open the `dist/index.html` file to see the bundled app.

Run gulp and it will bundle your resources and open your browser with the url: http://localhost:8080/dist/index.html
```sh
gulp
```

## Folder Structure
- `/src/index.html` --- static index html
- `/src/js/` --- JS library (jQuery 2.2.4), main app JS
- `/src/style/` --- main SCSS file folder
- `/dist/` --- generated folder for dev server & production

## Developer Note
