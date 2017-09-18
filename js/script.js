function bold()
{
    document.execCommand('bold');
}

function underline() {
    document.execCommand('underline');
}

function italic() {
    document.execCommand('italic');
}

function copy()
{
    document.execCommand('copy');
}

function cut() {
    document.execCommand('cut');
}

function unorderedList()
{
    document.execCommand('insertUnorderedList');
}

function orderedList() {
    document.execCommand('insertOrderedList');
}

function justifyLeft()
{
    document.execCommand('justifyLeft');
}

function justifyRight() {
    document.execCommand('justifyRight');
}

function justifyCenter() {
    document.execCommand('justifyCenter');
}

function justifyAll()
{
    document.execCommand('justifyFull');
}

function strikeThrough()
{
    document.execCommand('strikeThrough');
}

function subscript() {
    document.execCommand('subscript');
}

function superscript() {
    document.execCommand('superscript');
}

function undo() {
    document.execCommand('undo');
}

function redo() {
    document.execCommand('redo');
}

function selectAll()
{
    document.execCommand('selectAll');
}

/* TO DO
function highlight()
{   //stylewithCSS reqd
    document.execCommand('hiliteColor');
}

function createLink()
{
    //use third party lib for prompt
   // var a = prompt('Enter the URL');
    document.execCommand('createLink', a);
}*/

function save()
{
    var text = $("#textarea").html();
    var file = new File([text], "file.edit", { type: "text/html;charset=utf-8" })
    saveAs(file);
}


var fs = require('fs');
var remote = require('electron');
var dialog = remote.remote.dialog;
var path = require('path');
console.log(dialog);

function openfile() {
    console.log("TEST");


    dialog.showOpenDialog({
        properties: ['openFile']
    }, (fileNames) => {
        // fileNames is an array that contains all the selected
        if (fileNames === undefined) {
            console.log("No file selected");
            return;
        }
        fs.readFile(fileNames[0], 'utf-8', (err, data) => {
            if (err) {
                alert("An error ocurred reading the file :" + err.message);
                return;
            }

            // Change how to handle the file content
            $("#textarea").html(data);
        });
    });
}