Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

//creating a new object caleed Place
var Place = Parse.Object.extend('Place');
//creating a new geoPoint and pass in the user location
var myLocation = new Parse.GeoPoint({latitude: 51.54444, longitude: -0.022974});

// var q = new Parse.Query('Place');
// //adding a query parameter to search only coffeshops near my location and limiting the result
// //to 25 hits
// q.near('geo', myLocation);
// q.limit(25);
// q.find().then(function(coffeeshops){
//
//     for(var i=0; i<coffeeshops.length; i++){
//         var coffeeshop = coffeeshops[i];
//         //printing put the distance in kilometers to coffeeshops
//         var distance = coffeeshop.get('geo').kilometersTo(myLocation);
//         //find all the places around me, and display their name
//         console.log(coffeeshop.get('name')+ "," + " distance " + distance + " kilometers");
//     }
//
// });

var q = new Parse.Query('Place');
//adding a query parameter to search only coffeshops within 5 kilometers and limit the result to
//10 cofeeshops
q.withinKilometers('geo', myLocation, 5);
q.find().then(function(coffeeshops){

    for(var i=0; i<coffeeshops.length; i++){
        var coffeeshop = coffeeshops[i];
        //printing put the distance in kilometers to coffeeshops
        var distance = coffeeshop.get('geo').kilometersTo(myLocation);
        //find all the places around me, and display their name
        console.log(coffeeshop.get('name')+ "," + " distance " + distance + " kilometers");
    }

});