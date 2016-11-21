
Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

Parse.Cloud.run('hello')
    .then(function(res){
       console.log(res);
    });