
const gulp = require('gulp')
const modRewrite = require('connect-modrewrite')
const browserSync = require('browser-sync')
const gulpLoadPlugins = require('gulp-load-plugins')
const plugins = gulpLoadPlugins()
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

gulp.task('default', () =>  {
  gulp.start('dev')
})

gulp.task('dev', [
  'dev-sass',
  'dev-js',
  'dev-views',
], () => {gulp.start('dev-watch')})

gulp.task('dev-sass', () => {
  return gulp.src('./src/style/index.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      indentedSyntax: false,
      imagePath: 'images'
    }))
    .pipe(plugins.concat('style.css'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream:true}));
})

gulp.task('dev-js', () => {
  return browserify({entries: ['./src/js/index.js']})
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(plugins.babel({presets: ['es2015']}))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('dev-views', () => {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist/'))
})

gulp.task('dev-watch', ['dev-browserSync'], () => {
  gulp.watch('./src/index.html').on('change', () => gulp.start('dev-views'))
  gulp.watch('./src/js/**', ['dev-js'])
  gulp.watch('./src/style/**', ['dev-sass'])
})

gulp.task('dev-browserSync', () => {return browserSync(
  {
    port: 8080,
    server: {
      baseDir: './',
      middleware: [
         modRewrite([
           '(^[^\\.]*)$ /$1.html [L]'
         ])
      ],
      debug: true
    },
    startPath: "dist/index.html"
  }
)})
