var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename');

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
  .pipe(gulp.dest('dist'));
});

gulp.task('jsmin', function(cb){
  pump([
    gulp.src('src/js/perfmatters.js'),
    uglify(),
    rename('perfmatters.min.js'),
    gulp.dest('dist')
  ], 
    cb
  );
});

gulp.task('build', ['htmlmin', 'jsmin', 'cssmin']);
