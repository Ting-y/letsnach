var gulp = require('gulp'); // require
var connect = require('gulp-connect'); // plugin that create server
var less = require('gulp-less');
var path = require('path');
var lessFolder = "./less/*.less";
var cssFolder = "./css";
var files = ['./index.html',lessFolder]; // define the watch files


// less compile to css

gulp.task('less', function () {
  return gulp.src(lessFolder)
    .pipe(less())
    .pipe(gulp.dest(cssFolder));
});

// defind 'connect'(server) task
gulp.task('connect', function(){ 
    connect.server({ // it create a server that serve static files
        livereload:true // enable livereload(brower need to download livereload plugin)
    });
});

// define some work flow 
gulp.task('live-reload', function () {
    return gulp.src(files).
        pipe(connect.reload());
});

// run the task when a file changes
gulp.task('watch', function () {
    gulp.watch(files, ['less','live-reload']); // watching files and call the defined work flow
});

// define the default task (called when you run 'gulp' from cli')
gulp.task('default', ['connect', 'watch']);
