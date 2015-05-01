var gulp   = require('gulp'),
    bs     = require('browser-sync'),
    minify = require('gulp-minify-css'),
    sftp   = require('gulp-sftp'),
    sass   = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest('./css/'));
});

gulp.task('serve', function(){
  bs.init({
    server: {
      basedir: './'
    }
  });
});

gulp.task('build', function () {
  gulp.src('./css')
    .pipe(gulp.dest('./build/'));
  gulp.src('./index.html')
    .pipe(gulp.dest('./build'));
  gulp.src('./img')
    .pipe(gulp.dest('./build'));
  gulp.src('./*.png')
    .pipe(gulp.dest('./build'));
  gulp.src('./lib')
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['sass'], function(){
  gulp.watch('./scss/*.scss', ['sass']);
});
