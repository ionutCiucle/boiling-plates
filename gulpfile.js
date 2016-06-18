const gulp = require('gulp');
const sass = require('gulp-sass');
const express = require('express');

gulp.task('sass', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('watch:sass', () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('dev:server', () => {
  const app = express();
  const port = 6900;

  app.use('/static', express.static(__dirname + '/build'));
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
  });
  app.listen(port, () => {
    console.log('Server listening on port ' + port);
  });
});

gulp.task('default', ['sass', 'watch:sass', 'dev:server']);