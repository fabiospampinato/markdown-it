#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';

var fs = require('fs');
var path = require('path');

var md = require('../')({
  html: true,
  linkify: false,
  typographer: false
});

// var data = fs.readFileSync(path.join(__dirname, '/samples/lorem1.txt'), 'utf8');
var data = fs.readFileSync(path.join(__dirname, '../test/fixtures/commonmark/spec.txt'), 'utf8');

console.time('profile');
for (var i = 0; i < 200; i++) {
  md.render(data);
}
console.timeEnd('profile');
