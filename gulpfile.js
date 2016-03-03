"use strict";

var _, watchify, browserify, babelify,
    gulp, source, buffer, gutil, sourcemaps,
    watch, sass, uglify, webserver,

    customOptions, options, bundler;

_ = require("lodash");

watchify = require("watchify");
browserify = require("browserify");
babelify = require("babelify");

gulp = require("gulp");
webserver = require("gulp-webserver");
uglify = require("gulp-uglify");
gutil = require("gulp-util");
watch = require("gulp-watch");
sass = require("gulp-sass");
sourcemaps = require("gulp-sourcemaps");

source = require("vinyl-source-stream");
buffer = require("vinyl-buffer");

customOptions = {
  entries: ["./index.js"],
  debug: true
};

options = _.assign({
  fullPaths: false,
  extensions: [".js", ".jsx"]
}, watchify.args, customOptions);

bundler = watchify(browserify(options));

// Add transformations here.
bundler.transform(babelify);

gulp.task("watch", ["css", "html"], function() {
  bundle();

  gulp.watch("./src/styles/**/*.scss", ["css"]);
  gulp.watch("./src/html/index.html", ["html"]);
});

gulp.task("css", css);
gulp.task("html", html);
gulp.task("runserver", runserver);

bundler.on("update", bundle);
bundler.on("log", gutil.log);

function runserver () {
  gulp.src("./dist")
      .pipe(webserver({
        fallback: "index.html",
        livereload: true
      }));
}

function html () {
  return gulp.src("./src/html/index.html")
    .on("log", gutil.log)
    .pipe(gulp.dest("./dist"));
}

function css () {
  return gulp.src("./src/styles/index.scss")
    .on("log", gutil.log)
    .on("error", gutil.log.bind(gutil, "CSS Error"))
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
}

function bundle () {
  return bundler.bundle()
    .on("error", gutil.log.bind(gutil, "Browserify Error"))
    .pipe(source("build.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))

    // Add transformation tasks to the pipeline here.
    //.pipe(uglify())

    .pipe(sourcemaps.write("./", { debug: true }))
    .pipe(gulp.dest("./dist/js"));
}