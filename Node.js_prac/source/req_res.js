var http = require('http');

var server =  http.createServer(function (request, response){
    if (request.url == "/"){
        response.writeHead(200, {"Content-Type": "text/plain/html"});
        response.write("<h1><Home Page></Home></h1>");
        response.end();
    }
    else if (request.url == "/about"){
            response.writeHead(200, {"Content-Type": "text/plain/html"});
            response.write("<h1><About Page></Home></h1>");
            response.end();
    }
    else if (request.url == "/contact"){
            response.writeHead(200, {"Content-Type": "text/plain/html"});
            response.write("<h1><Contact Page></Home></h1>");
            response.end();
    }

});
server.listen(5055);
console.log("Server is listening on port 5055");