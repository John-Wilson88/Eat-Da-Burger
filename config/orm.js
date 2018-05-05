var connection = require("../config/connection.js");

var orm = {

	selectAll: function(tableName, cb){
		connection.query("SELECT * FROM ??;",  tableName, function(err, result){
			if(err){
				console.error(err);
			}
			cb(result);
		});
	},

	insertOne: function(tableName, burgerName, cb){
		connection.query("INSERT INTO ?? (burger_name) VALUES (?)", [tableName, burgerName], function(err, result) {
			if(err){
				console.error(err);
			}
			cb(result);
		});
	},

	updateOne: function(tableName, burgerId, burgerBool, cb){
		connection.query("UPDATE ?? SET devoured = ? WHERE id = ?", [tableName, burgerBool, burgerId], function(err, result){
			if(err){
				console.error(err);
			}
			cb(result);
		});
	}

};

module.exports = orm;