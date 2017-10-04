
<!--#echo json="package.json" key="name" underline="=" -->
m3u8parse-dumpfile-pmb
======================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Read a file, m3u8parse() it, and dump the result as JSON.
<!--/#echo -->


Usage
-----

<!--#include file="cli.js" start="//#u" code="javascript" -->
<!--#verbatim lncnt="10" -->
```javascript
var inputFile = (process.argv[2] || process.stdin.fd),
  readAndDump_m3u8 = require('m3u8parse-dumpfile-pmb');

readAndDump_m3u8(inputFile, function report(err, json) {
  if (err) { throw err; }
  if (json.substr(0, 1) !== '{') { throw new Error('Expected a JSON object'); }
  console.log(json);
});
```
<!--/include-->

```bash
$ m3u8parse-dumpfile-pmb streams.m3u8 | grep -m 1 -C 2 -Fe e-band
    { "info": {
        "bandwidth": "1322894",
        "average-bandwidth": "568881",
        "codecs": "\"avc1.64001f,mp4a.40.2\"",
        "resolution": "1280x720",
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
