/* -----------------------Text Formatting----------------------- */

function bold()
{
    document.execCommand('bold');
    $('#textarea').focus();
}

function underline() {
    document.execCommand('underline');
    $('#textarea').focus();
}

function italic() {
    document.execCommand('italic');
    $('#textarea').focus();
}

function copy()
{
    document.execCommand('copy');
    $('#textarea').focus();
}

function cut() {
    document.execCommand('cut');
    $('#textarea').focus();
}

function unorderedList()
{
    document.execCommand('insertUnorderedList');
    $('#textarea').focus();
}

function orderedList() {
    document.execCommand('insertOrderedList');
    $('#textarea').focus();
}

function justifyLeft()
{
    document.execCommand('justifyLeft');
    $('#textarea').focus();
}

function justifyRight() {
    document.execCommand('justifyRight');
    $('#textarea').focus();
}

function justifyCenter() {
    document.execCommand('justifyCenter');
    $('#textarea').focus();
}

function justifyAll()
{
    document.execCommand('justifyFull');
    $('#textarea').focus();
}

function strikeThrough()
{
    document.execCommand('strikeThrough');
    $('#textarea').focus();
}

function subscript() {
    document.execCommand('subscript');
    $('#textarea').focus();
}

function superscript() {
    document.execCommand('superscript');
    $('#textarea').focus();
}

function undo() {
    document.execCommand('undo');
    $('#textarea').focus();
}

function redo() {
    document.execCommand('redo');
    $('#textarea').focus();
}

function selectAll()
{
    document.execCommand('selectAll');
}

/* TO DO
function highlight()
{   //stylewithCSS reqd
    //or create custom execCommand with insertHTML and inline CSS styling within HTML using a color picker
    document.execCommand('hiliteColor');
}

function createLink()
{
    //use third party lib for prompt
   // var a = prompt('Enter the URL');
    document.execCommand('createLink', a);
}*/