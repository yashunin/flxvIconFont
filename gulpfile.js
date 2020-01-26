
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
      files: allIcons,
      fontHeight: 1000,
      templateOptions: {
        classPrefix: 'flxvIcon-',
        baseSelector: '.flxvIcon',
        // classPrefix: 'iconfont-',
        // baseSelector: '.iconfont',
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

        fs.unlink('dist/iconfont.svg', (err) => {
          console.log('dist/iconfont.svg was deleted');
        })
        fs.unlink('dist/iconfont.ttf', (err) => {
          console.log('dist/iconfont.ttf was deleted');
        })
      }
    })

  });

  done()
});

