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