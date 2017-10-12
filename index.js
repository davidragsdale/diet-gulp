'use strict';

const vinylFs = require('vinyl-fs');
const util = require('util');
const Orchestrator = require('orchestrator');

const Gulp = function Gulp() {
  Orchestrator.call(this);
};
util.inherits(Gulp, Orchestrator);

Gulp.prototype.task = Gulp.prototype.add;
Gulp.prototype.run = function run(...args) {
  const tasks = args.length ? args : ['default'];
  this.start(...tasks);
};
Gulp.prototype.dest = vinylFs.dest;
Gulp.prototype.src = vinylFs.src;
Gulp.prototype.Gulp = Gulp;

module.exports = new Gulp();
