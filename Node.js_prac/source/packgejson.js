var https = require('https');

var server =  https.createServer(function (request, response){
    response.end("Hello World!");
});
server.listen(5050);
console.log("Server is listening on port 5050");