
const gulp = require('gulp');
const webfontsGenerator = require('webfonts-generator');
var fs = require('fs');


gulp.task('Iconfont', function (done) {

  var allIcons = []
  fs.readdir('icons', function (err, items) {
    console.log(items);

    for (var i = 0; i < items.length; i++) {
      allIcons.push('icons/' + items[i])
      console.log(items[i]);
    }

    webfontsGenerator({
      files: allIcons,
      fontHeight: 1000,
      templateOptions: {
        classPrefix: 'iconfont-',
        baseSelector: '.iconfont'
      },
      dest: 'dest/',
    }, function (error) {
      if (error) {
        console.log('Fail!', error);
      } else {
        console.log('Done!');
      }
    })
  });

  done()
});

