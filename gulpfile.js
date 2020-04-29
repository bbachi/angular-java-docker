const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const log = require('fancy-log');

const paths = {
  angular_src: 'src/main/ui/dist/**/*',
  angular_dist: 'src/main/resources/static/'
};

function clean()  {
  log('removing the old files in the directory')
  return del('src/main/resources/static/**', {force:true});
}

function copyAngularCodeTask() {
  log('copying Angular code into the directory')
  return src(`${paths.angular_src}`)
        .pipe(dest(`${paths.angular_dist}`));
}

exports.default = series(
  clean,
  copyAngularCodeTask
);