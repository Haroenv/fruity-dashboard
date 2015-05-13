var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync'),
    sftp = require('gulp-sftp');

var build_dir = './build_dist/';

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('img/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true })
    ))
    .pipe(gulp.dest('images/'));
});

gulp.task('styles', function(){
  gulp.src('./scss/**/*.scss')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function(){
  return gulp.src('js/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('build', function () {
	gulp.src('./index.html')
		.pipe(gulp.dest(build_dir));
	gulp.src('./css/screen.min.css')
		.pipe(gulp.dest(build_dir + 'css/'));
	gulp.src('./js/script.min.js')
		.pipe(gulp.dest(build_dir + 'js/'));
	gulp.src('./img/*')
		.pipe(gulp.dest(build_dir + 'img/'));
});

gulp.task('push', ['build'], function () {
  return gulp.src(['./build_dist/**/*'])
    .pipe(sftp({
      host: "raspi.local",
      user: "pi",
      pass: "raspberry",
      remotePath: "/var/www"
    }));
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch("scss/**/*.scss", ['styles']);
  gulp.watch("js/**/*.js", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
  gulp.watch("css/screen.css", ['bs-reload']);
});
