

Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

var TestObject = Parse.Object.extend('TestObject');

function createRoles(){
    // creating a new ACL needed for the Admin role
    var roleACL = new Parse.ACL();
    roleACL.setPublicReadAccess(true);
    roleACL.setWriteAccess(Parse.User.current(), true);

    //creating a new role, assigning it the role ACL; assign the user to that role and save it
    var role = new Parse.Role('Admin', roleACL);
    role.save()
        .then(function() {
            role.getUsers().add(Parse.User.current());
            role.save()
                .then(function(role) {
                   console.log('Role created '+role.id);
                });
        });
}

Parse.User.logIn('Primoz', 'mypassword')
    .then(createRoles);


function main(){
  console.log('Main called');

  var user = Parse.User.current();
  //  creating a new instance of the Parse.ACL method
  var groupACL = new Parse.ACL();
  //  giving a specific role read and/or write access
  groupACL.setRoleWriteAccess("Admin", true);
  groupACL.setRoleReadAccess("Admin", false);
  //  giving the public read-only access
  groupACL.setPublicReadAccess(true);

  var testObject = new TestObject();
  //  setting the ACL to the testObject
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