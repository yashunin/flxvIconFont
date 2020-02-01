const webfontsGenerator = require('webfonts-generator');
var fs = require('fs');

function build(cb) {
  var allIcons = [];
  var htmlIcons = [];

  fs.readdir('icons', function (err, items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].match('.svg')){
        allIcons.push('icons/' + items[i])
        htmlIcons.push(items[i].substring(0, items[i].length - 4) + ' flxvIcon')  
      }
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
    }, function (error, result) {
      if (!error) {
          // result.eot, result.ttf, result.svg etc - generated fonts
        cb();
      }
    })

  });
};

exports.default = build;