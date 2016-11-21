
Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

// Parse.Cloud.run('hello')
//     .then(function(res){
//        console.log(res);
//     });


// var TestObject = Parse.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.set('foo', 'Value defined');
// testObject.save()
//     .then(function(){
//        console.log('Saved');
//     }, function(err){
//         console.log(err);
//     });

Parse.Cloud.run('resetPlayerNotes')
    .then(function(res){
        console.log(res);
    });