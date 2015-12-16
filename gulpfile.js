/*
 *  gulpfile.js
 *  ===========
 *
 *  To add a new task, simply add a new task file in that directory.
 *  gulp/tasks/default.js specifies the default set of tasks to run
 *  when you run `gulp`.
 *
 */

var gulp        = require('gulp'),
    requireDir  = require('require-dir');

// Specify game project paths for tasks.
global.paths = {
    src: './src',
    out: './bin',

    get scripts() { return this.src + '/**/*.js'; },
    get jsEntry() { return this.src + '/index'; }
};

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', {
  recurse: true
});

// default task
//gulp.task('default', ['jshint', 'build']);
