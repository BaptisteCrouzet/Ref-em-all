'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');
const responsive = require('gulp-responsive');
const concat = require('gulp-concat');

sass.compiler = require('node-sass');

// Optimisation for sass files in dev
gulp.task('sass', function () {
    return gulp.src('./assets/styles/*.scss')
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
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

// Optimize images
gulp.task('images-optimize', function () {
    return gulp
        .src('./assets/images/*')
        .pipe(
            responsive(
                {
                    // Resize all JPG images different sizes and extensions
                    '*.jpg': [
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1920'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1440'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1366'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.jpg',
                                suffix: '-980'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.jpg',
                                suffix: '-500'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1920'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1440'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1366'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.jpg',
                                suffix: '-980'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.jpg',
                                suffix: '-500'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.webp',
                                suffix: '-1920'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.webp',
                                suffix: '-1440'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.webp',
                                suffix: '-1366'
                            },
                            format: 'webp'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.webp',
                                suffix: '-980'
                            },
                            format: 'webp'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.webp',
                                suffix: '-500'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1920'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1440'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.jpg',
                                suffix: '-1366'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.jpg',
                                suffix: '-980'
                            },
                            format: 'jpeg'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.jpg',
                                suffix: '-500'
                            },
                            format: 'jpeg'
                        },
                        {
                            // Compress, strip metadata, and rename original image
                            rename: { suffix: '-original' }
                        }
                    ],
                    // Resize all PNG images to be retina ready
                    '*.png': [
                        {
                            width: 1920,
                            rename: {
                                extname: '.png',
                                suffix: '-1920'
                            }
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.png',
                                suffix: '-1440'
                            }
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.png',
                                suffix: '-1366'
                            }
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.png',
                                suffix: '-980'
                            }
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.png',
                                suffix: '-500'
                            }
                        },
                        {
                            width: 1920,
                            rename: {
                                extname: '.webp',
                                suffix: '-1920'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1440,
                            rename: {
                                extname: '.webp',
                                suffix: '-1440'
                            },
                            format: 'webp'
                        },
                        {
                            width: 1366,
                            rename: {
                                extname: '.webp',
                                suffix: '-1366'
                            },
                            format: 'webp'
                        },
                        {
                            width: 980,
                            rename: {
                                extname: '.webp',
                                suffix: '-980'
                            },
                            format: 'webp'
                        },
                        {
                            width: 500,
                            rename: {
                                extname: '.webp',
                                suffix: '-500'
                            },
                            format: 'webp'
                        },
                        {
                            // Compress, strip metadata, and rename original image
                            rename: { suffix: '-original' }
                        }
                    ]
                },
                {
                    // Global configuration for all images
                    // The output quality for JPEG, WebP and TIFF output formats
                    quality: 75,
                    // Use progressive (interlace) scan for JPEG and PNG output
                    progressive: true,
                    // Strip all metadata
                    withMetadata: false,
                    // Compression level for PNG
                    compressionLevel: 7,

                    // No Error !
                    errorOnEnlargement: false,
                    errorOnUnusedConfig: false,
                    errorOnUnusedImage: false
                }
            )
        )
        .pipe(gulp.dest('dist/images'));
});

// Watch task
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    })
    gulp.watch('./assets/styles/*.scss', gulp.series('sass'));
    gulp.watch('./assets/images/*', gulp.series('images-optimize'));
    gulp.watch("**/*.*").on('change', browserSync.reload);
});