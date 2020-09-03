const gulp = require('gulp');
const sass = require('gulp-sass');
const run = require('gulp-run'); 
const browserSync = require('browser-sync').create();

const siteRoot = '_site';
const shellCommand = 'bundle exec jekyll build --config _config.yml';


gulp.task('sass', () => {
    return gulp.src('./_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_site/css'));
});

gulp.task('build:jekyll',()=> {    
    return gulp.src('.', {allowEmpty: true})
      .pipe(run(shellCommand))
      .on('error', console.log);
  });

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('default', gulp.series(['build:jekyll','sass','serve']));

