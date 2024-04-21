let noteItems = [
    /*
{id: '1', name:'Brot kaufen 1', isDone: false},
{id: '2', name:'Brot kaufen 2', isDone: false},
{id: '3', name:'Brot kaufen 3', isDone: false},
*/
];

function showNoteItems() {
    const noteItemsBlockHtml = document.getElementById('noteItemsBlockId');
    noteItemsBlockHtml.innerHTML = '';

    let divNoteItemHtml = '';

    for (let item of noteItems) {

        const noteItemHtml = `
        <div class="noteItem">
            <div class="divNote ${item.isDone ? 'note-done' : ''}">
            <p class="note" id="note-${item.id}">${item.name}</p>
            </div>
            <div class="divNoteButtons">
                 <div class="divEditBtn">
                      <button class="btnEditNote" id="${item.id}">Edit</button>
                 </div>
                 <div class="divCheckBox">
                      <label >Done
                        <input type="checkbox" class="doneCheckBox" id="${item.id}" ${item.isDone ? 'checked' : ''}>
                      </label>
                 </div>
                 <div class="divDeleteBtn">
                      <button class="btnDeleteNote" id="${item.id}">Delete</button>
                 </div>  
            </div>       
        </div>
        `;

        divNoteItemHtml += noteItemHtml;
    }
    noteItemsBlockHtml.innerHTML = divNoteItemHtml;

    const deleteNoteButtons = document.getElementsByClassName('btnDeleteNote');
    for (let btn of deleteNoteButtons) {
        btn.addEventListener('click', (e) => {
            noteItems = deleteNote(e.target.id);
            showNoteItems();
        });
    }

    const doneCheckBoxes = document.getElementsByClassName('doneCheckBox');
    debugger;
    for (let checkBox of doneCheckBoxes) {
        checkBox.addEventListener('click', (e) => {
            markNoteDone(e.target.id, e.target.checked);
        });
    }

    const editNoteButtons = document.getElementsByClassName('btnEditNote');
    for (let btn of editNoteButtons) {
        btn.addEventListener('click', (e) => {
            editNote(e.target.id);
        });
    }
}

const deleteNote = (id) => {
    const res = noteItems.filter(item => item.id.toString() !== id);
    return res;
}

const markNoteDone = (id, isChecked) => {
    const noteId = `note-${id}`; // Bildung der eindeutigen ID des <p>-Elements
    const noteItem = document.getElementById(noteId); // Suche nach dem <p>-Element per ID
    const note = noteItems.find(item => item.id.toString() === id);
    if (isChecked && !note.isDone) { // Überprüfung, ob die Notiz bereits als erledigt markiert ist
        noteItem.classList.add('note-done');
        note.isDone = true;
    } else if (!isChecked && note.isDone) { // Überprüfung, ob die Notiz als erledigt markiert ist und der Haken entfernt wird
        noteItem.classList.remove('note-done');
        note.isDone = false;
    }
}

const editNote = (id) => {
    const note = noteItems.find(item => item.id.toString() === id);
    const newNoteName = prompt("Enter the new note:");
    if (newNoteName !== null && newNoteName !== "") {
        note.name = newNoteName;
        showNoteItems();
    }
}
// --------------

// neue Notiz hinzufügen
const addNote = (noteName = '') => {
    const newNote = { id: Math.random(), name: noteName, isDone: false };
    console.log(newNote);
    noteItems.push(newNote);
    showNoteItems();
}

const addNoteBtn = document.getElementById('btnAddNoteId');
const noteInput = document.getElementById('inputNoteId');
addNoteBtn.addEventListener('click', () => {
    const newNoteName = noteInput.value;
    addNote(newNoteName);
    noteInput.value = ''; // Das Eingabefeld leeren
});
