var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', function () {
  browserSync.init({
    server: './',
  });

  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp
    .src('./scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('sass', 'serve'));
