//main index file to connect routes with controller

var server = require("./server");
var router = require("./router");
var UserController = require("./UserController");

var routes = {}
routes['/index'] = UserController.index;
routes['/show'] = UserController.show;

server.testserve(router.route, routes)
