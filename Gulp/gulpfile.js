const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const stripJs = require('gulp-strip-comments');
const stripCss = require('gulp-strip-css-comments');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel')


function tarefasCSS() {
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './vendor/owl/css/owl.css',
            './src/css/style.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

function tarefasJS() {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './src/js/custom.js'
        ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        // .pipe(uglify()) //
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
}


async function tarefasImagem() {
    const image = (await import('gulp-image')).default;
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'));
}


function tarefasHTML() {
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasImagem;
exports.html = tarefasHTML;
exports.default = gulp.parallel(tarefasCSS, tarefasJS, tarefasHTML);
