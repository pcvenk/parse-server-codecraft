//
// 1) Login with the username and password you created in the previous section.
//
// 2) Make the blog post created in function createBlogPostWithACL readable by everyone but only writable by you.
//
//     HINT: Use an ACL
//
// 3) Flesh out the ensureRoles function, create a role called "Admin" and make sure the currently logged in user has write access and is a member.
//
// 4) Make the blog post created in function createBlogPostWithRole readable by everyone but only writable by all Admins.
//
//     HINT: Use the role you created in the ensureRoles function
//
// ***********************************************/
Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";


function ensureRoles() {
    var promise = new Parse.Promise();

    var user = Parse.User.current();
    //creating a new Parse.ACL list
    var aclRole = new Parse.ACL();
    //setting up permissions for public and current user
    aclRole.setPublicReadAccess(true);
    aclRole.setWriteAccess(user, true);

    //creating a new Admin role and assigning the ACL role to it
    var role = new Parse.Role('Admin', aclRole);
    role.save()
        .then(function(){
           // adding the currently logged in user to the admin role
           role.getUsers().add(Parse.User.current());
           role.save()
               .then(function(){
                  console.log('Saved user role with '+ role.id);
                  promise.resolve();
               });
        });

    return promise;
}

function createBlogPostWithACL() {

    var promise = new Parse.Promise();

    //creating the new BLogPost object
    var BlogPost = Parse.Object.extend("BlogPost");
    //creating an instance of the BlogPost object
    var post = new BlogPost();
    //setting key&value pairs to it (first parameter is the column whereas the second one is the value of that column)
    post.set("cotent", "This is some content");
    post.set("published", true);

    var user = Parse.User.current();
    //creating a new ACL list for access permissions
    var aclGroup = new Parse.ACL();
    //setting certain rights for users
    aclGroup.setPublicReadAccess(true);
    aclGroup.setWriteAccess(user, true);

    post.setACL(aclGroup);
    post.save().then(function() {
        console.log("Saved blog post with ACL " + post.id);
        promise.resolve();
    });

    return promise;
}

function createBlogPostWithRole() {
    var promise = new Parse.Promise();

    var BlogPost = Parse.Object.extend("BlogPost");
    var post = new BlogPost();
    post.set("cotent", "This is some content");
    post.set("published", true);

    var aclGroup = new Parse.ACL();
    aclGroup.setPublicReadAccess(true);
    aclGroup.setRoleWriteAccess('Admin', true);
    post.setACL(aclGroup);

    post.save().then(function() {
        console.log("Saved blog post with ACL " + post.id);
        promise.resolve();
    });


    return promise;
}

Parse.User.logIn("Primoz", "mypassword")
    .then(createBlogPostWithACL)
    .then(ensureRoles)
    .then(createBlogPostWithRole);


