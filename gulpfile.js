const { parallel } = require('gulp');
const webfontsGenerator = require('webfonts-generator');
const fs = require('fs');

function makeFont (svgDir, outDir){
  var allIcons = [];
  var htmlIcons = [];

  fs.readdir(svgDir, function (err, items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].match('.svg')){
        allIcons.push(svgDir + '/' + items[i])
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
      dest: outDir,
    }, function (error, result) {
      if (!error) {
          // result.eot, result.ttf, result.svg etc - generated fonts
      }
    })

  });



};

function buildFliksov(cb) {
  const dirName = 'iconsFeliksov';
  const dirDestination = 'fontFeliksov';

  makeFont(dirName, dirDestination);
  
  cb();
}

function buildViritsa(cb) {
  const dirName = 'iconsViritsa';
  const dirDestination = 'fontViritsa';

  makeFont(dirName, dirDestination);
  
  cb();
}

exports.buildFliksov = buildFliksov;
exports.buildViritsa =buildViritsa;
exports.default = parallel(buildFliksov, buildViritsa);