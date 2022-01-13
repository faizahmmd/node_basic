let url = require("url");
let http = require("http");
let fs = require("fs");
let myModule = require("./custom_module_test.js");
var slug = require('slug')
var print = console.log.bind(console, '>')

http.createServer(function(request, response){
    let parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    fs.readFile("."+parsedUrl.path,"utf8", function(error, data){
        if(error){
            console.log("Error reading file");
            console.log(myModule.fromCustomModule);
            response.writeHead(404, "Error reading file.", {"Content-type":"text/html"});
            response.write("<h1>Error reading file.</h1>");
            response.end("Error reading file.");
            return;
        }
        console.log(data);
        console.log(myModule.fromCustomModule);
        print(slug('This is to test slug.'))
        response.writeHead(200, "Success.", {"Content-type":"text/html"});
  response.write(data);
  response.end();
    });
}).listen(3000);