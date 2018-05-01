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

#### Javascript
Please note that I have implemented this mostly vanilla Javascript, but for some DOM selectors & click events were built with jQuery 2.2.0 to make it simple & cross-browser compatibility.
In terms of the 'Martian' launguage translation, please see the module in `src/js/controllers/_generate.js`. I commented it every single logic and tried to meet all criteria.

#### HTML & Static Files
Simple, symantic HTML structure was considered. Used the NYT SVG logo file from nytime.com. Generated image source urls are imported from JSON's `square320` URLs. If that's not available, it imports `thumb` value instead. In this particular example, two of images are blurry as we do not have `square320` of the articles.

#### SCSS
I have implemeneted simple mixin to generate media queries in a simple way which is in `/src/style/mixin/_mixin.scss`.
I did not include external web font files and tried not to use too many style files & lines for the code's simplicity.
