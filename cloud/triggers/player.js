Parse.Cloud.afterSave("Player", function(request) {
	//after you save the player you have to get the object out of the request
	var player = request.object;
	//if the player does not exist
	if(!player.existed()) {
		//get the reference to the team he is playing for
	  player.get("team").fetch().then(function(team) {
		  //increment the number of players and save the object(team)
		  team.increment("playerCount", 1);
		  team.save();
	  });
	}
});

Parse.Cloud.afterDelete("Player", function(request) {
	var player = request.object;
	//if the player existed, but you delete it
	if(player.existed()) {
	  player.get("team").fetch().then(function(team) {
		  //decrement the playerCount by 1
		  team.increment("playerCount", -1);
		  team.save();
	  });
	}
});


