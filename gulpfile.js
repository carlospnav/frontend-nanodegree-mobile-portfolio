var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    responsive = require('gulp-responsive-images');

gulp.task('htmlmin', function(){
  return gulp.src('src.index.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(rename('index.html'))
  .pipe(gulp.dest('./'));
});

gulp.task('cssmin', function(){
  return gulp.src('src/css/print.css')
  .pipe(cleanCss())
  .pipe(rename('print.min.css'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('jsmin', function(cb){
  pump([
    gulp.src('src/js/perfmatters.js'),
    uglify(),
    rename('perfmatters.min.js'),
    gulp.dest('dist/js')
  ], 
    cb
  );
});

gulp.task('images', function(){
  gulp.src('src/img/**/*.*')
    .pipe(responsive({
      '**/*.*': [{
        width: 120,
        suffix: '-sm',
        quality: 75
      }]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['htmlmin', 'jsmin', 'cssmin']);
