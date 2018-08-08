var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function() {
  gulp.src('./components/source/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./components/source/css'));
});

gulp.task('uglify', function() {
  gulp.src('./themes/custom/drupalcamp/libs/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./themes/custom/drupalcamp/js'))
});



gulp.task('watch', function() {
  gulp.watch('./components/source/sass/*.scss', ['sass']);
  gulp.watch('./themes/custom/drupalcamp/libs/*.js', ['uglify']);
});
