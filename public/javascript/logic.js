$(function() {

$(".dev").on("click", function(event){
	var id = $(this).data("id");
	console.log(id);
	var newDev = $(this).data("devoured");

	var newDevState = {
		devoured: newDev
	};


	$.ajax("/api/burger/" + id, {
		type: "PUT",
		data: newDevState
	}).then(function(){
		console.log(id + "devoured state changed to " + newDev);

		location.reload();
	});
});

$(".createNew").on("submit", function(event){
	event.preventDefault();

	var newBurger = {
		burger_name: $("#newBurg").val().trim()
	};

	$.ajax("/api/burgers", {
		type: "POST",
		data: newBurger
	}).then(function(){
		console.log("new Burger Added");

		location.reload();
	});
});



});