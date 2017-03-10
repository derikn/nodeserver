//userController.js file to hold routes.
var Users = {
		user1: "Derik",
		user2: "Lilian",
	};


function index(res) {
	console.log("Request action index was called")
	res.writeHead(200, {"Content-Type": "text/plain"});

	for (user in Users) {
		console.log(Users[user]);
		res.write(Users[user]+ "\n");
	}
	res.end();
}

function show(res) {
	console.log("Request action show was called");
	res.writeHead(200, {"Content-Type": "text/plain"});
	//add logic to show individual users
}
	
exports.index = index;
exports.show = show;