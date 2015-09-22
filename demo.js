var http = require('http');
var port = parseInt(process.env.PORT,10);
var os = require("os");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  msg = '<html>\n'
  msg += '<head>\n'
  msg += '<title>Welcome to Azure!</title>\n'
  msg += '</head>\n'
  msg += '<body>\n'
  msg += '<center><font size="7">Hello, cloud foundry!</font><br/></center>\n'
  msg += '<center><font size="7">This is the first message from <font color="blue"><B>Azure</B></font>!</font></center>\n'
  msg += '<p>hostname is: ' + os.hostname() + '</p>\n'
  msg += '</body>\n'
  msg += '</html>'
  res.end(msg);
}).listen(port, '0.0.0.0');
console.log('Serverning at http://0.0.0.0:' + port.toString() + '/');
