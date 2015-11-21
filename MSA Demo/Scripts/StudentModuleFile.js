var StudentModule = (function () {
    //Only functions returned from this closure is exposed and can be accessed
    return {
        getStudents: function (callback) {
            //Code to make API calls goes here
            console.log("Called from StudentModule");
            //accessing JQuery for API
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://msademoweb.azurewebsites.net/api/Students",
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());