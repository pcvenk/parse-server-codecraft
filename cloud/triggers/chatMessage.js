Parse.Cloud.beforeSave("ChatMessage", function (request, response) {
	var obj = request.object;
	if (!obj.get("name")) {
		response.error("name must be set");
	} else if (!obj.get("name")) {
		response.error("message must be set");
	}
	else {
		response.success();
	}
});


Parse.Cloud.afterSave("ChatMessage", function (request, response) {
	var content = request.object.get("content");
	var name = request.object.get("name");
	if (content && (content.indexOf("@bot") > -1)) {
		var ChatMessage = Parse.Object.extend("ChatMessage");
		var message = new ChatMessage();
		message.set("name", "bot");
		message.set("content", "Hia @" + name + " how can I help you?");
		message.save().then(function (obj) {
			console.log("Bot responded");
		});
	}
	response.success();
});