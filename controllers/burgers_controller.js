var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.select(function(data){
		var burgObj = {burgers: data};

			console.log(burgObj);

		res.render("index", {burgers: data});
	});
});

router.post("/api/burgers", function(req, res){
	burger.insert([req.body.burger_name] ,function(result){


		res.json({ id: result.insertId });
	});
});

router.put("/api/burger/:id", function(req, res){

	console.log(req.params.id);
	console.log(req.body.devoured);

	burger.update([req.params.id], [req.body.devoured], function(result){
	if (result.changedRows === 0) {
     	return res.status(404).end();
    } else {
      res.status(200).end();
    }
	});
});

module.exports = router;