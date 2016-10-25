

Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

var TestObject = Parse.Object.extend('TestObject');

function main(){
  console.log('Main called');

  var user = Parse.User.current();
  //  creating a new instance of the Parse.ACL method
  var groupACL = new Parse.ACL();
  //  giving a specific user read and/or write access
  groupACL.setWriteAccess(user, true);
  groupACL.setReadAccess(user, false);

  var testObject = new TestObject();
  testObject.setACL(groupACL);

  //  setting ACL read and write rights to the current user
  // testObject.setACL(new Parse.ACL(Parse.User.current()));
  testObject.set('Value', 'bar');
  testObject.save()
      .then(function success(object){
          console.log('TestObject saved with the '+object.id);

      });


}

Parse.User.logIn('Primoz', 'mypassword')
    .then(main);