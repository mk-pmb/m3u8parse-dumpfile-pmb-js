#!/usr/bin/env node
//#u
var inputFile = (process.argv[2] || process.stdin.fd),
  readAndDump_m3u8 = require('m3u8parse-dumpfile-pmb');

readAndDump_m3u8(inputFile, function report(err, json) {
  if (err) { throw err; }
  if (json.substr(0, 1) !== '{') { throw new Error('Expected a JSON object'); }
  console.log(json);
});
