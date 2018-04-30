
const gulp = require('gulp')
// const webpack = require('webpack-stream')

gulp.task('default', () =>  {
  gulp.start('dev');
});

gulp.task('dev', () => {
//   return gulp.start('build-react')
})

// gulp.task('build-html', () => {
//   return gulp.src('./src/view/*.html')
//   .pipe(gulp.dest('./dist/'))
// })

// gulp.task('build-react', () => {
//   return gulp.src('./src/index.jsx')
//   .pipe(webpack(require('./webpack.config.js')))
//   .pipe(gulp.dest('./dist/js/'))
// })

// gulp.task('prod', () => {
//   return gulp.src('./src/index.jsx')
//   .pipe(webpack(require('./webpack.prod.config.js')))
//   .pipe(gulp.dest('./dist/js/'))
// })