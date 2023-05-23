// 处理css命名空间
var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
const myNamespace = 'theme-dark' //只需要修改这一行
gulp.task('css-wrap', function () {
  return (
    gulp
      .src(path.resolve(`./theme/${myNamespace}/index.css`))
      /* 找需要添加命名空间的css文件，支持正则表达式 */
      .pipe(
        cssWrap({
          selector: `.${myNamespace}` /* 添加的命名空间 */,
        })
      )
      .pipe(cleanCSS())
      .pipe(gulp.dest(`src/style/element/${myNamespace}`))
  ) /* 存放的目录 */
})
