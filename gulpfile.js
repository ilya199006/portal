var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	htmlInjector = require('bs-html-injector');

gulp.task('sass', function(){
	return gulp.src('sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.reload({
 		stream: true
 	}))
});

gulp.task('browserSync', function() {
  browserSync.use(htmlInjector, {
        files: "*.html"
    });
    browserSync.init({
    	open: false,
        server: ""
    });
});

gulp.task('watch', ['browserSync', 'sass'], function (){
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('*.html', browserSync);
	gulp.watch('js/*.js', browserSync);
});