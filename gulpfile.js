"use strict";

var gulp = require('gulp'),
    $ = require("gulp-load-plugins")(),
    path = require("path"),
    source = require("vinyl-source-stream"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    gulp = require('gulp'),
    ts = require('gulp-typescript'),
    tsify = require("tsify"),
    fs = require("fs"),
    babelify = require('babelify');

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

gulp.task("watch:scripts:client", function () {
    const files = fs.readdirSync('./src-client');

    for(let i = 0; i < files.length; i++){
         const file = files[i];
        if(path.extname(file) !== ".js") continue;

        initBundlerWatch(path.join("src-client", file));
    }

    return gulp.watch("./src-client/**/*.js")
        .on("change", initBundlerWatch);
})

var bundlers = {};
function initBundlerWatch(file) {
    if(bundlers.hasOwnProperty(file))
        return;

    const bundler = createBundler(file);
    const watcher = watchify(bundler);
    const fileName = path.basename(file);

    function bundle() {
        return bundler
            .bundle()
            .on("error", error => console.log(error))
            .pipe(source(fileName))
            .pipe(gulp.dest('./public/build'));
    }

    watcher.on("update", bundle);
    watcher.on("time", time => console.log(`built client in ${time}ms`));

    bundle();
}

function createBundler(file) {
    return browserify()
        .plugin(tsify, { target: 'es6' })
        .transform(babelify, { extensions: [ '.tsx', '.ts' ] });
}

gulp.task("watch:scripts", gulp.parallel("watch:scripts:client", "watch:scripts:server"))