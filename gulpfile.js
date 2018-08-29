const gulp = require("gulp"),
	sourcemaps = require("gulp-sourcemaps"),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCSS = require("gulp-clean-css"),
	csslint = require("gulp-csslint"),
	jshint = require("gulp-jshint"),
	jsStylish = require("jshint-stylish"),
	uglify = require("gulp-uglify"),
	notify = require("gulp-notify"),
	concat = require("gulp-concat"),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');
	deploy = require('gulp-gh-pages');

const PATHS = {
	HTML: {
		SRC: './src/*.html',
		DIST: './dist/'
	},
	// FRAMEWORK: {
	// 	SRC: './src/framework/**/*.js',
	// 	DIST: './dist/js/'
	// },
	JS: {
		SRC: './src/script/**/*.js',
		DIST: './dist/script/'
	},
	CSS: {
		SRC: './src/style/**/*.scss',
		DIST: './dist/style/'
	}
};

gulp.task("default", function () {
	let htmlWatcher = gulp.watch(PATHS.HTML.SRC, ['copy-html']);
	htmlWatcher.on('change', function (event) {
		console.log("File " + event.path + " was " + event.type);
	});

	gulp.watch(PATHS.JS.SRC, ['js']);
	gulp.watch(PATHS.CSS.SRC, ['css']);
});

gulp.task("js", function () {
	gulp.src([
			'./src/script/api.js',
			'./src/script/character.js',
			'./src/script/app.js'
		])
		.pipe(concat("app.min.js"))
		.pipe(gulp.dest(PATHS.JS.DIST));
});

gulp.task("css", function () {
	gulp.src(PATHS.CSS.SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat("screen.min.css"))
		.pipe(gulp.dest(PATHS.CSS.DIST));
});

gulp.task("copy-html", function () {
	gulp.src(PATHS.HTML.SRC)
		.pipe(gulp.dest(PATHS.HTML.DIST));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
	return gulp.src("./dist/**/*")
	  .pipe(deploy())
  });

