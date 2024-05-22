var noteItems = [];
function showNoteItems() {
    var noteItemsBlockHtml = document.getElementById('noteItemsBlockId');
    if (!noteItemsBlockHtml)
        return; // Der Ausdruck if (!note) return; wird verwendet, um sicherzustellen, dass der Rest der Funktion nur ausgeführt wird, wenn note tatsächlich gefunden wurde.
    noteItemsBlockHtml.innerHTML = '';
    var divNoteItemHtml = '';
    for (var _i = 0, noteItems_1 = noteItems; _i < noteItems_1.length; _i++) {
        var item = noteItems_1[_i];
        var noteItemHtml = "\n        <div class=\"noteItem\">\n            <div class=\"divNote ".concat(item.isDone ? 'note-done' : '', "\">\n            <p class=\"note\" id=\"note-").concat(item.id, "\">").concat(item.name, "</p>\n            </div>\n            <div class=\"divNoteButtons\">\n                 <div class=\"divEditBtn\">\n                      <button class=\"btnEditNote\" id=\"").concat(item.id, "\">Edit</button>\n                 </div>\n                 <div class=\"divCheckBox\">\n                      <label >Done\n                        <input type=\"checkbox\" class=\"doneCheckBox\" id=\"").concat(item.id, "\" ").concat(item.isDone ? 'checked' : '', ">\n                      </label>\n                 </div>\n                 <div class=\"divDeleteBtn\">\n                      <button class=\"btnDeleteNote\" id=\"").concat(item.id, "\">Delete</button>\n                 </div>  \n            </div>       \n        </div>\n        ");
        divNoteItemHtml += noteItemHtml;
    }
    noteItemsBlockHtml.innerHTML = divNoteItemHtml;
    var deleteNoteButtons = Array.from(document.getElementsByClassName('btnDeleteNote'));
    for (var _a = 0, deleteNoteButtons_1 = deleteNoteButtons; _a < deleteNoteButtons_1.length; _a++) {
        var btn = deleteNoteButtons_1[_a];
        btn.addEventListener('click', function (e) {
            var target = e.target;
            noteItems = deleteNote(Number(target.id));
            showNoteItems();
        });
    }
    var doneCheckBoxes = Array.from(document.getElementsByClassName('doneCheckBox'));
    debugger;
    for (var _b = 0, doneCheckBoxes_1 = doneCheckBoxes; _b < doneCheckBoxes_1.length; _b++) {
        var checkBox = doneCheckBoxes_1[_b];
        checkBox.addEventListener('click', function (e) {
            var target = e.target;
            markNoteDone(Number(target.id), target.checked);
        });
    }
    var editNoteButtons = Array.from(document.getElementsByClassName('btnEditNote'));
    for (var _c = 0, editNoteButtons_1 = editNoteButtons; _c < editNoteButtons_1.length; _c++) {
        var btn = editNoteButtons_1[_c];
        btn.addEventListener('click', function (e) {
            var target = e.target;
            editNote(Number(target.id));
        });
    }
}
function deleteNote(id) {
    return noteItems.filter(function (item) { return item.id !== id; });
}
var markNoteDone = function (id, isChecked) {
    var noteId = "note-".concat(id); // Bildung der eindeutigen ID des <p>-Elements
    var noteItem = document.getElementById(noteId); // Suche nach dem <p>-Element per ID
    var note = noteItems.find(function (item) { return item.id == id; });
    if (!note)
        return;
    if (isChecked && !note.isDone) { // Überprüfung, ob die Notiz bereits als erledigt markiert ist
        noteItem === null || noteItem === void 0 ? void 0 : noteItem.classList.add('note-done');
        note.isDone = true;
    }
    else if (!isChecked && note.isDone) { // Überprüfung, ob die Notiz als erledigt markiert ist und der Haken entfernt wird
        noteItem === null || noteItem === void 0 ? void 0 : noteItem.classList.remove('note-done'); //In TS wird das Fragezeichen (?) nach einem Eigenschaftsnamen oder einem Typnamen verwendet, um anzuzeigen, dass diese Eigenschaft oder dieser Typ optional ist. 
        note.isDone = false;
    }
};
var editNote = function (id) {
    var note = noteItems.find(function (item) { return item.id == id; });
    if (!note)
        return;
    var newNoteName = prompt("Enter the new note:");
    if (newNoteName !== null && newNoteName !== "") {
        note.name = newNoteName;
        showNoteItems();
    }
};
var addNewNote = function (noteName) {
    if (noteName === void 0) { noteName = ''; }
    var newNote = { id: Math.random(), name: noteName, isDone: false };
    console.log(newNote);
    noteItems.push(newNote);
    showNoteItems();
};
var addNoteBtn = document.getElementById('btnAddNoteId');
var noteInput = document.getElementById('inputNoteId');
addNoteBtn.addEventListener('click', function () {
    var newNoteName = noteInput.value;
    addNewNote(newNoteName);
    noteInput.value = ''; // Das Eingabefeld leeren
});
