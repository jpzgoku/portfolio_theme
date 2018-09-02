const gulp = require('gulp');
const settings = require('./settings');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');

// Logs message
gulp.task('default', ['imageMin', 'sass']);

// Optimize images
gulp.task('imageMin', function() {
    gulp.src('src/assets/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

// Compile SASS
gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(''))
});

// Watch Files
gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        proxy: settings.urlToPreview,
        ghostMode: false
    });

    gulp.watch('./**/*.php', function() {
        browserSync.reload();
    });
    gulp.watch('src/scss/*.scss', ['waitForStyles']);
    // gulp.watch(['js/modules/*.js', 'js/scripts.js'], ['waitForScripts']);
    gulp.watch(['src/**/*.vue', 'src/**/*.js'], ['waitForScripts']);
});

gulp.task('waitForStyles', ['sass'], function() {
    return gulp.src('style.css')
        .pipe(browserSync.stream());
});

gulp.task('waitForScripts', ['scripts'], function() {
    browserSync.reload();
});

gulp.task('scripts', function(callback) {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if (err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});
