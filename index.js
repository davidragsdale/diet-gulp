'use strict';

var util = require('util');
var Undertaker = require('undertaker');
var vfs = require('vinyl-fs');

function Gulp() {
  Undertaker.call(this);

  // Bind the functions for destructuring
  this.task = this.task.bind(this);
  this.series = this.series.bind(this);
  this.parallel = this.parallel.bind(this);
  this.registry = this.registry.bind(this);
  this.tree = this.tree.bind(this);
  this.lastRun = this.lastRun.bind(this);
  this.src = this.src.bind(this);
  this.dest = this.dest.bind(this);
  this.symlink = this.symlink.bind(this);
}
util.inherits(Gulp, Undertaker);

Gulp.prototype.src = vfs.src;
Gulp.prototype.dest = vfs.dest;
Gulp.prototype.symlink = vfs.symlink;

// Let people use this class from our instance
Gulp.prototype.Gulp = Gulp;

var inst = new Gulp();
module.exports = inst;