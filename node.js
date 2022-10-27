var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

var fs = require('fs');

fs.appendFile('textFile.txt', 'Testing', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('textFile1.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

fs.writeFile('textFile2.txt', 'Hello content!', function (err) {
if (err) throw err;
console.log('Saved!');
});

fs.appendFile('textFile.txt', 'More Testing', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

fs.unlink('textFile2.txt', function (err) {
if (err) throw err;
console.log('File deleted!');
});

fs.rename('textFile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });