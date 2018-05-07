var mysql = require("mysql");
var connection;

/*var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db",
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});*/

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db",
		socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
 	});
};

connection.connect(function(err){
	if(err){
		console.error("Error Connecting " + err.stack);
	}
	console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;