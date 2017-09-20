/* ----------------------File save and open---------------------- */

//Save
function save() {
    //Extract the text in the editor
    var text = $("#textarea").html();
    //Save the extracted text with a custom .edit extension
    var file = new File([text], "file.edit", { type: "text/html;charset=utf-8" })
    saveAs(file);
}


//Open
var fs = require('fs');
var remote = require('electron');
var dialog = remote.remote.dialog;
var path = require('path');
console.log(dialog);

function openfile() {
    dialog.showOpenDialog({
        properties: ['openFile']
    }, (fileNames) => {
        if (fileNames === undefined) {
            console.log("No file selected");
            return;
        }
        fs.readFile(fileNames[0], 'utf-8', (err, data) => {
            if (err) {
                alert("An error ocurred reading the file :" + err.message);
                return;
            }

            $("#textarea").html(data);
        });
    });
}