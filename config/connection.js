var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db",
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function(err){
	if(err){
		console.error("Error Connecting " + err.stack);
	}
	console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;