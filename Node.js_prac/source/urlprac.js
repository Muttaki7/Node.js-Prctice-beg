var http = require('http');
var url = require('url');
var server =  http.createServer(function (request, response) {
    var  myurl = '';
    var  myurlobj = url.parse(myurl,true);
    var  myHostName = myurlobj.host;
    var  pathName = myurlobj.pathname;
    var  search = myurlobj.search;
    write(myHostName);
   // write(myurlobj);
    //write(pathName, myurlobj);
    //write(pathName, myurlobj);
});
server.listen(5000);
console.log("Server is listening on port 5000");