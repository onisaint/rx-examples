var gulp = require('gulp'),
    $ = require("gulp-load-plugins")(),
    source = require("vinyl-source-stream"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    gulp = require('gulp');
    ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts:server', function() {
    var tsResult = tsProject.src("./src-server/**/*.ts") // instead of gulp.src(...)
        .pipe($.cached("server"))
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./build'));
});

gulp.task("watch:scripts:server", gulp.series(
    "scripts:server",
    function () {
        return gulp.watch("./src-server/**/*.ts");
    }
));


// ts watchers
gulp.task('ts', function() {
});
