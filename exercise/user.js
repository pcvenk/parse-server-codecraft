
Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";


//creating new user class
var user = new Parse.User();

//setting up the required attributes
user.set('username', 'Primoz');
user.set('password', 'mypassword');

//adding additional attributes
user.set('email', 'primoz.cvenkelj@weblio.si');
user.set('name', 'Primoz');
user.set('gender', 'male');

//saving user
// user.signUp()
//     .then(function(user){
//        console.log('Created new user ' +user);
//     });

//UserLogin
Parse.User.logIn('Primoz', 'mypassword')
    .then(function(user){
       console.log(Parse.User.current());
       console.log(user.attributes);
    });

//userLogout
// Parse.User.logOut()
//     .then(function success(){
//         console.log(Parse.User.current());
//     }, function error(err){
//         console.log(err);
//     });