Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";

$(document).ready(function(e) {

    $("#upload").on("click", function(e) {

        e.preventDefault();

        var fileUploadControl = $("#file")[0];
        if (fileUploadControl.files.length > 0) {
            //getting the file and file name out of the fileUploadControl var
            var file = fileUploadControl.files[0];
            var name = file.name;
            //creating a new instance of the Parse.File object and passing in the file and its name
            var parseFile = new Parse.File(name, file);
            //saving the file returns a promise
            parseFile.save()
                .then(function success() {

                console.log("File Uploaded " + parseFile.url());

                var a = $("#link");
                a.attr("href", parseFile.url());
                a.text(parseFile.url());

                }, function error(err){

                    console.log(err);
                });
        }
    });
});