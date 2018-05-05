var orm = require("../config/orm.js");

var burger = {

	select: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insert: function(burgNam, cb){
		orm.insertOne("burgers", burgNam, function(res){
			cb(res);
		});
	},
	update: function(burgId, burgBool, cb){
		orm.updateOne("burgers", burgId, burgBool, function(res){
			cb(res);
		});
	}
};

module.exports = burger;