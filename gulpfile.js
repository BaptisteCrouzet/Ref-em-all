'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./assets/styles/main.scss')

        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS({
            debug: true,
            level: 2
        }, (details) => {
            console.log(`${details.name} Original size : ${details.stats.originalSize}`);
            console.log(`${details.name} Minified size : ${details.stats.minifiedSize}`);
            console.log(`${details.name} time spent in compiling : ${details.stats.timeSpent}ms`);
            console.log(`${details.name} Errors : ${details.errors}`);
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    })
    gulp.watch('./assets/styles/*.scss', gulp.series('sass'));
    gulp.watch("**/*.*").on('change', browserSync.reload);
});