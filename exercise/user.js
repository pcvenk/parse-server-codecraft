
Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";


//creating new user class
// var user = new Parse.User();
//
// //setting up the required attributes
// user.set('username', 'Primoz');
// user.set('password', 'mypassword');
//
// //adding additional attributes
// user.set('email', 'primoz.cvenkelj@weblio.si');
// user.set('name', 'Primoz');
// user.set('gender', 'male');

//saving user
// user.signUp()
//     .then(function(user){
//        console.log('Created new user ' +user);
//     });

//UserLogin
// Parse.User.logIn('Primoz', 'mypassword')
//     .then(function(user){
//        console.log(Parse.User.current());
//        console.log(user.attributes);
//     });

//userLogout
// Parse.User.logOut()
//     .then(function success(){
//         console.log(Parse.User.current());
//     }, function error(err){
//         console.log(err);
//     });

function signUp(data) {
    console.log("SignUp called", data);
    var user = new Parse.User();
    user.set("username", data.email);
    user.set("password", data.password);
    user.set("email", data.email);
    user.signUp().then(
        function success(user) {
            console.log("Signed Up ", user);
        },
        function error(err) {
            alert("Error: " + err.code + " " + err.message);
        }
    );
};

function login(data) {
    console.log("Login called", data);
    Parse.User.logIn(data.email, data.password).then(
        function success(user) {
            console.log("Logged in ", user);
        },
        function error(err) {
            alert("Error: " + err.code + " " + err.message);
        }
    );
};

function logout() {
    console.log("Logout called");
    Parse.User.logOut().then(function(user) {
        console.log("Logged Out!");
    });
};

$(document).ready(function() {

    // SignUp Form
    var signupForm = $("#signup-form");
    signupForm.submit(function(e) {
        e.preventDefault();
        var data = {};
        signupForm.serializeArray().map(function(x){data[x.name] = x.value;});
        signUp(data);
    });

    // Login Form
    var loginForm = $("#login-form");
    loginForm.submit(function(e) {
        e.preventDefault();
        var data = {};
        loginForm.serializeArray().map(function(x){data[x.name] = x.value;});
        login(data);
    });

    // Logout Button
    var logoutBtn = $("#logout-btn");
    logoutBtn.click(function(e) {
        e.preventDefault();
        logout();
    });

});