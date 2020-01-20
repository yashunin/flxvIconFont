'use strict';

const gulp = require('gulp');


var svgicons2svgfont = require('gulp-svgicons2svgfont');

gulp.task('Iconfont', function(){
    svgicons2svgfont(['assets/icons/*.svg'], {
      fontName: 'myfont'
    })
    .on('glyphs', function(glyphs) {
      console.log(glyphs);
      // Here generate CSS/SCSS  for your glyphs ...
    })
    .pipe(gulp.dest('www/font/'));
});

