//Server.js file to house server listener

var http = require("http");
var url = require("url");

function testserve(route, routes) {
	function onRequest(req, res){

		//parse the url
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(pathname, routes, res);
	}

	http.createServer(onRequest).listen(1337);
	console.log('Server running on http://127.0.0.1:1337');
}

exports.testserve = testserve;
