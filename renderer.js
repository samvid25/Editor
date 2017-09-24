var remote = require('electron').remote;
// `remote.require` since `Menu` is a main-process module.
var buildEditorContextMenu = remote.require('electron-editor-context-menu');

window.addEventListener('contextmenu', function (e) {
    // Only show the context menu in text editors.
    if (!e.target.closest('textarea, input, [contenteditable="true"]')) return;

    var menu = buildEditorContextMenu();
    console.log(menu);

    // The 'contextmenu' event is emitted after 'selectionchange' has fired but possibly before the
    // visible selection has changed. Try to wait to show the menu until after that, otherwise the
    // visible selection will update after the menu dismisses and look weird.
    setTimeout(function () {
        menu.popup(remote.getCurrentWindow());
    }, 30);
});