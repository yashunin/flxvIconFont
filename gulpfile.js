
const gulp = require('gulp');
const webfontsGenerator = require('webfonts-generator');
var fs = require('fs');


gulp.task('Iconfont', function (done) {

  var allIcons = []
  var htmlIcons = []
  fs.readdir('icons', function (err, items) {
    console.log(items);

    for (var i = 0; i < items.length; i++) {
      if (items[i].match('.svg'))
        allIcons.push('icons/' + items[i])
      htmlIcons.push(items[i].substring(0, items[i].length - 4) + ' flxvIcon')
      console.log(items[i].substring(0, items[i].length - 4));
    }

    webfontsGenerator({
      fontName: 'flxvIconFont',
      files: allIcons,
      fontHeight: 1000,
      templateOptions: {
        classPrefix: 'flxvIcon-',
        baseSelector: '.flxvIcon',
        names: htmlIcons
      },
      order: ['woff'],
      types: ['woff'],
      html: true,
      dest: 'dist/',
    }, function (error) {
      if (error) {
        console.log('Fail!', error);
      } else {
        console.log('Done!');

        fs.unlink('dist/flxvIconFont.svg', (err) => {
          console.log('dist/flxvIconFont.svg was deleted');
        })
        fs.unlink('dist/flxvIconFont.ttf', (err) => {
          console.log('dist/flxvIconFont.ttf was deleted');
        })
      }
    })

  });

  done()
});

