Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

var TestObject = new Parse.Object.extend('TestObject');

var q = new Parse.Query('LiveQueries');
q.equalTo('Value', 'bar');

var subscription = q.subscribe();

subscription.on('open', function(){

    console.log('Object opened');
});

subscription.on('create', function(){

    console.log('Object created');
});

subscription.on('update', function(){

    console.log('Object updated');
});

subscription.on('leave', function(){

    console.log('Object does not meet the criteria');
});

subscription.on('enter', function(){

    console.log('Object meets the criteria');
});