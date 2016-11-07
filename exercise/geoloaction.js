Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

//creating a new object caleed Place
var Place = Parse.Object.extend('Place');
//creating a new geoPoint and pass in the user location
var myLocation = new Parse.GeoPoint({latitude: 51.54444, longitude: -0.022974});

var q = new Parse.Query('Place');
q.find().then(function(coffeeshops){

    for(var i=0; i<coffeeshops.length; i++){
        //find all the places around me, and display their name
        console.log(coffeeshops[i].get('name'));
    }

});
