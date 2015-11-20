// This event triggers on page load
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and ready to go!");
    //calls the below define funtion loadStudents()
    loadStudents();
});
function loadStudents() {
    //call method getStudents() defined in variable StudentModule in the StudentModuleFile.js file 
    StudentModule.getStudents(setupStudentsTable);
    //this wouldn't work because variable StudentModule doesn't return a privateThingy function()
    console.log(StudentModule.privateThingy);
}
function setupStudentsTable(studentsList) {
    var studentTable = document.getElementById("studentListID");
    //console.log(studentsList);

    for (i = 0; i < studentsList.length; i++) {
        var row = document.createElement("tr");

        var firstNameCol = document.createElement("td");
        firstNameCol.innerHTML = studentsList[i].name;
        row.appendChild(firstNameCol);

        var lastNameCol = document.createElement("td");
        lastNameCol.innerHTML = studentsList[i].surname
        row.appendChild(lastNameCol);

        var countryCol = document.createElement("td");
        countryCol.innerHTML = studentsList[i].country
        row.appendChild(countryCol);

        studentTable.appendChild(row);
    }


}