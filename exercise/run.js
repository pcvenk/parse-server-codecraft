

Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";


var Customer = Parse.Object.extend("Customer");
var customer = new Customer();

var data = {

    'name': 'Primoz',
    'surname': 'Cvenkelj',
    'profession': 'js guru'

};

customer.save(data, {

    success: function(user){

        console.log("A new user with the id " + user.id + " was saved!");

        var q = new Parse.Query("Customer");
        q.get(user.id, {

            success: function(user) {

                console.log("A user with the id " + user.id + " was retrieved!");

                user.set('name', 'Cecko');
                user.set('age', 30);

                user.save(null, {

                    success: function(user) {

                        console.log("A user with the id " + user.id + " was updated!");

                        user.destroy({

                            success: function(user) {

                                console.log('User ' +user.id +'was deleted');

                            },
                            error: function(err) {


                            }
                        });

                    },

                    error: function(user, err) {

                        console.log(err);

                    }

                });

            },

            error: function(user, err) {

                console.log(err);
            }

        });

    },
    error: function(user, err){

        console.log(err);

    }

});


