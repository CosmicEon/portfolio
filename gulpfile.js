const gulp = require('gulp');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const deporder = require('gulp-deporder');
// const htmlclean = require('gulp-htmlclean');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const dir = {
    src: './src/',
    dest: './dist/',
};

/* html */
gulp.task('html:main', () => {
    return gulp.src('./*.html')
        .pipe(changed('./'))
        // .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('html:static', () => {
    return gulp.src(dir.src + 'modules/**/*.html')
        .pipe(changed(dir.dest + 'modules/'))
        // .pipe(uglify())
        .pipe(gulp.dest(dir.dest + 'modules/'));
});

/* css */
gulp.task('sass', () => {
    return gulp.src([dir.src + 'styles/sass/**/*scss', dir.src + 'styles/sass/**/*.sass'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dir.dest + 'css'));
});

/* js */
gulp.task('js', () => {
    return gulp.src(dir.src + 'scripts/**/*')
        .pipe(babel({
            presets: ['@babel/env'],
        }))
        .pipe(deporder()) // reads dependencies on js files
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dir.dest + 'scripts/'));
});

/* assets */
gulp.task('assets:fonts', () => {
    return gulp.src(dir.src + 'assets/fonts/*.*')
        .pipe(changed(dir.dest + 'assets/fonts/'))
        .pipe(gulp.dest(dir.dest + 'assets/fonts/'));
});

gulp.task('assets:images', () => {
    return gulp.src(dir.src + 'assets/images/**/*')
        .pipe(changed(dir.dest + 'assets/images/'))
        .pipe(gulp.dest(dir.dest + 'assets/images/'));
});

gulp.task('assets', ['assets:fonts', 'assets:images']);

/* watch */
gulp.task('dev:watch', () => {
    gulp.watch('./*.html', ['html:main']);
    gulp.watch(dir.src + 'modules/**/*', ['html:static']);
    gulp.watch(dir.src + 'styles/**/*', ['sass']);
    gulp.watch(dir.src + 'scripts/**/*', ['js']);
});

gulp.task('dev', ['dev:watch', 'assets']);
