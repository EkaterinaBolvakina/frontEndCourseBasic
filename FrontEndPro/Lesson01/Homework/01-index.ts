type noteItem = {
    id: number;
    name: string;
    isDone: boolean;
};

let noteItems: noteItem[] = [];

function showNoteItems(): void { // void in TS
    const noteItemsBlockHtml = document.getElementById('noteItemsBlockId');
    if (!noteItemsBlockHtml) return; // Der Ausdruck if (!note) return; wird verwendet, um sicherzustellen, dass der Rest der Funktion nur ausgeführt wird, wenn note tatsächlich gefunden wurde.

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

    const deleteNoteButtons = Array.from(document.getElementsByClassName('btnDeleteNote'));
    for (let btn of deleteNoteButtons) {
        (btn as HTMLButtonElement).addEventListener('click', (e) => {
            const target = e.target as HTMLButtonElement;
            noteItems = deleteNote(Number(target.id));
            showNoteItems();
        });
    }

    const doneCheckBoxes = Array.from(document.getElementsByClassName('doneCheckBox'));
    debugger;
    for (let checkBox of doneCheckBoxes) {
        (checkBox as HTMLInputElement).addEventListener('click', (e) => {
            const target = e.target as HTMLInputElement;
            markNoteDone(Number(target.id), target.checked);
        });
    }

    const editNoteButtons = Array.from(document.getElementsByClassName('btnEditNote'));
    for (let btn of editNoteButtons) {
        (btn as HTMLButtonElement).addEventListener('click', (e) => {
            const target = e.target as HTMLButtonElement;
            editNote(Number(target.id));
        });
    }
}

function deleteNote(id: number): noteItem[] {
    return noteItems.filter(item => item.id !== id);
}

const markNoteDone = (id: number, isChecked: boolean): void => {
    const noteId = `note-${id}`; // Bildung der eindeutigen ID des <p>-Elements
    const noteItem = document.getElementById(noteId); // Suche nach dem <p>-Element per ID
    const note = noteItems.find(item => item.id == id);
    if (!note) return;

    if (isChecked && !note.isDone) { // Überprüfung, ob die Notiz bereits als erledigt markiert ist
        noteItem?.classList.add('note-done');
        note.isDone = true;
    } else if (!isChecked && note.isDone) { // Überprüfung, ob die Notiz als erledigt markiert ist und der Haken entfernt wird
        noteItem?.classList.remove('note-done'); //In TS wird das Fragezeichen (?) nach einem Eigenschaftsnamen oder einem Typnamen verwendet, um anzuzeigen, dass diese Eigenschaft oder dieser Typ optional ist. 
        note.isDone = false;
    }
}

const editNote = (id: number): void => {
    const note = noteItems.find(item => item.id == id);
    if (!note) return;

    const newNoteName = prompt("Enter the new note:");
    if (newNoteName !== null && newNoteName !== "") {
        note.name = newNoteName;
        showNoteItems();
    }
}

const addNewNote = (noteName: string = ''): void => {
    const newNote = { id: Math.random(), name: noteName, isDone: false };
    console.log(newNote);
    noteItems.push(newNote);
    showNoteItems();
}

const addNoteBtn = document.getElementById('btnAddNoteId') as HTMLButtonElement;
const noteInput = document.getElementById('inputNoteId') as HTMLInputElement;
addNoteBtn.addEventListener('click', () => {
    const newNoteName = noteInput.value;
    addNewNote(newNoteName);
    noteInput.value = ''; // Das Eingabefeld leeren
});
