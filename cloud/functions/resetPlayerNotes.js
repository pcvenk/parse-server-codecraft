Parse.Cloud.define("resetPlayerNotes", function(request, response) {
	// Set up to modify user data
	Parse.Cloud.useMasterKey();
	//define a new query
	var q = new Parse.Query("Player");
	//run the query on each player
	q.each(function (player) {
		// Update to plain value passed in
		player.set("notes", "");
		//save the player
		return player.save();
	}).then(function() {
		// Set the job's success status
		response.success("Player notes reset completed successfully.");
	}, function() {
		// Set the job's error status
		response.error("Uh oh, something went wrong.");
	});
});