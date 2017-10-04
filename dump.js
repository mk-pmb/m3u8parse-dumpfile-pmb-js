/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, fs = require('fs'), async = require('async'),
  ersCJ = require('ersatz-compactjson'),
  m3u8parse = require('m3u8parse');

EX = function readAndDumpOneFile(fn, cb) {
  async.waterfall([
    fs.readFile.bind(fs, fn),
    m3u8parse,
    function (data, next) {
      var json = ersCJ(data, { width: 0 });
      return next(null, json);
    }
  ], cb);
};







module.exports = EX;
if (require.main === module) { EX.runFromCLI(); }
