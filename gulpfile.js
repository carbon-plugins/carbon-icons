const gulp 					= require('gulp');
const sass 					= require('gulp-sass')(require('sass'));
const size 					= require('gulp-size');
const sort 					= require('gulp-sort');
const notify 				= require('gulp-notify');
const rename 				= require('gulp-rename');
const postcss 			= require('gulp-postcss');
const sourcemaps 		= require('gulp-sourcemaps');
const zip 					= require('gulp-zip');
const clean 				= require('gulp-clean');
const mode 					= require('gulp-mode')();
const pjson 				= require('./package.json');
const version				= pjson.version;
const isProduction 	= mode.production();
const dest 					= '../plugins/carbon-icons';
const build 				= isProduction ? './dist/' : './build/'
const copyPath 			= isProduction ? './dist/**/*' : './build/**/*'

gulp.task('php', function () {
	const s = size({showTotal: false});
	return gulp
		.src(['./**/*.php', '!./src/**/*.php', '!./node_modules/**/*.php', '!./build/**/*.php', '!./dist/**/*.php'])
		.pipe(sort())
		.pipe(gulp.dest( build ))
		.pipe(
			notify({
				message:() => `✅ Wordpress - completed`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
});

gulp.task('languages', function () {
	const s = size({showTotal: false});
	return gulp
		.src(['./languages/**/*.{mo,po,pot,json}'])
		.pipe(sort())
		.pipe(gulp.dest( dest + "/languages/" ))
		.pipe(
			notify({
				message:() => `✅ Files - completed`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
});

gulp.task('copy', function () {
	return gulp
		.src( copyPath )
		.pipe(sort())
		.pipe(gulp.dest( dest ))
		.pipe(
			notify({
				message:() => `✅ Copy Build - completed`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
});

gulp.task('styles', function () {
	const s = size({showTotal: false});
	return gulp.src([
			'./admin/assets/carbon-icons-gutenberg.scss',
			'./admin/assets/carbon-icons-dashboard.scss',
			'./admin/assets/carbon-icons-admin.scss'
		], {allowEmpty: true})
		.pipe(mode.development(sourcemaps.init()))
		.pipe(
			sass({
				outputStyle: 'compressed',
				errLogToConsole: true
			})
			.on('error', sass.logError)
		)
		.pipe(mode.production(postcss()))
		.pipe(mode.development(sourcemaps.write('.')))
		.pipe(s)
		.pipe(rename( {suffix: '.min'} ))
		.pipe(gulp.dest( build + '/admin/assets/' ))
		.pipe(
			notify({
				message:() => `✅ Styles - completed : ${s.prettySize}`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		)
});

gulp.task('assets', function () {
	return gulp
		.src('./assets/**/*')
		.pipe(gulp.dest( build + '/assets/' ))
		.pipe(
			notify({
				message:() => `✅ Assets - completed`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
});

gulp.task('readme', function () {
	return gulp
		.src('./readme.txt')
		.pipe(sort())
		.pipe(gulp.dest( build ))
		.pipe(
			notify({
				message:() => `✅ Readme - completed`,
				onLast: true,
				notifier: function (options, callback) {
					callback();
				}
			})
		);
});

gulp.task('clean', function () {
	return gulp.src( [build, dest], { read: false, allowEmpty: true } )
		.pipe(clean({force: true}));
});

gulp.task('zip', function () {
	return gulp.src( './dist/**/*' )
		.pipe(zip(`carbon-icons-${version}.zip`))
		.pipe(gulp.dest('./zips'))
});

gulp.task('default', gulp.series('styles', 'php', 'copy', 'languages',  () => {
		gulp.watch(['./build/**/*'], 																														gulp.series('copy'));
		gulp.watch(['./languages/**/*'], 																												gulp.series('languages'));
		gulp.watch(['./admin/**/*.php','./includes/**/*.php', './*.php','!./build/**/*.php'], 	gulp.series('php'));
		gulp.watch(['./admin/assets/*.scss'], 																									gulp.series('styles'));
	})
);

gulp.task( 'build', gulp.series('styles', 'php', 'assets', 'languages', 'readme' ))
